"""Homer City Energy Campus — design tokens, Modern direction (Nov 2026).

Single source of truth. Run `python3 design-system/tokens.py` to regenerate:

  design-system/tokens.json   W3C design-token format
  design-system/tokens.css    CSS custom properties (+ mobile overrides,
                              reduced motion)
  design-system/figma.json    Compact data the Figma variable builder reads

Never hand-edit the generated files. Rationale: docs/03-design-system.md §15.

Layers: primitives (raw, hidden from Figma pickers) -> semantic (what
components use; Desktop/Mobile modes) -> typography (Desktop/Mobile) -> motion.
"""
import json
from pathlib import Path

HERE = Path(__file__).parent

# ---------------------------------------------------------------- primitives
# Ramps carried from the Stage 4 file: generated on a shared perceptual
# lightness ramp, with the client's five colours reproduced at named steps
# (navy/900 #143251, blue/600 #238FC8, aqua/200 #AFECF1, gold/400 #D8B471;
# cream #F3F1D0 is not used by any semantic role).
STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
RAMPS = {
    "ink":   "F6F4F0 EDECE7 DEDDD8 CCCAC6 B5B4B0 9C9B97 83827E 696763 504E4A 36342F 1B1914",
    "navy":  "F6F9FC EBF1F8 D6E2EF BED1E5 A2BBD7 81A2C6 6289B3 476F9B 244A71 143251 081E35",
    "blue":  "F4F9FD E6F2FB CBE5F6 ADD5F0 87C0E6 59A8D8 238FC8 0075AC 005B87 004265 002942",
    "aqua":  "EFFBFC DAF7F9 AFECF1 90DEE4 79C7CD 5FADB3 45939A 287980 006167 00474C 002D31",
    "gold":  "FCF8F1 F8EFE0 EFDFC1 E5CB9C D8B471 C29742 A77E24 8D6400 6F4E00 513800 342200",
    "green": "F5FAF7 EAF3EC D4E6D9 BAD7C2 9BC4A7 77AD89 54966C 2E7D4F 12653A 004A27 003015",
    "red":   "FEF6F5 FDECE8 FAD8D2 F4C0B7 EBA397 DD8274 CB6152 B23B2E 97251A 73120A 4D0402",
}
COLOR = {"base/white": "#FFFFFF", "base/black": "#000000"}
for name, hexes in RAMPS.items():
    for step, h in zip(STEPS, hexes.split()):
        COLOR[f"{name}/{step}"] = "#" + h
# Alpha whites for frosted surfaces over photographs.
for a in (8, 12, 16, 24):
    COLOR[f"white-alpha/{a}"] = f"#FFFFFF{round(a * 2.55):02X}"

SPACE = [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80,
         96, 104, 120, 144, 160, 200]
RADIUS = {"0": 0, "2": 2, "4": 4, "8": 8, "12": 12, "16": 16, "20": 20,
          "24": 24, "32": 32, "full": 9999}

# ------------------------------------------------------------------ semantic
# (name, desktop, mobile-or-None, figma scopes). Colour values are aliases.
F, S, T, ST, FX = "FRAME_FILL", "SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR", "EFFECT_COLOR"
SEM_COLOR = [
    # Grounds: white, near-white, navy. No tinted grounds.
    ("surface/page", "base/white", [F, S]),
    ("surface/subtle", "ink/50", [F, S]),
    ("surface/inverse", "navy/900", [F, S]),
    ("surface/inverse-raised", "navy/800", [F, S]),
    ("surface/glass", "white-alpha/16", [F, S]),
    ("surface/glass-strong", "white-alpha/24", [F, S]),
    ("surface/media", "ink/200", [F, S]),
    ("scrim/hero", "base/black", [F, S]),  # true black (user, Nov 2026)
    # Text. ink/700 is the floor for neutral text on white and ink/50.
    ("text/primary", "ink/950", [T]),
    ("text/secondary", "ink/800", [T]),
    ("text/tertiary", "ink/700", [T]),
    ("text/eyebrow", "ink/700", [T]),
    ("text/stat-figure", "ink/950", [T]),
    ("text/inverse", "base/white", [T]),
    ("text/inverse-secondary", "navy/200", [T]),
    # Blue means link.
    ("text/link", "blue/700", [T]),
    ("text/link-hover", "blue/800", [T]),
    ("text/link-inverse", "blue/300", [T]),
    # Controls — pill button with a circular icon chip (Modern direction).
    ("action/primary-bg", "blue/700", [F, S]),
    ("action/primary-bg-hover", "blue/800", [F, S]),
    ("action/primary-text", "base/white", [T]),
    ("action/primary-chip", "base/white", [F, S]),
    ("action/primary-chip-icon", "blue/700", [T, F, S]),
    ("action/secondary-bg", "ink/100", [F, S]),
    ("action/secondary-bg-hover", "ink/200", [F, S]),
    ("action/secondary-text", "ink/950", [T]),
    ("action/secondary-chip", "ink/950", [F, S]),
    ("action/secondary-chip-icon", "base/white", [T, F, S]),
    ("action/inverse-bg", "base/white", [F, S]),
    ("action/inverse-bg-hover", "navy/100", [F, S]),
    ("action/inverse-text", "navy/900", [T]),
    ("action/inverse-chip", "navy/900", [F, S]),
    ("action/inverse-chip-icon", "base/white", [T, F, S]),
    ("action/icon-control", "blue/700", [T, F, S]),
    ("action/icon-control-inverse", "base/white", [T, F, S]),
    # Strokes are dividers. Nothing else.
    ("border/divider", "ink/300", [ST]),
    ("border/divider-inverse", "navy/700", [ST]),
    ("border/input", "ink/600", [ST]),
    ("focus/ring", "blue/700", [ST, FX]),
    ("focus/ring-inverse", "blue/300", [ST, FX]),
    # A pillar colour marks one of the four pillars, and nothing else.
    ("pillar/safety", "green/800", [F, S, T, ST]),
    ("pillar/infrastructure", "navy/900", [F, S, T, ST]),
    ("pillar/community", "blue/800", [F, S, T, ST]),
    ("pillar/energy-future", "gold/800", [F, S, T, ST]),
    # Alert bar severities.
    ("feedback/info-surface", "blue/100", [F, S]),
    ("feedback/info-text", "blue/900", [T]),
    ("feedback/construction-surface", "gold/100", [F, S]),
    ("feedback/construction-text", "gold/900", [T]),
    ("feedback/urgent-surface", "red/100", [F, S]),
    ("feedback/urgent-text", "red/900", [T]),
]
G, W, CR, O = "GAP", "WIDTH_HEIGHT", "CORNER_RADIUS", "OPACITY"
SEM_FLOAT = [
    # Layout. Band width comes from the parent's padding, never the band.
    ("space/section-y", 160, 80, [W, G]),
    ("space/section-y-sm", 96, 56, [W, G]),
    ("space/container-x", 80, 16, [W, G]),           # wide 1280
    ("space/container-x-contained", 160, 16, [W, G]),  # contained 1120
    ("space/gutter", 24, 16, [G]),
    ("space/column-gap", 104, 40, [G]),
    ("space/stack-2xs", 4, 4, [G]),
    ("space/stack-xs", 8, 8, [G]),
    ("space/stack-sm", 12, 12, [G]),
    ("space/stack-md", 16, 16, [G]),
    ("space/stack-lg", 24, 24, [G]),
    ("space/stack-xl", 32, 32, [G]),
    ("space/stack-2xl", 48, 40, [G]),
    ("space/stack-3xl", 64, 48, [G]),
    ("space/stack-4xl", 104, 64, [G]),
    ("space/inline-xs", 8, 8, [G]),
    ("space/inline-sm", 12, 12, [G]),
    ("space/inline-md", 16, 16, [G]),
    ("space/inline-lg", 24, 20, [G]),
    ("space/control-start", 24, 20, [W, G]),
    ("space/control-end", 4, 4, [W, G]),
    ("space/control-gap", 24, 16, [G]),
    ("space/chip-x", 16, 14, [W, G]),
    ("space/chip-y", 8, 8, [W, G]),
    ("space/card-padding", 20, 16, [W, G]),
    ("space/nav-padding", 6, 6, [W, G]),
    # Radius — Modern: rounded media and controls, square surfaces.
    ("radius/control", 9999, 9999, [CR]),
    ("radius/chip", 9999, 9999, [CR]),
    ("radius/input", 12, 12, [CR]),
    ("radius/card", 20, 16, [CR]),       # frosted hero cards only
    ("radius/nav", 16, 12, [CR]),
    ("radius/media", 24, 16, [CR]),
    ("radius/media-lg", 32, 20, [CR]),
    ("radius/media-bleed", 0, 0, [CR]),
    ("radius/surface", 0, 0, [CR]),
    # Sizes.
    ("size/control", 48, 48, [W]),
    ("size/control-lg", 56, 52, [W]),
    ("size/control-chip", 40, 40, [W]),
    ("icon/sm", 16, 16, [W]),
    ("icon/md", 20, 20, [W]),
    ("icon/lg", 24, 24, [W]),
    ("icon/xl", 32, 32, [W]),
    # Hero scrims are set so text clears AA over a pure white photograph.
    ("opacity/scrim-hero-start", 0.88, 0.88, [O]),
    ("opacity/scrim-hero-end", 0.72, 0.88, [O]),
    ("opacity/scrim-media", 0.24, 0.24, [O]),
    ("opacity/disabled", 0.38, 0.38, [O]),
]

# ---------------------------------------------------------------- typography
# Only font size varies by breakpoint. Line height and tracking are
# percentages, so they scale on their own.
# (role, desktop size, mobile size, weight, line height %, tracking %)
TYPE = [
    ("hero", 72, 40, "Regular", 100, -3),
    ("h1", 56, 34, "Regular", 104, -2.5),
    ("h2", 44, 30, "Regular", 110, -2),
    ("h3", 26, 22, "Regular", 122, -1),
    ("h4", 20, 18, "Medium", 130, -0.5),
    ("body-lg", 20, 18, "Regular", 150, -0.5),
    ("body", 16, 16, "Regular", 155, 0),
    ("body-sm", 14, 14, "Regular", 150, 0),
    ("label", 16, 16, "Medium", 130, 0),
    ("label-sm", 14, 14, "Medium", 130, 0),
    ("caption", 13, 13, "Regular", 145, 0),
    ("eyebrow", 12, 12, "SemiBold", 130, 4),
    ("stat", 64, 44, "Light", 100, -2.5),
    ("stat-sm", 44, 34, "Light", 104, -2),
    ("stat-unit", 22, 18, "Regular", 120, -0.5),
    ("quote", 26, 21, "Light", 135, -1),
]
FONT_FAMILY = {"sans": "Geist", "icon": "Material Symbols Rounded"}

MOTION = {
    "duration/instant": 0, "duration/fast": 120, "duration/base": 200,
    "duration/slow": 320, "duration/reveal": 720,
    "distance/sm": 8, "distance/md": 16, "distance/lg": 24,
    "stagger/base": 60,
    "ease/appear": "cubic-bezier(0.16, 1, 0.30, 1)",
    "ease/interact": "cubic-bezier(0.30, 0, 0.20, 1)",
    "ease/transition": "cubic-bezier(0.40, 0, 0.20, 1)",
    "ease/exit": "cubic-bezier(0.40, 0, 1, 1)",
}

EFFECTS = {
    "glass": {"type": "BACKGROUND_BLUR", "radius": 24},
    "focus-ring": {"type": "DROP_SHADOW", "spread": 3, "color": "focus/ring"},
    "focus-ring-inverse": {"type": "DROP_SHADOW", "spread": 3, "color": "focus/ring-inverse"},
}


# ----------------------------------------------------------------- emitters
def css_name(path):
    return "--" + path.replace("/", "-")


def build():
    tokens = {"$description": __doc__.strip().splitlines()[0], "color": {},
              "space": {}, "radius": {}, "semantic": {}, "type": {},
              "motion": {}}

    def put(tree, path, value, typ):
        node = tree
        parts = path.split("/")
        for p in parts[:-1]:
            node = node.setdefault(p, {})
        node[parts[-1]] = {"$type": typ, "$value": value}

    for k, v in COLOR.items():
        put(tokens["color"], k, v, "color")
    for v in SPACE:
        put(tokens["space"], str(v), f"{v}px", "dimension")
    for k, v in RADIUS.items():
        put(tokens["radius"], k, f"{v}px", "dimension")
    for name, ref, _ in SEM_COLOR:
        put(tokens["semantic"], name, "{color." + ref.replace("/", ".") + "}", "color")
    for name, d, m, _ in SEM_FLOAT:
        typ = "number" if name.startswith("opacity") else "dimension"
        val = d if typ == "number" else f"{d}px"
        put(tokens["semantic"], name, val, typ)
        tokens["semantic"].setdefault("$mobile", {})[name] = m
    for role, d, m, wt, lh, tr in TYPE:
        tokens["type"][role] = {"$type": "typography", "$value": {
            "fontFamily": FONT_FAMILY["sans"], "fontWeight": wt,
            "fontSize": f"{d}px", "fontSizeMobile": f"{m}px",
            "lineHeight": f"{lh}%", "letterSpacing": f"{tr}%"}}
    for k, v in MOTION.items():
        put(tokens["motion"], k, v if isinstance(v, str) else f"{v}ms" if k.startswith(("duration", "stagger")) else f"{v}px",
            "cubicBezier" if k.startswith("ease") else "duration" if k.startswith(("duration", "stagger")) else "dimension")
    (HERE / "tokens.json").write_text(json.dumps(tokens, indent=2) + "\n")

    # CSS
    out = ["/* Generated by tokens.py — do not edit. */", ":root {"]
    out += [f"  {css_name('color/' + k)}: {v};" for k, v in COLOR.items()]
    out += [f"  {css_name('space/' + str(v))}: {v}px;" for v in SPACE]
    out += [f"  {css_name('radius/' + k)}: {v}px;" for k, v in RADIUS.items()]
    out += [f"  {css_name(n)}: var({css_name('color/' + r)});" for n, r, _ in SEM_COLOR]
    for n, d, _, _ in SEM_FLOAT:
        out.append(f"  {css_name(n)}: {d if n.startswith('opacity') else str(d) + 'px'};")
    out.append(f"  --font-sans: '{FONT_FAMILY['sans']}', system-ui, sans-serif;")
    for role, d, _, wt, lh, tr in TYPE:
        w = {"Light": 300, "Regular": 400, "Medium": 500, "SemiBold": 600}[wt]
        out += [f"  --type-{role}-size: {d}px;", f"  --type-{role}-weight: {w};",
                f"  --type-{role}-line: {lh / 100};", f"  --type-{role}-tracking: {tr / 100}em;"]
    for k, v in MOTION.items():
        unit = "ms" if k.startswith(("duration", "stagger")) else "px" if k.startswith("distance") else ""
        out.append(f"  {css_name(k)}: {v}{unit};")
    out.append("}")
    out.append("@media (max-width: 767px) {\n  :root {")
    for n, d, m, _ in SEM_FLOAT:
        if m != d:
            out.append(f"    {css_name(n)}: {m if n.startswith('opacity') else str(m) + 'px'};")
    for role, d, m, *_ in TYPE:
        if m != d:
            out.append(f"    --type-{role}-size: {m}px;")
    out.append("  }\n}")
    out.append("@media (prefers-reduced-motion: reduce) {\n  :root {")
    out += [f"    {css_name(k)}: 0ms;" for k in MOTION if k.startswith(("duration", "stagger"))]
    out += [f"    {css_name(k)}: 0px;" for k in MOTION if k.startswith("distance")]
    out.append("  }\n}")
    (HERE / "tokens.css").write_text("\n".join(out) + "\n")

    # Figma data
    figma = {
        "prim_color": COLOR, "space": SPACE, "radius": RADIUS,
        "sem_color": [[n, r, s] for n, r, s in SEM_COLOR],
        # Figma binds opacity variables as percentages (0–100); CSS keeps 0–1.
        "sem_float": [[n, d * 100, m * 100, s] if n.startswith("opacity/") else [n, d, m, s]
                      for n, d, m, s in SEM_FLOAT],
        "type": [[r, d, m] for r, d, m, *_ in TYPE],
        "styles": [[r, wt, lh, tr] for r, _, _, wt, lh, tr in TYPE],
        "family": FONT_FAMILY, "motion": MOTION, "effects": EFFECTS,
    }
    (HERE / "figma.json").write_text(json.dumps(figma, separators=(",", ":")) + "\n")


if __name__ == "__main__":
    build()
    print("tokens.json, tokens.css, figma.json written")
