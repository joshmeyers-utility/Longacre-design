/*
 * FAQ search and category filter. In Webflow this is a small embed (or
 * Finsweet CMS Filter) over one FAQ collection with a Category reference.
 * Every question stays in the page; filtering only hides rows.
 */
(function () {
  var input = document.getElementById('faq-search'), chips = document.getElementById('faq-chips'), count = document.getElementById('faq-count'), none = document.getElementById('faq-none');
  var groups = Array.prototype.slice.call(document.querySelectorAll('.faq-group'));
  var cat = 'all';
  function apply() {
    var words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    groups.forEach(function (g) {
      var inCat = cat === 'all' || g.dataset.cat === cat;
      var visible = 0;
      g.querySelectorAll('.faq_row').forEach(function (row) {
        var draft = row.classList.contains('is-draft') && !document.body.classList.contains('has-notes');
        var text = (row.dataset.q + ' ' + row.querySelector('.faq_answer').textContent).toLowerCase();
        var hit = inCat && !draft && words.every(function (w) { return text.indexOf(w) !== -1; });
        row.hidden = !hit;
        if (hit) visible++;
      });
      g.hidden = visible === 0;
      shown += visible;
    });
    count.textContent = shown === 0 ? '' : shown + (shown === 1 ? ' question' : ' questions');
    none.hidden = shown !== 0;
  }
  input.addEventListener('input', apply);
  chips.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    cat = b.dataset.cat;
    chips.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('is-selected', x === b); x.setAttribute('aria-pressed', x === b); });
    apply();
  });
  /* A link to #category-safety selects that category. */
  var m = /^#category-(.+)$/.exec(location.hash);
  if (m) { var b = chips.querySelector('[data-cat="' + m[1] + '"]'); if (b) b.click(); }
  apply();
})();
