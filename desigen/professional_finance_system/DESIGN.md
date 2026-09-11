---
name: Professional Finance System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#ab0b1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#cf2c30'
  on-tertiary-container: '#ffecea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 20px
  gutter-mobile: 12px
---

## Brand & Style

The design system is anchored in the principles of **Modern Corporate Minimalism**. It is designed to evoke a sense of absolute reliability, precision, and calm control over one’s personal finances. The aesthetic prioritizes clarity and functional beauty, ensuring that complex financial data feels approachable and easy to digest.

By utilizing generous whitespace and a restricted color palette, the interface reduces cognitive load. The emotional response is one of "organized intelligence"—the user should feel that their data is secure and their financial path is clear. The visual language avoids decorative flourishes in favor of meaningful hierarchy and high-quality utility.

## Colors

The palette is built on "Finance Blue" (#2563EB) to establish immediate trust and authority. This is supported by a functional semantic system:
- **Primary (Finance Blue):** Used for primary actions, progress indicators, and active states.
- **Success (Emerald Green):** Exclusively reserved for income, savings goals, and positive financial growth.
- **Error (Rose Red):** Used for expenses, over-budget alerts, and critical deletions.
- **Neutrals:** A sophisticated range of Slate grays is used for typography and UI borders to maintain a professional, high-end feel.

The background is a clean, off-white (`#F8FAFC`) to reduce eye strain and allow cards and surfaces to pop with subtle depth.

## Typography

The design system utilizes **Inter** for all typographic needs. Inter’s tall x-height and clear letterforms ensure maximum legibility for numerical data, which is the cornerstone of an expense tracker. 

- **Numeric Data:** For currency displays, use `headline-lg` or `headline-md` with a slightly tighter letter-spacing to emphasize the "amount" as a singular unit.
- **Hierarchy:** Bold weights are used sparingly for titles and primary labels, while regular weights are used for descriptions and secondary metadata to maintain the minimal aesthetic.
- **Labels:** Small, all-caps labels are used for category headers or section titles to provide clear structural anchors without overwhelming the primary content.

## Layout & Spacing

The design system follows a strictly fluid grid for mobile devices, anchored by a **20px outer margin**. This provides the "generous whitespace" required to make the app feel premium and uncluttered.

- **Grid:** A standard 4-column layout for mobile is used, with 12px gutters between cards or list items.
- **Vertical Rhythm:** A base-4 increment system drives all vertical spacing. Use 16px (md) for standard spacing between elements and 32px (xl) to separate distinct logical sections.
- **Adaptation:** On larger screens (tablets), the layout transitions to a 12-column grid with a maximum content width of 720px to prevent financial charts from becoming overly stretched and difficult to read.

## Elevation & Depth

The design system utilizes **Ambient Shadows** to create a sense of organized layering. Depth is used functionally rather than decoratively:

- **Surface Level (Base):** The main background uses a light neutral tint.
- **Card Level (Raised):** Transaction cards and summary modules use a white background with a soft, diffused shadow (Y: 4px, Blur: 12px, Opacity: 4%, Color: #000). This makes data segments feel like tangible, interactive objects.
- **Modal/Action Level (Overlay):** Floating action buttons (FABs) and bottom sheets use a more pronounced shadow (Y: 8px, Blur: 20px, Opacity: 8%) to indicate they sit high above the current context.
- **Glassmorphism:** Navigation bars may use a subtle backdrop blur (12px) with a semi-transparent white background (90% opacity) to maintain a sense of content continuity as the user scrolls.

## Shapes

The shape language is defined by **Level 2 (Rounded)** corners. This creates a friendly and modern silhouette that softens the clinical nature of financial data.

- **Main Containers:** Cards and input fields use a **1rem (16px)** corner radius.
- **Buttons:** Primary action buttons use a **1rem (16px)** radius or a full pill shape for high-visibility triggers.
- **Secondary Elements:** Small chips (for categories or tags) use a **0.5rem (8px)** radius to distinguish them from larger container elements.
- **Borders:** Use thin, 1px borders in a light gray (`#E2E8F0`) only when necessary to define boundaries on white backgrounds.

## Components

### Buttons
- **Primary:** Finance Blue background, white text, 1rem radius. High-emphasis for "Add Transaction" or "Save."
- **Secondary:** Light blue tint background with Finance Blue text. Used for "View All" or "Cancel."

### Inputs
- Backgrounds should be slightly off-white (`#F1F5F9`) with no border in their resting state, transitioning to a white background with a 2px Finance Blue border on focus. Labels sit clearly above the input field.

### Cards
- The central component for the design system. Cards should have generous padding (16px–20px) and use `headline-sm` for the amount. Expenses are prefixed with a minus sign and use Error Red; Income uses a plus sign and Success Green.

### Chips & Badges
- Used for categories (e.g., "Food," "Travel"). These should have a very light background tint derived from the category color and a slightly darker text color for accessibility.

### Progress Bars
- Used for budget tracking. Use a thick 8px height with rounded caps. The track is light gray, and the fill color changes from Finance Blue to Error Red if the budget is exceeded.