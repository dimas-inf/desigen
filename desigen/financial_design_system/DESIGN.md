---
name: Financial Design System
colors:
  surface: '#0f1418'
  surface-dim: '#0f1418'
  surface-bright: '#343a3e'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#171c20'
  surface-container: '#1b2024'
  surface-container-high: '#252b2e'
  surface-container-highest: '#303539'
  on-surface: '#dee3e8'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dee3e8'
  inverse-on-surface: '#2c3135'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffbcbf'
  on-tertiary: '#67001b'
  tertiary-container: '#ff929a'
  on-tertiary-container: '#8c0028'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#0f1418'
  on-background: '#dee3e8'
  surface-variant: '#303539'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Outfit
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
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  gutter: 1rem
  margin-mobile: 1.25rem
  margin-desktop: 2.5rem
---

## Brand & Style

This design system is engineered for a high-performance fintech environment, blending the security of traditional banking with the velocity of modern digital assets. The brand personality is sophisticated yet energetic, utilizing a "Dark Glass" aesthetic to minimize eye strain during long-term portfolio monitoring.

The visual narrative centers on **Glassmorphism**. Layers of depth are created using varying levels of background blur and translucent fills, suggesting transparency and clarity in financial dealings. High-intensity neon accents break through the deep charcoal base to guide the user’s eye toward critical transactional actions and real-time data updates.

## Colors

The palette is built on a foundation of deep, nocturnal tones to provide a high-contrast canvas for financial data.

- **Foundations:** The primary canvas uses `#0f172a` (Midnight), while elevated surfaces and cards utilize `#1e293b` (Charcoal).
- **Accents:** 
    - **Electric Blue (#38bdf8):** Used for primary calls-to-action, selection states, and progress indicators.
    - **Emerald (#10b981):** Reserved exclusively for positive financial growth, income, and success confirmations.
    - **Rose (#f43f5e):** Dedicated to expenditures, market dips, alerts, and destructive actions.
- **Overlays:** Glass effects utilize a white-tinted border at 10% opacity to define edges without adding visual weight.

## Typography

The design system utilizes **Outfit** for its geometric clarity and modern digital feel. 

- **Hierarchy:** Use `headline-xl` for total balance displays and primary screen headers.
- **Data Display:** Numerical data should use a medium or semi-bold weight to ensure legibility against the dark backgrounds.
- **Readability:** For long-form transaction histories, `body-md` provides the optimal balance of information density and clarity.
- **System Labels:** Small labels should use the `label-sm` style with increased letter spacing and uppercase casing for clear categorization in tight spaces.

## Layout & Spacing

This design system employs a **Fluid Grid** model to ensure financial dashboards remain functional from mobile devices to ultrawide monitors.

- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile.
- **Rhythm:** An 8px linear scale governs all padding and margin decisions. 
- **Safe Areas:** On mobile, a minimum horizontal margin of `20px` (1.25rem) is required to keep interactive elements away from the screen edges.
- **Density:** Financial tables should utilize "Comfortable" spacing (`md` / 16px) between rows to prevent data misreading, while "Compact" spacing (`sm` / 8px) is reserved for supplementary meta-data.

## Elevation & Depth

Depth in this design system is achieved through light and blur rather than traditional drop shadows.

- **Base Layer:** The deepest level (#0f172a).
- **Surface Layer:** Standard cards use a semi-transparent `#1e293b` with a `20px` backdrop blur.
- **Floating Layer:** Modals and tooltips utilize a lighter glass fill (15% white tint) and a more aggressive `40px` blur to appear as if they are floating high above the interface.
- **Outer Glows:** Interactive neons (Blue, Emerald, Rose) may use a subtle, color-matched outer glow (`blur: 12px, opacity: 0.3`) when in an active or "on" state to simulate light emission.
- **Borders:** Every glass element must have a `1px` solid border using `rgba(255, 255, 255, 0.1)` to define its perimeter against the dark background.

## Shapes

The shape language is defined by **Large (16px+)** radii to soften the technical nature of financial data.

- **Cards & Containers:** Use `rounded-xl` (24px) for all primary dashboard cards and containers.
- **Buttons:** Use `rounded-lg` (16px) or fully pill-shaped (100px) for a modern, approachable feel.
- **Inputs:** Form fields should match the button radius (16px) to maintain visual consistency.
- **Icons:** Minimal line icons should feature slightly rounded terminals to match the typography and container language.

## Components

- **Buttons:** Primary buttons use a solid Electric Blue fill with dark text. Secondary buttons use a glass-fill background with a blue border.
- **Glass Cards:** The cornerstone component. Always features a backdrop blur, subtle 1px border, and a 16px-24px corner radius.
- **Input Fields:** Deep charcoal backgrounds with 1px glass borders. On focus, the border transitions to Electric Blue with a soft glow.
- **Transaction Lists:** Rows are separated by low-opacity lines. Each row should include a leading icon (e.g., merchant logo or category icon) housed in a `rounded-lg` glass container.
- **Value Indicators:** Positive numbers always carry the Emerald tint; negative values always carry the Rose tint. No exceptions.
- **Micro-charts:** Sparklines should be used within cards to show 7-day trends, using the Emerald/Rose logic based on net change.