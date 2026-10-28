# Design: Vetanly marketing site

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: a ruled register (Counter hero, then the product's own records: the module register, the gate-to-payslip steps, the before and after table, the day by the hour, the payslip, the feature index)
- Theme: Furrow, with the brand's purple (#5938E8) in place of Furrow's tangerine
- Axes: light/grotesk-sans/cool · posture: committed (purple fills the close band; it is never type on paper except links and the step numerals)

## Tokens
`app/tokens.css` is the source of truth (Tailwind `@theme static`, so every role is a utility: `bg-paper`, `text-ink`, `border-rule`, `bg-accent`). The roles:
```css
:root {
  --color-paper: oklch(96% 0.011 85);  --color-paper-2: oklch(99.5% 0.005 85);  --color-paper-3: oklch(92% 0.016 85);
  --color-ink: oklch(18% 0.006 60);  --color-ink-2: oklch(28% 0.008 60);  --color-muted: oklch(44% 0.012 60);  --color-rule: oklch(88% 0.013 85);
  --color-accent: oklch(50.3% 0.245 281.5);  --color-accent-2: oklch(44.9% 0.221 280.8);  --color-accent-ink: oklch(99.5% 0.005 85);  --color-focus: oklch(52% 0.22 282);
  --color-green: oklch(48% 0.11 150);  --color-amber: oklch(50% 0.11 65);  --color-mint: oklch(92% 0.079 157.4);
  --font-display: "Red Hat Display" 600;  --font-body: "Red Hat Text" 400/500;  --font-outlier: "Red Hat Mono" (times, rupees, codes only);
  --radius-card: 10px;  --radius-entry: 14px;  --radius-pill: 6px;  --rule-hair: 1px;  --shadow-card: soft, two layers;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. `app/image-tokens.ts` mirrors the colours as hex for the generated share card and icons.

## Surfaces
- Sections part by a 1px ink rule, a change of paper (`paper-2`, `paper-3`, ink, the purple close) or space; never a card grid.
- Lists are ruled: a 1px ink rule over the list, `rule` hairlines between rows (`.ruled`).
- Product samples are sheets (`.sheet`) or notebook entries (`.entry` + `.notebook`) inside a `data-slot` with `data-kind="product"`, so real screenshots replace them.

## Controls
- Primary: `.btn .btn--primary`, purple fill, paper text, 6px radius, 48px tall; one per page.
- Secondary: `.btn`, paper-2 with a rule border, same radius and height; `.btn--on-dark` on ink or purple.
- Links: `.link`, purple with a soft underline that firms on hover. No arrows glued to link text.

## Motion
- Character: still. Colour on hover, a 1px press, the FAQ plus turning; the kiosk scan line is the only loop (2.6s) and stops under reduced motion.

## Exports
`app/tokens.css` in this project, in Tailwind v4 form. DTCG or shadcn blocks are added here on request.
