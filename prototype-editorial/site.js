/*
 * Site behaviour. Every effect here maps onto a Webflow Interactions 2.0
 * trigger (page load, scroll into view, while scrolling in view, click,
 * hover) or a one-line embed; the README lists which is which. Nothing is
 * hidden without this script: content is complete at rest, reveals only
 * dim what is still below the fold, and reduced motion switches it all off.
 */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* Review notes: ?notes=on shows every flag and image brief. Remembered per tab. */
  var notes = /[?&]notes=(on|1)/.test(location.search) || sessionStorage.getItem('hc-notes') === 'on';
  if (/[?&]notes=off/.test(location.search)) { notes = false; sessionStorage.removeItem('hc-notes'); }
  if (notes) {
    sessionStorage.setItem('hc-notes', 'on');
    document.body.classList.add('has-notes');
    document.querySelectorAll('.flag, .media_brief, .is-draft').forEach(function (el) { el.hidden = false; });
  }

  /* Giant words: a hero word is sized to fit its frame exactly; a section
     word keeps its size and crops at the right edge unless it would lose
     more than a third, in which case it is sized to show in full. */
  function fitGiants() {
    document.querySelectorAll('[data-giant]').forEach(function (el) {
      el.style.fontSize = '';
      var box = el.parentElement.clientWidth - parseFloat(getComputedStyle(el).paddingLeft);
      var w = el.scrollWidth, fs = parseFloat(getComputedStyle(el).fontSize);
      var isHero = el.classList.contains('hero_word');
      if (w > box && (isHero || w > box * 1.5)) el.style.fontSize = (fs * box / w) + 'px';
    });
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitGiants);
  fitGiants();
  addEventListener('resize', fitGiants);

  /* Page load: the page fades up from navy; the hero copy rises in. */
  document.body.classList.add('is-loaded');

  /* Alert: dismissal remembered per alert id, so a new alert reappears. */
  var alert = document.getElementById('alert');
  var key = 'hc-alert-dismissed';
  if (alert && store.get(key) === alert.dataset.alertId) alert.hidden = true;
  var alertClose = document.getElementById('alert-close');
  if (alertClose) alertClose.addEventListener('click', function () { alert.hidden = true; store.set(key, alert.dataset.alertId); placeHeader(); });

  /* Header: sits over the framed hero at rest, docks to a white bar once scrolled past it. */
  var header = document.getElementById('header');
  var hero = document.querySelector('.hero');
  function placeHeader() {
    if (!header) return;
    if (header.classList.contains('is-docked') || !hero) { header.style.top = ''; return; }
    header.style.top = ((alert && !alert.hidden ? alert.offsetHeight : 0) + parseInt(getComputedStyle(hero).paddingTop, 10)) + 'px';
  }
  function onScroll() {
    if (!header) return;
    var limit = hero ? hero.getBoundingClientRect().bottom < 80 : scrollY > 80;
    header.classList.toggle('is-docked', limit);
    placeHeader();
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', placeHeader);
  onScroll();

  /* Menu: full screen, every page listed. Escape closes; closed, it is inert. */
  var menu = document.getElementById('site-menu'), open = document.getElementById('menu-open'), close = document.getElementById('menu-close');
  function setMenu(on) {
    menu.classList.toggle('is-open', on);
    menu.inert = !on;
    open.setAttribute('aria-expanded', on);
    document.body.classList.toggle('is-locked', on);
    (on ? close : open).focus();
  }
  if (menu) {
    open.addEventListener('click', function () { setMenu(true); });
    close.addEventListener('click', function () { setMenu(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });
  }

  /* Accordions: FAQ rows, trades, pillars (below 1024 or when not pinned). */
  function toggle(row, btn, cls) {
    var on = !row.classList.contains(cls);
    row.classList.toggle(cls, on);
    btn.setAttribute('aria-expanded', on);
  }
  document.querySelectorAll('.faq_toggle').forEach(function (btn) {
    btn.addEventListener('click', function () { toggle(btn.closest('.faq_row'), btn, 'is-open'); });
  });
  document.querySelectorAll('.trade_toggle').forEach(function (btn) {
    btn.addEventListener('click', function () { toggle(btn.closest('.trade'), btn, 'is-open'); });
  });

  /* A link to #question opens that FAQ row. */
  function openHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var row = document.getElementById(id);
    if (row && row.classList.contains('faq_row')) {
      row.classList.add('is-open');
      row.querySelector('.faq_toggle').setAttribute('aria-expanded', 'true');
    }
  }
  openHash();
  addEventListener('hashchange', openHash);

  /* Copy buttons. */
  var toast = document.getElementById('toast'), t;
  function say(msg) { toast.textContent = msg; toast.classList.add('is-shown'); clearTimeout(t); t = setTimeout(function () { toast.classList.remove('is-shown'); }, 1800); }
  function copy(v, fallbackEl) {
    var p = navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(v) : Promise.reject();
    p.then(function () { say('Copied ' + v); }, function () {
      if (fallbackEl) { var r = document.createRange(); r.selectNodeContents(fallbackEl); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      say('Select and copy the address.');
    });
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () { copy(b.dataset.copy, b.previousElementSibling); });
  });
  document.querySelectorAll('[data-copy-url]').forEach(function (b) {
    b.addEventListener('click', function () { copy(location.href.split('#')[0]); });
  });

  /* Scroll reveals: elements still below the fold are dimmed, then rise in
     with a sibling stagger. Reduced motion: nothing is held. */
  var revealTargets = document.querySelectorAll('[data-reveal]');
  if (!reduce && 'IntersectionObserver' in window) {
    var fold = innerHeight;
    var pending = [];
    revealTargets.forEach(function (el) {
      if (el.getBoundingClientRect().top <= fold) return;
      var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (s) { return s.hasAttribute('data-reveal'); }) : [el];
      el.style.setProperty('--reveal-order', String(Math.min(sibs.indexOf(el), 6)));
      el.classList.add('is-pending');
      pending.push(el);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('is-pending'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    pending.forEach(function (el) { io.observe(el); });
  }

  /* Scroll progress, 0 → 1, of an element crossing the viewport. Stands in
     for Webflow's "while scrolling in view". */
  var tracked = [];
  function progressOf(el, startAt, endAt) {
    var r = el.getBoundingClientRect(), vh = innerHeight;
    var start = vh * startAt, end = vh * endAt;
    var p = (start - r.top) / (r.height + start - end);
    return Math.max(0, Math.min(1, p));
  }
  function track(el, fn, startAt, endAt) { tracked.push({ el: el, fn: fn, s: startAt == null ? 0.85 : startAt, e: endAt == null ? 0.45 : endAt }); }
  function tick() {
    for (var i = 0; i < tracked.length; i++) { var x = tracked[i]; x.fn(progressOf(x.el, x.s, x.e), x.el); }
  }

  if (!reduce) {
    /* Rails fill as their list scrolls past (timeline, tour, phases). */
    document.querySelectorAll('[data-rail]').forEach(function (el) {
      track(el, function (p) { el.style.setProperty('--rail-progress', p.toFixed(3)); });
    });
    /* Photographs drift inside their frames: ±6% travel, nothing on phones. */
    if (matchMedia('(min-width: 768px)').matches) {
      document.querySelectorAll('[data-parallax] img').forEach(function (img) {
        track(img.closest('[data-parallax]'), function (p) { img.style.setProperty('--drift', ((p - 0.5) * -12).toFixed(2) + '%'); }, 1, 0);
      });
    }
    /* Giant words settle leftwards as they pass. */
    document.querySelectorAll('[data-giant]').forEach(function (el) {
      track(el, function (p) { el.style.setProperty('--shift', ((1 - p) * 4).toFixed(2) + 'vw'); }, 1, 0.3);
    });
    /* The growth chart draws its bars once in view. */
    var chart = document.querySelector('[data-chart]');
    if (chart) track(chart, function (p) { chart.style.setProperty('--draw', String(Math.min(1, p * 1.6))); }, 0.95, 0.5);
    /* Pillars: pinned stage opens each pillar over a quarter of the runway. */
    var runway = document.getElementById('pillars-runway');
    if (runway) {
      var items = runway.querySelectorAll('.pillar'), frames = runway.querySelectorAll('.pillars_frame');
      var current = -1;
      function setPillar(i) {
        if (i === current) return; current = i;
        items.forEach(function (li, n) { li.classList.toggle('is-open', n === i); li.querySelector('.pillar_toggle').setAttribute('aria-expanded', n === i); });
        frames.forEach(function (f, n) { f.classList.toggle('is-active', n === i); });
      }
      function pinned() { return matchMedia('(min-width: 1024px) and (min-height: 640px)').matches; }
      track(runway, function (p) {
        if (!pinned()) return;
        var stage = runway.querySelector('.pillars_stage').offsetHeight;
        var travel = runway.offsetHeight - stage;
        var top = runway.getBoundingClientRect().top;
        var q = travel > 0 ? Math.max(0, Math.min(0.999, (-top + 1) / travel)) : 0;
        setPillar(Math.floor(q * items.length));
      });
      items.forEach(function (li, i) {
        li.querySelector('.pillar_toggle').addEventListener('click', function () {
          if (pinned()) {
            var stage = runway.querySelector('.pillars_stage').offsetHeight;
            var travel = runway.offsetHeight - stage;
            var y = runway.getBoundingClientRect().top + scrollY + (travel / items.length) * i + 2;
            scrollTo({ top: y, behavior: 'smooth' });
          } else {
            setPillar(li.classList.contains('is-open') ? -1 : i);
          }
        });
      });
    }
  } else {
    /* Reduced motion: pillars are a plain accordion, rails are full. */
    document.querySelectorAll('.pillar_toggle').forEach(function (btn) {
      btn.addEventListener('click', function () { toggle(btn.closest('.pillar'), btn, 'is-open'); });
    });
  }

  var raf = false;
  function schedule() { if (!raf) { raf = true; requestAnimationFrame(function () { raf = false; tick(); }); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  tick();

  /* Stage strips: arrows step one card; the rail under the strip shows progress. */
  document.querySelectorAll('[data-stages]').forEach(function (trackEl) {
    var section = trackEl.closest('section');
    var prev = section.querySelector('[data-stages-prev]'), next = section.querySelector('[data-stages-next]'), fill = section.querySelector('[data-stages-fill]');
    function step() { var f = trackEl.querySelector('.stage'); return f ? f.getBoundingClientRect().width + parseFloat(getComputedStyle(trackEl).columnGap || 0) : 300; }
    function sync() {
      var max = trackEl.scrollWidth - trackEl.clientWidth;
      prev.disabled = trackEl.scrollLeft < 4;
      next.disabled = trackEl.scrollLeft >= max - 4;
      if (fill) fill.style.transform = 'scaleX(' + Math.max(0.08, max > 0 ? trackEl.scrollLeft / max : 1) + ')';
    }
    var smooth = reduce ? 'auto' : 'smooth';
    prev.addEventListener('click', function () { trackEl.scrollBy({ left: -step(), behavior: smooth }); });
    next.addEventListener('click', function () { trackEl.scrollBy({ left: step(), behavior: smooth }); });
    trackEl.addEventListener('scroll', sync, { passive: true });
    trackEl.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); } if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); } });
    addEventListener('resize', sync);
    sync();
  });

  /* Chip rows that filter nothing yet (Voices) still toggle their pressed state. */
  document.querySelectorAll('.chip-row:not(#faq-chips)').forEach(function (row) {
    row.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      row.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('is-selected', x === b); x.setAttribute('aria-pressed', x === b); });
    });
  });
})();
