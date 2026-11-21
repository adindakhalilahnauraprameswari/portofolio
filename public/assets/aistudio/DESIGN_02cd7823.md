---
name: Ink Comic & Editorial Archive
colors:
  surface: '#161310'
  surface-dim: '#161310'
  surface-bright: '#3c3835'
  surface-container-lowest: '#100e0b'
  surface-container-low: '#1e1b18'
  surface-container: '#221f1c'
  surface-container-high: '#2d2926'
  surface-container-highest: '#383430'
  on-surface: '#e9e1dc'
  on-surface-variant: '#dcc1b8'
  inverse-surface: '#e9e1dc'
  inverse-on-surface: '#33302c'
  outline: '#a48b84'
  outline-variant: '#56423c'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#db7450'
  on-primary-container: '#511500'
  inverse-primary: '#9c4424'
  secondary: '#ffb59d'
  on-secondary: '#5d1800'
  secondary-container: '#7c2d11'
  on-secondary-container: '#ff9b7a'
  tertiary: '#ccc6be'
  on-tertiary: '#33302b'
  tertiary-container: '#959089'
  on-tertiary-container: '#2c2924'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#7d2d0e'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390b00'
  on-secondary-fixed-variant: '#7c2d11'
  tertiary-fixed: '#e8e1da'
  tertiary-fixed-dim: '#ccc6be'
  on-tertiary-fixed: '#1e1b17'
  on-tertiary-fixed-variant: '#4a4641'
  background: '#161310'
  on-background: '#e9e1dc'
  surface-variant: '#383430'
  ink-base: '#181512'
  ink-surface: '#221E1A'
  parchment: '#FAF3EB'
  parchment-alt: '#F1E5D6'
  terracotta-stroke: '#B85A3A'
  terracotta-glow: '#D9724E'
  text-light: '#F7EFE6'
  text-dark: '#1E1916'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 5rem
    fontWeight: '700'
    lineHeight: '1'
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.15'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Space Mono
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1.4'
  label-sm:
    fontFamily: Space Mono
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: '1.4'
spacing:
  gutter: 1.75rem
  gutter-mobile: 1rem
  margin: 3.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system draws inspiration from serialized graphic novels, classical literary archives, and brush-and-ink masterworks. It marries the dark, contemplative atmosphere of traditional charcoal ink wash with the structural, unyielding precision of indie comic book frames. 

The aesthetic is built on sharp contrasts: deep, tactile charcoal washes framed against rich parchment cream surfaces, punctuated by vivid terracotta linework and crisp comic-style ink blocking. The experience feels archival yet visceral, evoking the tactile weight of illustrated paper volumes, custom lithographs, and deliberate storytelling. Every element operates like a panel or rubric in a continuous serialized narrative.

## Colors

The palette revolves around deep, atmospheric charcoal washes punctuated by vibrant rust and paper tones:

- **Primary (`#D9724E`):** Dynamic terracotta ink glow used for high-emphasis interactive surfaces, active borders, focal glyphs, and accent drop shadows.
- **Secondary (`#B85A3A`):** Deep oxidized terracotta outline tone. Governs structural comic panel frames, divider outlines, and secondary rules.
- **Tertiary (`#FAF3EB`):** Heavyweight parchment cream. Serves as high-contrast paper panel backgrounds, badge fillings, and editorial reading inserts.
- **Neutral (`#181512`):** Carbon-black sumi ink backdrop. Establishes the deep, nocturnal stage upon which the narrative unfolds.

When switching to light editorial paper surfaces, high-contrast typography shifts from the parchment white (`#F7EFE6`) of the dark canvas to an obsidian black ink (`#1E1916`), retaining sharp clarity across contrasting environments.

## Typography

The typographic hierarchy orchestrates a triad of historical elegance, contemporary digital readability, and archival indexation:

- **Display & Headlines (`EB Garamond`):** Evokes classical literary typeset and engraved story headers. Applied to dramatic chapter openers, monumental folio titles, and section introductions.
- **Narrative & Body (`Plus Jakarta Sans`):** Delivers clean, unencumbered legibility for extensive portfolio case studies, descriptions, and lists.
- **Metadata, Badges & Labels (`Space Mono`):** Monospaced, highly tracked, and rendered in uppercase. Mimics printing-press stamps, serial issue markers, chapter subtitles, and technical details.

## Layout & Spacing

The structural layout utilizes a strict 12-column grid bound to a maximum canvas constraint of `1180px`, honoring the disciplined grid of traditional comic book framing:

- **Canvas Margins & Gutters:** Desktop experiences employ generous 3.5rem margins with 1.75rem gutters between structural columns. Handheld viewports tighten down to 1.25rem outer margins and 1rem gutters.
- **Asymmetric Narrative Columns:** Content sections favor asymmetric splits (such as 5-column character profiles paired against 7-column prose sections) to preserve editorial tension.
- **Horizontal & Vertical Pacing:** Vertical chapter transitions feature deep pacing pauses (`5rem` to `8rem`), divided by organic ink-stroke silhouettes rather than sterile hairline dividers.

## Elevation & Depth

This system intentionally rejects diffused, floating ambient blurs in favor of physical comic-strip ink blocking and crisp spatial displacement:

- **Comic Panel Drop Shadow:** Cards, active tickets, and elevated panels employ razor-sharp, unblurred offset shadows: `6px 6px 0px #B85A3A`.
- **Interactive Translation Pop:** Hovering over interactive frames shifts the container `-2px, -2px` while expanding the shadow to `8px 8px 0px #D9724E`, simulating a raised printing plate under direct gallery lighting.
- **Surface Layering:** Depth is primarily established through tactile parchment overlays (`#FAF3EB`) cut against textured sumi-e ink grounds (`#181512`), creating the physical presence of physical pages laid over a dark draughting desk.

## Shapes

The design system enforces pure geometric sharpness (`0px` border radius). Every card, panel, button, and input element is sheared with clean 90-degree right angles, emulating hand-cut printing boards and physical comic panel edges.

Curves are reserved exclusively for organic vector illustrations, hand-drawn ink clouds, and fluid wave section dividers.

## Components

### Buttons
- **Primary Action:** Sharp-cornered rectangular block clad in `#D9724E`, framed with a `2px solid #B85A3A` border and `Space Mono` uppercase typography. Accompanied by a hard `4px 4px 0px #181512` offset drop shadow.
- **Secondary / Archival Action:** Transparent background with a `1.5px solid #F7EFE6` or `1.5px solid #B85A3A` rule. Hover states trigger an inverse color fill and a `-2px -2px` spatial lift.

### Chips & Badges
- Rendered in all-caps `Space Mono` with wide tracking (`0.15em`).
- Framed with a crisp `1.5px solid #1E1916` on parchment or `1.5px solid #B85A3A` on charcoal. Prefixed with a four-point ink star (`✦`).

### Comic Cards & Editorial Panels
- Defined by a sharp outer frame (`2px solid #B85A3A`) and the signature `6px 6px 0px #B85A3A` offset ink block shadow.
- Inner padding follows `space-lg` to `space-xl`, allowing content to breathe against the solid border edges.

### Form Inputs
- Built as tactile, ruled drafting slots with `0px` radius, background tint (`#221E1A` or `#FAF3EB`), and a bold `1.5px solid #B85A3A` border.
- Active focus states illuminate the bounding stroke to `#D9724E` with an immediate `3px 3px 0px #D9724E` bottom-right offset marker.

### Checkboxes & Radios
- Square 16px boxes with `2px solid #B85A3A`. Checked state displays a solid terracotta interior with a sharp counter-color center pip.