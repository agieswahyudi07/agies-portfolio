# Design System & Architecture Specification (design.md)

> **Archetype:** Blueprint Engineering × Swiss Editorial Monochrome  
> **Target Audience:** Engineering Leaders, CTOs, Senior Technical Recruiters  
> **Brand Identity:** High-throughput backend software engineer (Laravel, MySQL, Redis, Queues, Distributed APIs)  
> **Core Constraint:** 100% Monochrome (Paper & Ink), Zero AI Slop (No purple/indigo gradients, no floating blobs, no decorative emojis, no fake metrics)

---

## 1. Visual DNA & Design Philosophy

This design combines the structural precision of an **Engineering Blueprint / Technical Schematic** with the typographic authority of **Swiss International Typographic Style**.

### Core Tenets
1. **Form Follows Architecture:** UI components mirror clean backend engineering—structured data tables, changelog rails, terminal prompts, and monospace metadata tags.
2. **Monochrome Hierarchy:** Depth is created through **scale, weight, contrast, and spacing**, never color. Light mode is pure paper (`#ffffff` / `#fafafa`), dark mode is deep carbon (`#0a0a0a` / `#111111`).
3. **Tactile Blueprint Details:** Subtle technical marks (`+` crosshair intersections, corner crop marks `⌜ ⌝`, monospace system telemetry, and hairline rules `1px solid var(--line)`).
4. **Content Authenticity:** Numbers are real and sourced directly from production experience (`~3M lead records`, `250+ marketing agencies`, `1,000+ assets`, `60% overhead reduction`).
5. **Zero Vanity Ballast:** No raw emojis, no glowing radial gradients, no generic multi-colored icon cards. Every visual element serves readability and technical credibility.

---

## 2. Token Architecture (CSS Custom Properties)

All styling relies strictly on semantic CSS variables defined in `src/style.css`. Components consume these variables directly without hardcoded utility colors.

### Light Mode (`:root`, Default)
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--canvas` | `#ffffff` | Primary page background (clean technical paper) |
| `--surface` | `#fafafa` | Card backdrops, subtle panels, alternating rows |
| `--surface-elevated` | `#f4f4f4` | Hover states, pill badges, code blocks |
| `--line` | `#e5e5e5` | Crisp 1px structural hairline borders |
| `--line-strong` | `#a3a3a3` | Emphasized dividers, hover borders, active rules |
| `--ink` | `#0a0a0a` | Primary headlines, bold labels, high-contrast text |
| `--ink-2` | `#4a4a4a` | Body paragraphs, secondary metadata, readable descriptions |
| `--ink-3` | `#737373` | Monospace timestamps, section numbers, system annotations |
| `--accent-invert` | `#0a0a0a` | High-contrast inversion block background |
| `--accent-invert-text` | `#ffffff` | Text inside inverted high-contrast block |

### Dark Mode (`html.dark`, `[data-theme='dark']`)
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--canvas` | `#0a0a0a` | Deep carbon canvas |
| `--surface` | `#121212` | Elevated cards, technical panels |
| `--surface-elevated` | `#1a1a1a` | Hover states, code blocks |
| `--line` | `#262626` | 1px subtle hairline borders |
| `--line-strong` | `#525252` | Emphasized borders, hover states |
| `--ink` | `#f5f5f5` | Primary text |
| `--ink-2` | `#a3a3a3` | Secondary text |
| `--ink-3` | `#737373` | Monospace metadata and annotations |
| `--accent-invert` | `#ffffff` | High-contrast inversion block background |
| `--accent-invert-text` | `#0a0a0a` | Text inside inverted block |

---

## 3. Typography Rules

### Font Families
1. **Display & Body (`--font-sans`):** `Inter`, system-ui, sans-serif
   - Headings: `font-weight: 700 / 600`, tight letter-spacing (`-0.03em`), high optical density.
   - Body text: `font-weight: 400`, `line-height: 1.65`, maximum line length `65ch` (`max-w-prose`) to avoid cognitive fatigue.
2. **Technical Telemetry & Code (`--font-mono`):** `JetBrains Mono`, monospace
   - Numbers, timestamps, index indicators (`01 // EXPERIENCE`), system annotations, file paths, and terminal prompts.
   - Always enabled with `font-variant-numeric: tabular-nums;`.

### Typographic Scale
- **Display Hero Headline:** `clamp(2.75rem, 7vw, 5.5rem)` | `leading-[0.98]` | `-0.035em`
- **Section Heading (H2):** `clamp(1.5rem, 3.5vw, 2.25rem)` | `leading-tight` | `-0.025em`
- **Sub-Project Title (H3):** `1.125rem` – `1.25rem` (18–20px) | `font-semibold`
- **Body Text:** `0.9375rem` – `1rem` (15–16px) | `leading-relaxed`
- **System Telemetry / Mono Badges:** `0.75rem` – `0.8125rem` (12–13px) | `font-mono`

---

## 4. Layout & Blueprint Micro-Geometry

### Grid and Section Cadence
- **Container Width:** `max-w-5xl` (1024px) centered with `px-6 sm:px-8`.
- **Vertical Spacing Rhythm:** Standard `py-20 sm:py-28` between major sections.
- **Section Header Pattern:**
  - Monospace numeral prefix (`01 //`, `02 //`, `03 //`).
  - Section title in uppercase sans-serif with subtle trailing technical rule.
  - Optional right-aligned system coordinate / status badge.

### Blueprint Accents
- **Crosshair Intersections (`+`):** Positioned at borders or key grid junctions to evoke CAD schematics.
- **Technical Brackets (`[ ... ]`):** Surrounding metadata tags, locations, and status chips.
- **Changelog Vertical Rail:** Continuous 1px border connecting timeline items, branching with subtle tree indicators.

---

## 5. Section-by-Section Specifications

### Section 00: Navigation (`SiteHeader.vue`)
- Minimalist sticky bar with 1px border bottom.
- Monogram / Name on the left (`Agies Wahyudi`).
- Quick navigation links (`Experience`, `Work`, `Skills`, `Contact`) with subtle hover underline.
- Actions: **Theme Switcher** (☀️/🌙 with 16px Lucide stroke) + **Resume Button** (`btn btn-secondary`).

### Section 01: Hero (`HeroSection.vue`)
- **Status Eyebrow:** Monospace live indicator dot + `STATUS: BUILDING HIGH-THROUGHPUT PIPELINES @ ZOVA`.
- **Giant Typographic Headline:** `Ramadhan Agies Ananda Wahyudi` scaled dynamically with CSS clamp.
- **Role & Technical Identity:** `Backend-focused Software Engineer & API Architect`.
- **System Specs Grid / Telemetry:** Monospace quick-spec table:
  - `CORE_STACK // Laravel · MySQL · Redis · Queues · Vue.js`
  - `SCALE // ~3M Leads DB · 250+ Agencies`
  - `BASE // South Tangerang, Indonesia [UTC+7]`
- **Primary Action Group:** Email CTA button (`btn btn-primary`) + GitHub & LinkedIn links with external arrows.

### Section 02: About & Technical Dossier (`AboutSection.vue`)
- Two-column technical layout:
  - Left: Portrait photo in clean 3:4 aspect ratio with 1px hairline border, technical index label (`FIG. 01 // PROFILE`), without filter layer (authentic natural color).
  - Right: Brief engineering background, real impact statement, and spoken languages.

### Section 03: Experience as Engineering Log (`ExperienceSection.vue`)
- Organized like a production changelog / systems ledger:
  - Left Column (Desktop): Monospace dates (`2024.02 — PRESENT`), company name, location.
  - Right Column: Role title, followed by **distinct sub-project branches** (`exactmatchmarketing.com` and `exactmatch.io`) with separate live links and bold lead-in bullet points.

### Section 04: Selected Work (`WorkSection.vue`)
- Asymmetric case-study architecture:
  - High-res color screenshots (the only color on the page, highlighting actual production work).
  - Technical header with project name, live URL link, client/organization, and architectural tags (`Laravel`, `Redis`, `Queues`, `Simpli.fi API`).
  - Bulleted delivery points focusing on challenges, architecture, and business impact.

### Section 05: Skills & Architecture Matrix (`SkillsSection.vue`)
- Replaces generic pill clouds with a structured **Systems & Technologies Matrix**:
  - Two-column tabular layout categorizing `Languages`, `Backend Architecture`, `Databases & Caching`, `Frontend Engineering`, `Developer Tooling`, and `AI-Assisted Development`.

### Section 06: Beyond the CV (`BeyondCv.vue`)
- Rendered as an interactive developer console / supplementary ledger:
  - `$ agies --toolbox` : Secondary technologies and utilities (Node.js, Express, MongoDB, Livewire, Filament, N8N).
  - `$ agies --learning` : Topics in progress tied to production engineering challenges.

### Section 07: Education (`EducationSection.vue`)
- Compact tabular ledger detailing formal degrees and vocational software engineering background.

### Section 08: Inverted Contrast Contact & Footer (`ContactSection.vue` & `SiteFooter.vue`)
- **The Inverted Visual Moment:** Full-width dark surface in light mode (and high-contrast elevated surface in dark mode) creating a dramatic, memorable conclusion.
- **Giant Interactive Contact Headline:** Clickable email address with 1-click clipboard copy feature and visual "COPIED" notification.
- Direct links to GitHub, LinkedIn, and Instagram.

---

## 6. Interaction & Micro-Animation Standards

1. **Duration:** All transitions $\le 180\text{ms}$ with `cubic-bezier(0.23, 1, 0.32, 1)`.
2. **Tactile Feedback:** Buttons scale to `0.97` on `:active` with instant response.
3. **Accessibility:** Visible `focus-visible: 2px solid var(--ink)` on all interactive controls.
4. **Reduced Motion:** All decorative animations disabled gracefully under `@media (prefers-reduced-motion: reduce)`.
