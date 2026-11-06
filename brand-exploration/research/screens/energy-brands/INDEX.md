# energy-brands screens: index

Captured 2026-11-06 with tools/capture.js (Playwright, 1440x900 desktop,
375x812 @2x mobile) plus a scroll-through helper for pages whose full-page
capture came back one viewport tall (scroll-hijacked sites): `-s1..sN.jpg`
are consecutive viewport shots. `-desktop-full.jpg` is only a true full page
where it is taller than 900px.

| Slug | Name | URL | Status |
| --- | --- | --- | --- |
| orsted-kontrapunkt | Orsted identity (Kontrapunkt case study), PRIORITY | https://kontrapunkt.com/work/a-global-energy-company-goes-green | Kept. s1-s9 scroll shots + mobile + styles |
| hornsea-home | Orsted Hornsea Projects (mobile only) | https://hornseaprojects.co.uk/ | Kept, mobile only. Desktop returned 403 bot check |
| (orsted.com, orsted.us) | Orsted corporate site | https://orsted.com/en | FAILED: 403 bot-check interstitial from this network. Not worked around. Unverified |
| skekraft-home | Skelleftea Kraft | https://www.skekraft.se/ | Kept |
| formenergy-home | Form Energy | https://formenergy.com/ | Kept |
| cfs-home | Commonwealth Fusion Systems | https://cfs.energy/ | Kept |
| cfs-upstatement | CFS case study (Upstatement) | https://upstatement.com/case-study/commonwealth-fusion-systems/ | Kept (hero only; full capture one viewport) |
| edp-pentagram | EDP identity (Pentagram) | https://www.pentagram.com/work/edp | Kept as identity-system example and cliche warning. s1-s8 |
| ember-home | Ember | https://ember-energy.org/ | Kept |
| vattenfall-home | Vattenfall | https://group.vattenfall.com/ | Kept (cookie modal over desktop hero; mobile blank at capture) |
| x-energy-home | X-energy | https://x-energy.com/ | Kept as partial: type steal, nuclear-tech register avoid |
| vineyardwind-home | Vineyard Wind (community hub) | https://www.vineyardwind.com/ | Kept |
| cvow-home | Dominion Coastal Virginia Offshore Wind | https://coastalvawind.com/ | Kept |
| sizewell-home | EDF Sizewell C page | https://www.edfenergy.com/energy/nuclear-new-build-projects/sizewell-c | Kept as anti-pattern |
| edp-home, ovo-home, octopus-home, electricitymaps-home, fervo-home, basepower-home, hinkley-home, ovo-wolffolins, kontrapunkt work index | | | DROPPED: generic, blocked, or wrong page (Wolff Olins URL guess returned the work index, not the OVO case) |
