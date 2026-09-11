---
name: Nebula Finance
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies a "Celestial Wealth" philosophy, merging high-stakes financial precision with a boundless, futuristic aesthetic. The target audience comprises sophisticated investors and tech-forward users who value transparency and cutting-edge performance.

The visual style is **Glassmorphism**, characterized by:
- **Depth through Transparency:** Using multi-layered frosted surfaces to represent the fluidity of digital assets.
- **Luminosity:** Subtle glows and vibrant accents that guide the eye toward critical financial data.
- **Modernity:** A deep, dark canvas that minimizes eye strain while allowing accent colors to pop with "electric" energy.

## Colors

The palette is anchored in a midnight void to create a sense of infinite space and premium exclusivity.

- **Primary & Secondary:** Electric Blue (#3b82f6) and Cyan (#06b6d4) are used for "active" states, growth indicators, and primary calls to action.
- **Accent:** A soft Violet (#8b5cf6) may be used for secondary data visualizations or rewards.
- **Glass Surfaces:** Surfaces use a semi-transparent slate base with a 1px white border at low opacity (12%) to simulate the edge of a glass pane.
- **Functional Colors:** Success is represented by the Cyan accent; warnings/errors use a vibrant Coral (#fb7185) to maintain high visibility against the dark background.

## Typography

The typography strategy focuses on high-contrast legibility and an airy, technical feel.

- **Headlines:** Montserrat provides a geometric, wide-tracking foundation that feels architectural and premium. Use it for balances, section headers, and impactful data points.
- **Body & UI:** Inter is utilized for its exceptional legibility in dense financial lists and descriptions.
- **Wide Tracking:** All labels and headers should employ slightly increased letter spacing (tracked out) to enhance the "futuristic" and "clean" aesthetic.
- **Contrast:** Maintain a pure white (#ffffff) or high-tint silver (#f1f5f9) for primary text to ensure it vibrates against the dark glass layers.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with generous inner margins to allow the glass backgrounds to breathe.

- **Rhythm:** A 4px baseline grid ensures vertical consistency. 
- **Containers:** Content is housed in translucent cards that span varying column widths. 
- **Mobile:** A 4-column grid with 20px side margins. 
- **Desktop:** A 12-column grid with 64px side margins.
- **Breathing Room:** Use 'xl' spacing (40px) between major glass sections to emphasize the "floating" nature of the UI components.

## Elevation & Depth

Depth is not communicated through traditional black shadows, but through **Backdrop Blurs** and **Luminous Layering**.

- **Level 1 (Base):** Deep midnight background (#0f172a).
- **Level 2 (Standard Card):** Background `rgba(30, 41, 59, 0.5)` with a `20px` backdrop-filter blur. 1px solid border at `rgba(255, 255, 255, 0.1)`.
- **Level 3 (Modals/Popovers):** Background `rgba(30, 41, 59, 0.8)` with a `40px` backdrop-filter blur. These should include a subtle "outer glow" using the primary blue color at 10% opacity instead of a shadow.
- **Interactions:** When an element is hovered or active, increase the border opacity and add a subtle inner-shadow glow to simulate the glass catching light.

## Shapes

The shape language is organic yet structured, favoring high-radius corners to soften the technical nature of financial data.

- **Standard Containers:** Use `rounded-lg` (16px) as the baseline for all glass cards and modules.
- **Interactive Elements:** Buttons and input fields should follow a consistent 12px-16px radius.
- **Selection Indicators:** Use "Pill" shapes for tags, chips, and segment controllers to distinguish them from structural card containers.

## Components

### Buttons
- **Primary:** Solid gradient from Electric Blue to Cyan. No blur, high contrast. High-glow shadow on hover.
- **Secondary (Glass):** Frosted background, 1px white border, white text.

### Cards
- All cards must feature `backdrop-filter: blur(20px)`.
- Borders should be "top-weighted" (slightly brighter on the top edge) to simulate overhead lighting.

### Input Fields
- Dark, semi-transparent fills with 1px bottom-borders that "light up" (Cyan) when focused. 
- Placeholder text in low-opacity silver.

### Progress & Charts
- Use neon-style lines with outer glows (drop-shadow filter) to make data appear as if it is projected light.
- Avoid solid fills for area charts; use vertical gradients that fade into the glass background.

### Navigation
- Bottom navigation (mobile) or Side navigation (desktop) should be a persistent glass bar that blurs the content passing beneath it, creating a sense of constant depth.