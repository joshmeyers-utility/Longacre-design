#!/usr/bin/env python3
"""Generate the Homer City Energy Campus design tokens.

Source of truth for design-system/tokens.json, tokens.css and
figma-variables.json. Colour ramps are generated in OKLCH so the steps are
perceptually even, and every ramp is anchored on a client palette colour that
it reproduces EXACTLY at one named step.

    python3 design-system/build-tokens.py          # write the three files
    python3 design-system/build-tokens.py --check   # contrast audit only

Nothing here is hand-edited. Change this file, re-run it, commit all four.
"""
import json, math, os, sys

# --------------------------------------------------------------------------
# sRGB <-> OKLCH, and WCAG contrast
# --------------------------------------------------------------------------
def _to_lin(c):  return c/12.92 if c <= 0.04045 else ((c+0.055)/1.055)**2.4
def _to_srgb(c): return 12.92*c if c <= 0.0031308 else 1.055*(c**(1/2.4))-0.055

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16)/255 for i in (0, 2, 4))

def rgb_to_hex(r, g, b):
    f = lambda c: max(0, min(255, round(c*255)))
    return '#%02X%02X%02X' % (f(r), f(g), f(b))

def srgb_to_oklab(r, g, b):
    r, g, b = _to_lin(r), _to_lin(g), _to_lin(b)
    l = 0.4122214708*r + 0.5363325363*g + 0.0514459929*b
    m = 0.2119034982*r + 0.6806995451*g + 0.1073969566*b
    s = 0.0883024619*r + 0.2817188376*g + 0.6299787005*b
    l_, m_, s_ = l**(1/3), m**(1/3), s**(1/3)
    return (0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_,
            1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_,
            0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_)

def oklab_to_srgb(L, a, b):
    l_, m_, s_ = (L + 0.3963377774*a + 0.2158037573*b,
                  L - 0.1055613458*a - 0.0638541728*b,
                  L - 0.0894841775*a - 1.2914855480*b)
    l, m, s = l_**3, m_**3, s_**3
    return tuple(_to_srgb(max(0.0, min(1.0, c))) for c in (
        +4.0767416621*l - 3.3077115913*m + 0.2309699292*s,
        -1.2684380046*l + 2.6097574011*m - 0.3413193965*s,
        -0.0041960863*l - 0.7034186147*m + 1.7076147010*s))

def hex_to_oklch(h):
    L, a, b = srgb_to_oklab(*hex_to_rgb(h))
    return L, math.hypot(a, b), math.degrees(math.atan2(b, a)) % 360

def oklch_to_hex(L, C, H):
    a, b = C*math.cos(math.radians(H)), C*math.sin(math.radians(H))
    for _ in range(80):                      # gamut-map by easing chroma down
        r, g, bb = oklab_to_srgb(L, a, b)
        L2, a2, b2 = srgb_to_oklab(r, g, bb)
        if abs(L2-L) < 0.004 and math.hypot(a2-a, b2-b) < 0.006:
            break
        a *= 0.96; b *= 0.96
    return rgb_to_hex(*oklab_to_srgb(L, a, b))

def rel_lum(h):
    r, g, b = (_to_lin(c) for c in hex_to_rgb(h))
    return 0.2126*r + 0.7152*g + 0.0722*b

def contrast(h1, h2):
    a, b = rel_lum(h1), rel_lum(h2)
    return (max(a, b) + 0.05) / (min(a, b) + 0.05)

def composite(fg, alpha, bg):
    """sRGB-space alpha blend — matches how a CSS rgba() scrim actually paints."""
    f, b = hex_to_rgb(fg), hex_to_rgb(bg)
    return rgb_to_hex(*[f[i]*alpha + b[i]*(1-alpha) for i in range(3)])

# --------------------------------------------------------------------------
# Colour primitives
# --------------------------------------------------------------------------
STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

LADDER = {50:0.980, 100:0.955, 200:0.908, 300:0.852, 400:0.782, 500:0.700,
          600:0.618, 700:0.532, 800:0.448, 900:0.360, 950:0.268}

def _env(L):
    return max(1e-6, 1.0 - abs(2*L - 1)**1.4)

def ramp(anchor_hex, anchor_step, ladder=None, cap=1.25):
    """Even L ladder + a chroma bell, normalised so `anchor_step` reproduces the
    client hex exactly. `cap` stops the bell inventing neon mid-steps when the
    anchor sits at an extreme lightness (aqua, cream)."""
    La, Ca, Ha = hex_to_oklch(anchor_hex)
    lad = dict(ladder or LADDER); lad[anchor_step] = La
    norm, cmax = _env(La), Ca*cap
    return {s: (anchor_hex.upper() if s == anchor_step
                else oklch_to_hex(lad[s], min(cmax, Ca*_env(lad[s])/norm), Ha))
            for s in STEPS}

# ink — the warm neutral workhorse: body text, hairlines, the dark ground.
# Chroma is flat and very low so it never competes with a photograph.
INK_L = {50:0.968, 100:0.942, 200:0.896, 300:0.840, 400:0.770, 500:0.690,
         600:0.605, 700:0.515, 800:0.425, 900:0.325, 950:0.215}
INK_C = {50:0.006, 100:0.006, 200:0.006, 300:0.006, 400:0.006, 500:0.006,
         600:0.006, 700:0.007, 800:0.008, 900:0.009, 950:0.010}

# paper — the grounds, and only the grounds. Anchored on the client cream.
PAPER = {'0':   '#FFFFFF',
         '50':  oklch_to_hex(0.9720, 0.0105,  98.0),
         '100': '#F3F1D0',
         '200': oklch_to_hex(0.9280, 0.0300, 103.0),
         '300': oklch_to_hex(0.8880, 0.0260, 101.0)}

NAVY_LADDER = dict(LADDER); NAVY_LADDER.update({800:0.400, 900:0.3113, 950:0.232})

RAMPS = {
    'ink':   {s: oklch_to_hex(INK_L[s], INK_C[s], 92.0) for s in STEPS},
    'navy':  ramp('#143251', 900, NAVY_LADDER),   # client navy
    'blue':  ramp('#238FC8', 600),                # client identity blue
    'aqua':  ramp('#AFECF1', 200),                # client aqua
    'gold':  ramp('#D8B471', 400, cap=1.20),      # client gold
    'green': ramp('#2E7D4F', 700),
    'red':   ramp('#B23B2E', 700),
}
ANCHORS = {'navy':(900,'#143251'), 'blue':(600,'#238FC8'), 'aqua':(200,'#AFECF1'),
           'gold':(400,'#D8B471'), 'paper':('100','#F3F1D0')}

PRIM = {'base.white':'#FFFFFF', 'base.black':'#000000'}
PRIM.update({f'paper.{k}': v for k, v in PAPER.items()})
for _n, _r in RAMPS.items():
    PRIM.update({f'{_n}.{_s}': _v for _s, _v in _r.items()})

# --------------------------------------------------------------------------
# Semantic colour
# --------------------------------------------------------------------------
SEMANTIC = {
 'surface': {
   'page':     'paper.50',   # warm off-white — the default ground
   'raised':   'paper.0',    # pure white: inset media and form fields only
   'warm':     'paper.100',  # client cream — the alternating band
   'sunken':   'paper.200',
   'ink':      'ink.950',    # the dark institutional ground
   'navy':     'navy.900',   # client navy — footer only
   'media':    'ink.200',    # image placeholder ground
 },
 'text': {
   'primary':            'ink.950',
   'secondary':          'ink.800',
   'tertiary':           'ink.700',   # the floor for neutral text
   'on-ink':             'paper.50',
   'on-ink-secondary':   'ink.300',
   'on-warm':            'ink.950',
   'on-warm-secondary':  'ink.800',
 },
 'border': {
   # A hairline BETWEEN content. Decorative, conveys no state, no minimum.
   'divider':        'ink.300',
   'divider-strong': 'ink.500',
   'divider-on-ink': 'ink.800',
   # The BOUNDARY OF A CONTROL. Identifies a component, so WCAG 2.2 SC 1.4.11
   # applies: it must clear 3:1 against every ground it can sit on.
   'control':        'ink.600',
   'control-on-ink': 'ink.500',
 },
 'action': {
   'primary-bg':       'ink.950',
   'primary-bg-hover': 'ink.900',
   'primary-text':     'paper.50',
   'secondary-border': 'ink.600',
   'secondary-text':   'ink.950',
   'inverse-bg':       'paper.50',
   'inverse-text':     'ink.950',
   'disabled-bg':      'ink.200',
   'disabled-text':    'ink.700',
 },
 'focus':  {'ring': 'blue.700', 'ring-on-ink': 'blue.400'},
 'pillar': {'safety':'green.800', 'infrastructure':'navy.900',
            'community':'blue.800', 'energy-future':'gold.800'},
 'feedback': {
   # No banner outlines. A filled band plus a 2px rule in the accent colour,
   # which also carries the icon; the accent must read against the band AND
   # the page, so it sits at the /800 step.
   'info-surface':'blue.100',  'info-text':'blue.900',  'info-accent':'blue.800',
   'construction-surface':'gold.100','construction-text':'gold.900','construction-accent':'gold.800',
   'urgent-surface':'red.100', 'urgent-text':'red.900', 'urgent-accent':'red.800',
   'success-surface':'green.100','success-text':'green.900','success-accent':'green.800',
 },
 'scrim': {'hero': 'ink.950', 'media': 'ink.950'},
}
def sem(group, key): return PRIM[SEMANTIC[group][key]]

# --------------------------------------------------------------------------
# Type — Arial
# --------------------------------------------------------------------------
# Arial ships Regular and Bold, and nothing else. There is no Arial Light and no
# Arial Medium, so the system is a genuine two-weight system: display and body
# in Regular, structure and labels in Bold. The role names below are kept so
# nothing downstream has to be renamed, but `light` and `regular` both resolve
# to Regular and `medium` and `bold` both resolve to Bold.
# Arial first: on the web it is genuinely everywhere. Arimo and Liberation Sans
# are metrically compatible with it — same advance widths, same line breaks — so
# a fallback never reflows the layout. Figma has no Arial (it is a licensed
# Monotype system font and this file has no local fonts), so the artboards are
# built in Arimo and the family is bound to a variable for a one-line swap.
FONT_STACK = ['Arial', 'Arimo', 'Liberation Sans', 'Helvetica', 'sans-serif']
FIGMA_FAMILY = 'Arimo'

# Two weights, named for what they are. A token called `light` that renders
# Regular is the same kind of small lie as a blue label that is not a link.
WEIGHTS  = {'regular': 400, 'bold': 700}
FONT_CUT = {'regular': 'Regular', 'bold': 'Bold'}

# px. Desktop / Mobile are the two modes of the Typography collection.
SIZE = {
  '50':  (12, 12), '75':  (13, 13), '100': (14, 14), '200': (16, 16),
  '300': (18, 17), '400': (21, 19), '500': (26, 22), '600': (32, 25),
  '700': (40, 28), '800': (56, 32), '900': (72, 36), '1000':(96, 40),
  '1100':(128, 46),
}
LINE_HEIGHT = {'none':1.00, 'statement':0.92, 'hero':0.96, 'display':1.00,
               'tight':1.06, 'snug':1.10, 'heading':1.22, 'normal':1.32,
               'body':1.55, 'relaxed':1.60, 'loose':1.70}
# Arial is metrically compatible with Helvetica and sets loose by contemporary
# standards, so display sizes still need negative tracking. But Regular is
# heavier than the Light this system was first drawn for, and heavy letterforms
# collide sooner — so every display value is eased back about half a step.
TRACKING = {'statement':-0.035, 'display':-0.030, 'hero':-0.028, 'tighter':-0.024,
            'tight':-0.018, 'snug':-0.012, 'slight':-0.006, 'normal':0.0,
            'label':0.010, 'wide':0.020, 'eyebrow':0.060}

TYPE = {
  # role              size    weight     line-height   tracking
  'statement':      ('1100','regular',    'statement',  'statement'),
  'hero':           ('1000','regular',    'hero',       'hero'),
  'display':        ('900', 'regular',    'display',    'display'),
  'h1':             ('800', 'regular',    'tight',      'tighter'),
  'h2':             ('700', 'regular',  'snug',       'tight'),
  'h3':             ('500', 'bold',     'heading',    'snug'),
  'h4':             ('400', 'bold',     'normal',     'slight'),
  'lead':           ('500', 'regular',  'heading',    'snug'),
  'body-lg':        ('300', 'regular',  'body',       'normal'),
  'body':           ('200', 'regular',  'body',       'normal'),
  'body-sm':        ('100', 'regular',  'normal',     'normal'),
  'caption':        ('75',  'regular',  'normal',     'normal'),
  'footnote':       ('50',  'regular',  'normal',     'normal'),
  'eyebrow':        ('75',  'bold',     'heading',    'eyebrow'),
  'label':          ('100', 'bold',     'normal',     'label'),
  'nav':            ('100', 'regular',  'heading',    'normal'),
  'button':         ('100', 'bold',     'none',       'label'),
  'quote':          ('600', 'regular',    'heading',    'tight'),
  'stat-figure':    ('1000','regular',    'statement',  'statement'),
  'stat-figure-sm': ('800', 'regular',    'hero',       'display'),
  'stat-label':     ('200', 'regular',  'normal',     'normal'),
  'wordmark':       ('400', 'bold',     'snug',       'slight'),
}

# --------------------------------------------------------------------------
# Space, grid, radius, motion
# --------------------------------------------------------------------------
SPACE = [0,2,4,6,8,10,12,16,20,24,32,40,48,56,64,72,80,96,120,144,160,200,240]

SPACE_ROLE = {
  'section-y':            (160, 72),   # (desktop, mobile)
  'section-y-lg':         (200, 96),
  'section-y-sm':         (96,  48),
  'section-continues':    (0,   0),    # band abuts the next: no bottom padding
  'margin':               (72,  20),   # -> contained band (1296 at 1440)
  'margin-wide':          (40,  20),   # -> wide band      (1360 at 1440)
  'margin-bleed':         (0,   0),    # -> full bleed     (1440)
  'gutter':               (24,  16),
  'stack-2xs':            (4,   4),
  'stack-xs':             (8,   8),
  'stack-sm':             (12,  12),
  'stack-md':             (20,  16),
  'stack-lg':             (32,  24),
  'stack-xl':             (48,  32),
  'stack-2xl':            (64,  48),
  'stack-3xl':            (96,  64),
  'inline-xs':            (6,   6),
  'inline-sm':            (10,  10),
  'inline-md':            (16,  16),
  'inline-lg':            (24,  20),
  'control-y':            (14,  14),
  'control-x':            (24,  24),
  'field-y':              (14,  14),
  'field-x':              (16,  16),
}

# 12 x 86 + 11 x 24 = 1296 exactly. Integer columns, so the Figma grid and the
# Webflow grid agree instead of drifting by a fraction of a pixel per column.
# Every container is a whole number of columns, so nothing ever lands between
# two grid lines. Mobile columns are fluid; the mobile value is what the 375
# comp resolves to.
GRID = {'columns':(12, 4), 'column-width':(86, 71.75),
        'content-max':(1296, 335),    # 12 cols / 4 cols
        'content-wide':(1360, 335),   # wide band, off-grid by design
        'narrow':(966, 335),          #  9 cols
        'measure':(636, 335),         #  6 cols - ~70 characters at 18px
        'measure-narrow':(526, 335)}  #  5 cols

# Round means press. Square means read. That is the whole rule.
RADIUS = {'control':9999, 'tag':9999, 'input':2, 'media':12,
          'media-bleed':0, 'surface':0, 'none':0}

MOTION = {
  'duration': {'instant':0, 'fast':120, 'base':200, 'slow':320,
               'slower':480, 'reveal':720, 'slowest':900},
  'easing':   {'appear':'cubic-bezier(0.16, 1, 0.30, 1)',
               'interact':'cubic-bezier(0.30, 0, 0.20, 1)',
               'transition':'cubic-bezier(0.40, 0, 0.20, 1)',
               'editorial':'cubic-bezier(0.22, 1, 0.36, 1)',
               'exit':'cubic-bezier(0.40, 0, 1, 1)'},
  'distance': {'sm':8, 'md':16, 'lg':24, 'xl':40},
  'reveal':   {'clip-from':'12%', 'scale-from':1.06, 'underline-from':'0%'},
  'stagger':  {'tight':40, 'base':60, 'loose':90},
}

# Scrims are the ONLY guarantee that text over a photograph is readable — an
# automated sweep walks to the nearest solid ancestor and a photo is not one.
# Values are set so the weakest point over the text column still clears AA
# against a pure white frame. Verified in audit(). Do not lighten.
OPACITY = {'scrim-hero-start':0.88, 'scrim-hero-end':0.72, 'scrim-hero-mobile':0.88,
           'scrim-media-hover':0.24, 'disabled':0.38, 'hairline-on-ink':0.24}

BREAKPOINT = {'mobile':478, 'landscape':767, 'tablet':991,
              'desktop':1280, 'wide':1440, 'ultra':1920}   # Webflow's own values
ICON = {'sm':16, 'md':20, 'lg':24, 'xl':32}
Z = {'base':0, 'raised':10, 'sticky':100, 'header':200, 'overlay':300,
     'modal':400, 'toast':500}

# --------------------------------------------------------------------------
# Contrast audit
# --------------------------------------------------------------------------
def audit(verbose=True):
    rows, fails = [], []
    def chk(label, fg, bg, need):
        c = contrast(fg, bg); ok = c >= need
        rows.append((ok, label, fg, bg, c, need))
        if not ok: fails.append(label)

    grounds = ['page', 'warm', 'sunken', 'raised']
    for t in ('primary', 'secondary', 'tertiary'):
        for g in grounds:
            chk(f'text/{t} on surface/{g}', sem('text',t), sem('surface',g), 4.5)
    for t in ('on-ink', 'on-ink-secondary'):
        for g in ('ink', 'navy'):
            chk(f'text/{t} on surface/{g}', sem('text',t), sem('surface',g), 4.5)
    for p in SEMANTIC['pillar']:
        for g in ('page', 'warm'):
            chk(f'pillar/{p} on surface/{g}', sem('pillar',p), sem('surface',g), 4.5)

    chk('action/primary-text on primary-bg', sem('action','primary-text'), sem('action','primary-bg'), 4.5)
    chk('action/primary-text on primary-bg-hover', sem('action','primary-text'), sem('action','primary-bg-hover'), 4.5)
    chk('action/secondary-text on surface/page', sem('action','secondary-text'), sem('surface','page'), 4.5)
    chk('action/inverse-text on inverse-bg', sem('action','inverse-text'), sem('action','inverse-bg'), 4.5)
    chk('action/disabled-text on disabled-bg', sem('action','disabled-text'), sem('action','disabled-bg'), 3.0)

    for g in grounds:
        chk(f'focus/ring vs surface/{g}', sem('focus','ring'), sem('surface',g), 3.0)
        chk(f'border/control vs surface/{g}', sem('border','control'), sem('surface',g), 3.0)
    for g in ('ink', 'navy'):
        chk(f'focus/ring-on-ink vs surface/{g}', sem('focus','ring-on-ink'), sem('surface',g), 3.0)
        chk(f'border/control-on-ink vs surface/{g}', sem('border','control-on-ink'), sem('surface',g), 3.0)

    for k in ('info', 'construction', 'urgent', 'success'):
        chk(f'{k} text on {k} surface', sem('feedback',f'{k}-text'), sem('feedback',f'{k}-surface'), 4.5)
        chk(f'{k} accent on {k} surface', sem('feedback',f'{k}-accent'), sem('feedback',f'{k}-surface'), 3.0)
        chk(f'{k} accent vs surface/page', sem('feedback',f'{k}-accent'), sem('surface','page'), 3.0)

    # Scrims, against the worst case a photograph can present: pure white.
    scrim_rows = []
    for label, a in (('hero start (desktop)', OPACITY['scrim-hero-start']),
                     ('hero end, weakest point (desktop)', OPACITY['scrim-hero-end']),
                     ('hero flat (mobile)', OPACITY['scrim-hero-mobile'])):
        comp = composite(sem('scrim','hero'), a, '#FFFFFF')
        c = contrast(sem('text','on-ink'), comp)
        scrim_rows.append((c >= 4.5, f'scrim {label} @{a}', comp, c))
        if c < 4.5: fails.append(f'scrim {label}')
    neg = composite(sem('scrim','hero'), 0.60, '#FFFFFF')
    neg_c = contrast(sem('text','on-ink'), neg)
    scrim_rows.append((neg_c < 4.5, 'NEGATIVE CONTROL @0.60 (must be rejected)', neg, neg_c))
    if neg_c >= 4.5: fails.append('negative control did not fail')

    if verbose:
        print(f"Anchors reproduced exactly at their named step:")
        for n, (s, h) in ANCHORS.items():
            got = PAPER[s] if n == 'paper' else RAMPS[n][s]
            print(f"  {'OK ' if got.upper()==h.upper() else 'FAIL'} {n}/{s} = {got}  (client {h})")
            if got.upper() != h.upper(): fails.append(f'{n}/{s} anchor drift')
        print(f"\n{len(rows)} contrast checks:")
        for ok, label, fg, bg, c, need in rows:
            print(f"  {'OK ' if ok else 'FAIL'} {label:48} {fg} on {bg}  {c:5.2f}:1  (min {need})")
        print("\nScrim over a pure white photograph:")
        for ok, label, comp, c in scrim_rows:
            print(f"  {'OK ' if ok else 'FAIL'} {label:48} -> {comp}  {c:5.2f}:1")
        print("\n" + ("ALL CHECKS PASS" if not fails
                      else f"{len(fails)} FAILURES: " + ', '.join(fails)))
    return fails

# --------------------------------------------------------------------------
# Emit: W3C DTCG tokens.json
# --------------------------------------------------------------------------
def c(v):    return {'$type':'color',      '$value':v}
def d(v):    return {'$type':'dimension',  '$value':v}
def n(v):    return {'$type':'number',     '$value':v}
def s_(v):   return {'$type':'string',     '$value':v}
def dur(v):  return {'$type':'duration',   '$value':f'{v}ms'}
def cb(v):   return {'$type':'cubicBezier','$value':v}

def build_tokens():
    t = {
      '$schema': 'https://tr.designtokens.org/format/',
      '$description': (
        'Homer City Energy Campus design tokens. Generated by build-tokens.py '
        '- do not hand-edit. Ramps are OKLCH-even and each is anchored on a '
        'client palette colour it reproduces exactly at one named step. '
        'Components bind semantic tokens only, never primitives.'),
      'color': {'base': {'white': c('#FFFFFF'), 'black': c('#000000')},
                'paper': {k: c(v) for k, v in PAPER.items()}},
      'semantic': {}, 'font': {}, 'typography': {}, 'space': {},
      'grid': {}, 'radius': {}, 'motion': {}, 'opacity': {},
      'breakpoint': {}, 'icon': {}, 'z': {},
    }
    for name, r in RAMPS.items():
        t['color'][name] = {str(s): c(v) for s, v in r.items()}

    for group, entries in SEMANTIC.items():
        t['semantic'][group] = {k: c('{color.%s}' % ref) for k, ref in entries.items()}

    t['font'] = {
      'family': {'sans': {'$type':'fontFamily','$value':FONT_STACK},
                 'icon': {'$type':'fontFamily','$value':['Material Symbols Rounded']}},
      'weight': {k: {'$type':'fontWeight','$value':v} for k, v in WEIGHTS.items()},
      'cut':    {k: s_(v) for k, v in FONT_CUT.items()},
      'size':        {k: d(f'{v[0]}px') for k, v in SIZE.items()},
      'size-mobile': {k: d(f'{v[1]}px') for k, v in SIZE.items()},
      'lineHeight':  {k: n(v) for k, v in LINE_HEIGHT.items()},
      'tracking':    {k: d(f'{v}em') for k, v in TRACKING.items()},
      # Arial's lining figures are already tabular — every digit is the same
      # advance width — so a ledger column aligns without the feature. Kept for
      # any substitute face that needs it.
      'numeric':     {'tabular': s_('tnum'), 'proportional': s_('pnum')},
    }
    for role, (size, weight, lh, tr) in TYPE.items():
        t['typography'][role] = {'$type':'typography','$value':{
            'fontFamily':    '{font.family.sans}',
            'fontSize':      '{font.size.%s}' % size,
            'fontWeight':    '{font.weight.%s}' % weight,
            'lineHeight':    '{font.lineHeight.%s}' % lh,
            'letterSpacing': '{font.tracking.%s}' % tr},
          '$extensions': {'com.homercity.mobileFontSize': '{font.size-mobile.%s}' % size,
                          'com.homercity.helveticaNeueCut': FONT_CUT[weight]}}

    t['space'] = {str(v): d(f'{v}px') for v in SPACE}
    t['semantic']['space']        = {k: d(f'{v[0]}px') for k, v in SPACE_ROLE.items()}
    t['semantic']['space-mobile'] = {k: d(f'{v[1]}px') for k, v in SPACE_ROLE.items()}
    t['grid']        = {k: (n(v[0]) if k == 'columns' else d(f'{v[0]}px')) for k, v in GRID.items()}
    t['grid-mobile'] = {k: (n(v[1]) if k == 'columns' else d(f'{v[1]}px')) for k, v in GRID.items()}
    t['radius']      = {k: d('9999px' if v == 9999 else f'{v}px') for k, v in RADIUS.items()}
    t['motion'] = {
      'duration': {k: dur(v)  for k, v in MOTION['duration'].items()},
      'easing':   {k: cb(v)   for k, v in MOTION['easing'].items()},
      'distance': {k: d(f'{v}px') for k, v in MOTION['distance'].items()},
      'reveal':   {k: (s_(v) if isinstance(v, str) else n(v)) for k, v in MOTION['reveal'].items()},
      'stagger':  {k: dur(v)  for k, v in MOTION['stagger'].items()},
    }
    t['opacity']    = {k: n(v) for k, v in OPACITY.items()}
    t['breakpoint'] = {k: d(f'{v}px') for k, v in BREAKPOINT.items()}
    t['icon']       = {'size': {k: d(f'{v}px') for k, v in ICON.items()},
                       'opticalSize': {k: n(v) for k, v in ICON.items()}}
    t['z']          = {k: n(v) for k, v in Z.items()}
    return t

# --------------------------------------------------------------------------
# Emit: Figma variables payload
# --------------------------------------------------------------------------
TEXTISH   = ['TEXT_FILL']
SHAPEISH  = ['FRAME_FILL', 'SHAPE_FILL']
STROKEISH = ['STROKE_COLOR']

def _scopes(group, key):
    if group == 'surface':  return SHAPEISH
    if group == 'text':     return TEXTISH
    if group == 'border':   return STROKEISH
    if group == 'focus':    return STROKEISH + ['EFFECT_COLOR']
    if group == 'scrim':    return SHAPEISH
    if group == 'pillar':   return TEXTISH + SHAPEISH + STROKEISH
    if group == 'action':
        return TEXTISH if key.endswith('text') else SHAPEISH if key.endswith(('bg','bg-hover')) else STROKEISH
    if group == 'feedback':
        return (TEXTISH if key.endswith('text')
                else SHAPEISH if key.endswith('surface')
                else TEXTISH + SHAPEISH + STROKEISH)
    return ['ALL_SCOPES']

def build_figma():
    prim = []
    for name, val in [('base/white','#FFFFFF'), ('base/black','#000000')]:
        prim.append({'name':f'color/{name}','type':'COLOR','scopes':[],'values':{'Value':val}})
    for k, v in PAPER.items():
        prim.append({'name':f'color/paper/{k}','type':'COLOR','scopes':[],'values':{'Value':v}})
    for rname, r in RAMPS.items():
        for s, v in r.items():
            prim.append({'name':f'color/{rname}/{s}','type':'COLOR','scopes':[],'values':{'Value':v}})
    for v in SPACE:
        prim.append({'name':f'space/{v}','type':'FLOAT','scopes':[],'values':{'Value':v}})

    semv = []
    for group, entries in SEMANTIC.items():
        for key, ref in entries.items():
            # Colour does not vary by breakpoint, but a variable living in a
            # Desktop/Mobile collection still needs a value under every mode key
            # or an importer drops it.
            semv.append({'name':f'{group}/{key}', 'type':'COLOR',
                         'scopes':_scopes(group, key),
                         'aliasOf':'color/' + ref.replace('.', '/'),
                         'resolved':PRIM[ref],
                         'values':{'Desktop':PRIM[ref], 'Mobile':PRIM[ref]}})
    for k, (dk, mk) in SPACE_ROLE.items():
        semv.append({'name':f'space/{k}','type':'FLOAT','scopes':['GAP','WIDTH_HEIGHT'],
                     'values':{'Desktop':dk,'Mobile':mk}})
    for k, (dk, mk) in GRID.items():
        semv.append({'name':f'grid/{k}','type':'FLOAT',
                     'scopes':['WIDTH_HEIGHT'] if k != 'columns' else ['ALL_SCOPES'],
                     'values':{'Desktop':dk,'Mobile':mk}})
    for k, v in RADIUS.items():
        semv.append({'name':f'radius/{k}','type':'FLOAT','scopes':['CORNER_RADIUS'],
                     'values':{'Desktop':v,'Mobile':v}})
    for k, v in ICON.items():
        semv.append({'name':f'icon/{k}','type':'FLOAT','scopes':['WIDTH_HEIGHT'],
                     'values':{'Desktop':v,'Mobile':v}})
    for k, v in OPACITY.items():
        semv.append({'name':f'opacity/{k}','type':'FLOAT','scopes':['OPACITY'],
                     'values':{'Desktop':v,'Mobile':v}})

    typ = [{'name':'font-family/sans','type':'STRING','scopes':['FONT_FAMILY'],
            'values':{'Desktop':FIGMA_FAMILY,'Mobile':FIGMA_FAMILY}}]
    for k, (dk, mk) in SIZE.items():
        typ.append({'name':f'font-size/{k}','type':'FLOAT','scopes':['FONT_SIZE'],
                    'values':{'Desktop':dk,'Mobile':mk}})
    for k, v in LINE_HEIGHT.items():
        typ.append({'name':f'line-height/{k}','type':'FLOAT','scopes':['LINE_HEIGHT'],
                    'unit':'PERCENT','values':{'Desktop':round(v*100,1),'Mobile':round(v*100,1)}})
    for k, v in TRACKING.items():
        typ.append({'name':f'tracking/{k}','type':'FLOAT','scopes':['LETTER_SPACING'],
                    'unit':'PERCENT','values':{'Desktop':round(v*100,2),'Mobile':round(v*100,2)}})
    for k, v in WEIGHTS.items():
        typ.append({'name':f'font-weight/{k}','type':'STRING','scopes':['FONT_STYLE'],
                    'values':{'Desktop':FONT_CUT[k],'Mobile':FONT_CUT[k]}})

    mot = []
    for k, v in MOTION['duration'].items():
        mot.append({'name':f'duration/{k}','type':'FLOAT','scopes':['ALL_SCOPES'],'values':{'Value':v}})
    for k, v in MOTION['easing'].items():
        mot.append({'name':f'ease/{k}','type':'STRING','scopes':['ALL_SCOPES'],'values':{'Value':v}})
    for k, v in MOTION['distance'].items():
        mot.append({'name':f'distance/{k}','type':'FLOAT','scopes':['ALL_SCOPES'],'values':{'Value':v}})
    for k, v in MOTION['stagger'].items():
        mot.append({'name':f'stagger/{k}','type':'FLOAT','scopes':['ALL_SCOPES'],'values':{'Value':v}})

    return {
      '$description': ('Figma variable payload for the Homer City Energy Campus '
                       'design system. Import Primitives first, then Semantic and '
                       'Typography (they alias it). Every colour primitive ships '
                       'with scopes:[] so it cannot be picked directly - components '
                       'bind semantic tokens only.'),
      'font': {'family':'Arial', 'figmaFamily':FIGMA_FAMILY,
               'cuts':FONT_CUT, 'fallbackStack':FONT_STACK,
               'note':('Arial ships Regular and Bold only, so this is a genuine '
                       'two-weight system: display and body Regular, structure '
                       'and labels Bold. Figma has no Arial, so artboards use '
                       'Arimo - metrically identical, so nothing reflows.')},
      'collections': [
        {'name':'Primitives','modes':['Value'],'defaultMode':'Value',
         'hiddenFromPublishing':True,'variables':prim},
        {'name':'Semantic','modes':['Desktop','Mobile'],'defaultMode':'Desktop',
         'variables':semv},
        {'name':'Typography','modes':['Desktop','Mobile'],'defaultMode':'Desktop',
         'variables':typ},
        {'name':'Motion','modes':['Value'],'defaultMode':'Value','variables':mot},
      ],
      'textStyles': [
        {'name':f'type/{role}',
         'fontFamily':FIGMA_FAMILY, 'fontStyle':FONT_CUT[w],
         'fontSizeVariable':f'font-size/{size}',
         'lineHeightVariable':f'line-height/{lh}',
         'letterSpacingVariable':f'tracking/{tr}',
         'fontSize':{'Desktop':SIZE[size][0],'Mobile':SIZE[size][1]},
         'lineHeightPercent':round(LINE_HEIGHT[lh]*100,1),
         'letterSpacingPercent':round(TRACKING[tr]*100,2),
         'case':'ORIGINAL'}
        for role, (size, w, lh, tr) in TYPE.items()
      ],
    }

# --------------------------------------------------------------------------
# Emit: CSS custom properties
# --------------------------------------------------------------------------
def build_css():
    L = ['/* Homer City Energy Campus - design tokens.',
         '   Generated by design-system/build-tokens.py. Do not hand-edit. */','',':root {',
         '  /* --- colour primitives --------------------------------------- */',
         '  --color-base-white: #FFFFFF;', '  --color-base-black: #000000;']
    for k, v in PAPER.items(): L.append(f'  --color-paper-{k}: {v};')
    for rname, r in RAMPS.items():
        L.append('')
        for s, v in r.items(): L.append(f'  --color-{rname}-{s}: {v};')
    for group, entries in SEMANTIC.items():
        L += ['', f'  /* --- {group} -------------------------------------------- */']
        for key, ref in entries.items():
            L.append(f'  --{group}-{key}: var(--color-{ref.replace(".","-")});')

    L += ['', '  /* --- type ------------------------------------------------ */',
          "  --font-sans: " + ', '.join(f'"{f}"' if ' ' in f else f for f in FONT_STACK) + ';',
          '  --font-icon: "Material Symbols Rounded";']
    for k, v in WEIGHTS.items():    L.append(f'  --font-weight-{k}: {v};')
    for k, v in SIZE.items():       L.append(f'  --font-size-{k}: {v[0]}px;')
    for k, v in LINE_HEIGHT.items():L.append(f'  --line-height-{k}: {v};')
    for k, v in TRACKING.items():   L.append(f'  --tracking-{k}: {v}em;')

    L += ['', '  /* --- space, grid, radius ---------------------------------- */']
    for v in SPACE:                 L.append(f'  --space-{v}: {v}px;')
    for k, v in SPACE_ROLE.items(): L.append(f'  --space-{k}: {v[0]}px;')
    for k, v in GRID.items():
        L.append(f'  --grid-{k}: {v[0]}' + ('' if k == 'columns' else 'px') + ';')
    for k, v in RADIUS.items():
        L.append(f'  --radius-{k}: ' + ('9999px' if v == 9999 else f'{v}px') + ';')
    for k, v in ICON.items():       L.append(f'  --icon-{k}: {v}px;')
    for k, v in OPACITY.items():    L.append(f'  --opacity-{k}: {v};')
    for k, v in Z.items():          L.append(f'  --z-{k}: {v};')

    L += ['', '  /* --- motion ----------------------------------------------- */']
    for k, v in MOTION['duration'].items(): L.append(f'  --duration-{k}: {v}ms;')
    for k, v in MOTION['easing'].items():   L.append(f'  --ease-{k}: {v};')
    for k, v in MOTION['distance'].items(): L.append(f'  --distance-{k}: {v}px;')
    for k, v in MOTION['stagger'].items():  L.append(f'  --stagger-{k}: {v}ms;')
    for k, v in MOTION['reveal'].items():   L.append(f'  --reveal-{k}: {v};')
    L.append('}')

    L += ['', '/* Mobile mode. Only size and rhythm change: line height and tracking',
          '   are relative units, so they scale on their own. */',
          f"@media (max-width: {BREAKPOINT['landscape']}px) {{", '  :root {']
    for k, v in SIZE.items():       L.append(f'    --font-size-{k}: {v[1]}px;')
    for k, v in SPACE_ROLE.items(): L.append(f'    --space-{k}: {v[1]}px;')
    for k, v in GRID.items():
        L.append(f'    --grid-{k}: {v[1]}' + ('' if k == 'columns' else 'px') + ';')
    L += ['  }', '}']

    L += ['', '/* Reduced motion is not optional. */',
          '@media (prefers-reduced-motion: reduce) {', '  :root {']
    for k in MOTION['duration']:  L.append(f'    --duration-{k}: 1ms;')
    for k in MOTION['distance']:  L.append(f'    --distance-{k}: 0px;')
    for k in MOTION['stagger']:   L.append(f'    --stagger-{k}: 0ms;')
    L += ['    --reveal-scale-from: 1;', '    --reveal-clip-from: 0%;', '  }',
          '  *, *::before, *::after {',
          '    animation-duration: 1ms !important;',
          '    animation-iteration-count: 1 !important;',
          '    transition-duration: 1ms !important;',
          '    scroll-behavior: auto !important;', '  }', '}', '']
    return '\n'.join(L)


# --------------------------------------------------------------------------
# Emit: specimen.html - a proof sheet, generated from the same data so it
# cannot drift from the tokens. Not a comp; it shows values, not layouts.
# --------------------------------------------------------------------------
def build_specimen():
    def swatch(name, hexv, sub=''):
        fg = '#FFFFFF' if rel_lum(hexv) < 0.35 else '#1B1914'
        return (f'<div class="sw" style="background:{hexv};color:{fg}">'
                f'<b>{name}</b><span>{hexv}</span>'
                f'{f"<em>{sub}</em>" if sub else ""}</div>')

    def chip(step, hexv, is_anchor):
        # Pick the label colour per chip rather than leaning on mix-blend-mode,
        # which washes out across the middle of every ramp.
        fg = '#FFFFFF' if rel_lum(hexv) < 0.35 else '#1B1914'
        tag = (f'<em style="color:{fg}">client</em>' if is_anchor else '')
        return (f'<div class="ch" style="background:{hexv}">'
                f'{tag}<span style="color:{fg}">{step}</span></div>')

    ramps = '<div class="row"><div class="rl">paper</div>' + ''.join(
        chip(k, v, k == ANCHORS['paper'][0]) for k, v in PAPER.items()) + '</div>'
    for rname, r in RAMPS.items():
        ramps += f'<div class="row"><div class="rl">{rname}</div>' + ''.join(
            chip(st, v, ANCHORS.get(rname, (None,))[0] == st)
            for st, v in r.items()) + '</div>'

    grounds = ''.join(swatch(f'surface/{k}', sem('surface', k))
                      for k in ('page', 'warm', 'raised', 'sunken', 'ink', 'navy'))
    pillars = ''.join(swatch(k, sem('pillar', k)) for k in SEMANTIC['pillar'])
    feedback = ''.join(
        f'<div class="fb" style="background:{sem("feedback",k+"-surface")};'
        f'border-left:2px solid {sem("feedback",k+"-accent")};'
        f'color:{sem("feedback",k+"-text")}">{k}</div>'
        for k in ('info', 'construction', 'urgent', 'success'))

    SPECIMEN_TEXT = {
      'statement':'Built here, by people from here.',
      'hero':'Built here, by people from here.',
      'display':'A $10 billion investment in Indiana County',
      'h1':'A $10 billion investment in Indiana County',
      'h2':'What is being built at the campus',
      'h3':'Trades on site today',
      'h4':'Boilermakers and pipefitters',
      'lead':'The campus sits on 3,200+ acres, 50 miles east of Pittsburgh.',
      'body-lg':'Seven high-efficiency natural gas turbines sit in the Power Block.',
      'body':'Roughly 3 million cubic meters of earth moved - about the volume of the Great Pyramid.',
      'body-sm':'Direct-hire tradespeople and skilled contractors active on site.',
      'caption':'Power Block aerial looking north, April 2026',
      'footnote':'Source: 2024 economic impact analysis.',
      'eyebrow':'As of September 2026',
      'label':'Project pillars',
      'nav':'Workforce',
      'button':'Explore the campus',
      'quote':'My whole crew is from within forty minutes of here.',
      'stat-figure':'1,800+', 'stat-figure-sm':'10,000+',
      'stat-label':'Direct on-site construction-related jobs',
      'wordmark':'Homer City Energy Campus',
    }
    ramp = ''
    for role, (size, w, lh, tr) in TYPE.items():
        ramp += (f'<div class="tr"><div class="tm">type/{role}<br>'
                 f'<i>{SIZE[size][0]} / {SIZE[size][1]}px &middot; {FONT_CUT[w]} &middot; '
                 f'{TRACKING[tr]*100:+.1f}%</i></div>'
                 f'<div class="ts" style="font-size:{SIZE[size][0]}px;'
                 f'font-weight:{WEIGHTS[w]};line-height:{LINE_HEIGHT[lh]};'
                 f'letter-spacing:{TRACKING[tr]}em">'
                 f'{SPECIMEN_TEXT.get(role, role)}</div></div>')

    scrims = ''.join(
        f'<div class="sc"><div class="scp" style="background:'
        f'linear-gradient(90deg, rgba(27,25,20,{a}) 0%, rgba(27,25,20,{a}) 100%)">'
        f'<span>Text over a white photograph</span></div>'
        f'<i>{lbl} &middot; alpha {a} &middot; '
        f'{contrast(sem("text","on-ink"), composite(sem("scrim","hero"), a, "#FFFFFF")):.2f}:1</i></div>'
        for lbl, a in (('hero start', OPACITY['scrim-hero-start']),
                       ('hero end (weakest)', OPACITY['scrim-hero-end'])))

    stack = ', '.join(f'"{f}"' if ' ' in f else f for f in FONT_STACK)
    return f"""<!doctype html>
<meta charset="utf-8"><title>Homer City Energy Campus - token specimen</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  :root {{ color-scheme: light; }}
  body {{ margin:0; background:{sem('surface','page')};
    color:{sem('text','primary')}; font-family:{stack};
    font-size:16px; line-height:1.55; -webkit-font-smoothing:antialiased; }}
  .wrap {{ max-width:1296px; margin:0 auto; padding:72px 72px 160px; }}
  h1 {{ font-size:56px; font-weight:300; letter-spacing:-.028em;
    line-height:1.04; margin:0 0 8px; }}
  .sub {{ color:{sem('text','secondary')}; max-width:636px; margin:0 0 12px; }}
  h2 {{ font-size:26px; font-weight:500; letter-spacing:-.014em;
    margin:96px 0 4px; }}
  .note {{ color:{sem('text','tertiary')}; font-size:13px; margin:0 0 24px;
    max-width:636px; }}
  .eb {{ font-size:13px; font-weight:500; letter-spacing:.06em;
    color:{sem('text','tertiary')}; margin:0 0 8px; }}
  hr {{ border:0; border-top:1px solid {sem('border','divider')}; margin:0; }}
  .row {{ display:flex; align-items:center; gap:2px; margin-bottom:2px; }}
  .rl {{ width:64px; flex:none; font-size:13px; color:{sem('text','tertiary')}; }}
  .ch {{ flex:1; height:56px; position:relative; overflow:hidden; }}
  .ch span {{ position:absolute; left:7px; bottom:6px; font-size:11px;
    opacity:.8; }}
  .ch em {{ position:absolute; top:6px; left:7px; font-style:normal;
    font-size:9px; font-weight:500; letter-spacing:.06em; }}
  .grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr));
    gap:2px; }}
  .sw {{ padding:16px; min-height:92px; display:flex; flex-direction:column;
    justify-content:flex-end; }}
  .sw b {{ font-weight:500; font-size:14px; }}
  .sw span {{ font-size:12px; opacity:.75; }}
  .fb {{ padding:14px 18px; margin-bottom:2px; font-size:14px; }}
  .tr {{ display:flex; gap:32px; align-items:baseline;
    border-top:1px solid {sem('border','divider')}; padding:20px 0; }}
  .tm {{ width:190px; flex:none; font-size:12px;
    color:{sem('text','tertiary')}; line-height:1.4; }}
  .tm i {{ font-style:normal; opacity:.72; }}
  .ts {{ flex:1; min-width:0; overflow-wrap:anywhere; }}
  .sc {{ margin-bottom:16px; }}
  .scp {{ height:96px; display:flex; align-items:center; padding:0 24px;
    background-color:#fff; }}
  .scp span {{ color:{sem('text','on-ink')}; font-size:21px; font-weight:300;
    letter-spacing:-.008em; }}
  .sc i {{ font-style:normal; font-size:12px;
    color:{sem('text','tertiary')}; display:block; margin-top:6px; }}
  .btn {{ display:inline-block; border-radius:9999px; padding:14px 24px;
    font-size:14px; font-weight:500; letter-spacing:.01em; margin-right:10px; }}
  .btn-p {{ background:{sem('action','primary-bg')};
    color:{sem('action','primary-text')}; }}
  .btn-s {{ border:1px solid {sem('action','secondary-border')};
    color:{sem('action','secondary-text')}; }}
  a.lnk {{ color:{sem('text','primary')}; text-decoration:underline;
    text-underline-offset:4px; text-decoration-thickness:1px; }}
  a.lnk:hover {{ text-decoration-thickness:2px; }}
  .ledger {{ border-top:1px solid {sem('border','divider')}; }}
  .lr {{ display:flex; gap:32px; padding:32px 0;
    border-bottom:1px solid {sem('border','divider')}; }}
  .lf {{ font-size:96px; font-weight:300; letter-spacing:-.04em; line-height:.9;
    font-variant-numeric:tabular-nums; flex:none; width:526px; }}
  .ll {{ flex:1; max-width:430px; }}
  .ll em {{ font-style:normal; display:block; font-size:12px;
    color:{sem('text','tertiary')}; margin-top:12px; }}
  @media (max-width:767px) {{
    .wrap {{ padding:20px 20px 72px; }}
    h1 {{ font-size:32px; }} h2 {{ font-size:22px; margin-top:64px; }}
    .tr, .lr {{ flex-direction:column; gap:10px; }}
    .tm {{ width:auto; }} .lf {{ width:auto; font-size:40px; }}
    .rl {{ width:44px; }} .ch span, .ch em {{ display:none; }}
  }}
</style>
<div class="wrap">
  <p class="eb">Generated by build-tokens.py &middot; do not hand-edit</p>
  <h1>Homer City Energy Campus</h1>
  <p class="sub">Token specimen. Every value on this page is read from the same
  data that writes tokens.json, figma-variables.json and tokens.css, so it
  cannot drift. This shows values, not layouts &mdash; it is not a comp.</p>
  <p class="note">Set in Arial &mdash; Regular and Bold, the only two cuts it
  has. Nothing to license. Figma builds in Arimo, which is metrically
  identical.</p>

  <h2>Colour primitives</h2>
  <p class="note">Generated in OKLCH. Five ramps reproduce a client palette
  colour exactly at the step marked <b>client</b>.</p>
  {ramps}

  <h2>Grounds</h2>
  <p class="note">Alternate page &rarr; warm &rarr; page &rarr; ink. Navy is the
  footer only.</p>
  <div class="grid">{grounds}</div>

  <h2>Pillar marks</h2>
  <p class="note">The only colour in the interface besides the focus ring and an
  active feedback state.</p>
  <div class="grid">{pillars}</div>

  <h2>Feedback</h2>
  <p class="note">A filled band and a 2px accent rule. No outlines.</p>
  {feedback}

  <h2>Controls</h2>
  <p class="note">Round means press, square means read. A link is ink with an
  underline &mdash; never a colour.</p>
  <p><span class="btn btn-p">Explore the campus</span><span class="btn btn-s">Download the fact sheet</span></p>
  <p>Read more about <a class="lnk" href="#">the trades on site today</a>.</p>

  <h2>Stat ledger</h2>
  <p class="note">Figure left, label and footnote right, a hairline binding the
  row. Figures never count up.</p>
  <div class="ledger">
    <div class="lr"><div class="lf">1,800+</div><div class="ll">
      <p class="eb">As of September 2026</p>
      Direct-hire tradespeople and skilled contractors active on site
      <em>Changes roughly monthly &mdash; CMS field, date-stamped.</em></div></div>
    <div class="lr"><div class="lf">10,000+</div><div class="ll">
      Direct on-site construction-related jobs
      <em>Footnote 1 travels with this figure wherever it appears.</em></div></div>
  </div>

  <h2>Hero scrims over a white photograph</h2>
  <p class="note">The worst case an image can present. These are the only
  guarantee text over a photograph is readable. Do not lighten them.</p>
  {scrims}

  <h2>Type ramp &mdash; desktop / mobile</h2>
  <p class="note">Rendered at the desktop size. Two weights only &mdash; Arial
  has no Light and no Medium.</p>
  {ramp}
</div>
"""

# --------------------------------------------------------------------------
if __name__ == '__main__':
    here = os.path.dirname(os.path.abspath(__file__))
    fails = audit()
    if '--check' in sys.argv:
        sys.exit(1 if fails else 0)
    if fails:
        print('\nRefusing to write: fix the contrast failures first.'); sys.exit(1)
    figma = build_figma()
    drift = [(c['name'], v['name']) for c in figma['collections']
             for v in c['variables'] if set(v['values']) != set(c['modes'])]
    if drift:
        print(f'\n{len(drift)} variables whose value keys do not match their '
              f'collection modes, e.g. {drift[:3]}'); sys.exit(1)
    print(f"Figma payload: {sum(len(c['variables']) for c in figma['collections'])} "
          f"variables, {len(figma['textStyles'])} text styles, mode keys consistent")

    for fname, payload in (('tokens.json', build_tokens()),
                           ('figma-variables.json', figma)):
        with open(os.path.join(here, fname), 'w') as f:
            json.dump(payload, f, indent=2); f.write('\n')
    for fname, text in (('tokens.css', build_css()),
                        ('specimen.html', build_specimen())):
        with open(os.path.join(here, fname), 'w') as f:
            f.write(text)
    print('\nWrote tokens.json, figma-variables.json, tokens.css, specimen.html')
