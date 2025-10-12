# Personal Portfolio Design Guidelines

## Design Approach: Reference-Based (Creative Portfolio Pattern)

**Inspiration Sources**: Linear's typography precision + Stripe's color restraint + Behance's project showcase patterns
**Philosophy**: Bold, developer-first aesthetic with creative asymmetry and rich data visualization

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 12 8% 6% (deep charcoal)
- Surface: 12 6% 12% (elevated panels)
- Primary: 210 100% 66% (vibrant blue)
- Accent: 142 76% 56% (success green for metrics/stats)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Light Mode**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 56%
- Accent: 142 70% 45%
- Text Primary: 0 0% 12%
- Text Secondary: 0 0% 40%

### B. Typography

**Font Stack**: 
- Headings: 'Inter' (600-700 weight) - technical, modern
- Body: 'Inter' (400-500 weight)
- Code/Metrics: 'JetBrains Mono' (monospace for data displays)

**Scale**:
- Hero: text-6xl to text-7xl (bold, statement-making)
- Section Headers: text-4xl to text-5xl
- Subsections: text-2xl to text-3xl
- Body: text-base to text-lg
- Captions/Meta: text-sm

### C. Layout System

**Spacing Primitives**: 4, 8, 12, 16, 24 (p-4, gap-8, my-12, py-16, space-y-24)

**Container Strategy**:
- Page wrapper: max-w-7xl mx-auto px-6
- Content sections: max-w-6xl
- Text content: max-w-3xl

**Section Padding**: py-16 (mobile) to py-24 (desktop)

## Component Library

### Hero Section - Asymmetric Split Layout
- **NOT a centered hero** - use 60/40 split layout
- Left: Large typographic introduction with animated gradient text effect on name
- Right: Bento-grid style metrics dashboard showing live GitHub stats, project count, years of experience
- Include subtle particle/grid background animation
- CTA buttons with glass-morphism effect over subtle gradient

### Navigation
- Sticky header with blur backdrop
- Logo/name left, navigation center, social icons right
- Mobile: Slide-in menu with project thumbnails

### About Section - Two-Column Layout
- Left column: Professional headshot with subtle border gradient
- Right column: Bio text with skill tags (pill-shaped, hover effects)
- Include interactive timeline of career milestones below

### Projects Showcase - Masonry Grid
- **3-column grid (desktop), 2-column (tablet), 1-column (mobile)**
- Project cards with: Large preview image, title, tech stack tags, brief description
- Hover: Card elevates, overlay reveals "View Project" and GitHub link
- Filter tabs above grid (All, Web Apps, Open Source, Experiments)

### Skills & Metrics Dashboard
- **4-column grid of stat cards** showing: Total projects, GitHub contributions, Technologies mastered, Years of experience
- Use Chart.js or Recharts for live contribution graph
- Animated counter numbers on scroll into view
- Tech stack displayed as icon grid with tooltips

### Experience/Resume Section
- Timeline layout with company logos
- Each entry: Company, role, duration, key achievements (bullet points)
- Expandable details on click
- Download resume button (prominent, primary color)

### Contact Section - Split Layout
- **Two-column**: Left has contact form (name, email, message), Right has social links grid and availability status indicator
- Form inputs with subtle focus states and validation
- Social links: GitHub, LinkedIn, Twitter, Email - large icon buttons with hover color shift
- Include "Currently available for work" status badge

### Footer
- Three-column grid: Quick links, Recent projects preview, Newsletter signup
- Bottom bar: Copyright, built with tech stack mention
- Subtle border-top separator

## Images

**Hero Section**: Full-bleed gradient background (abstract geometric pattern or code-inspired visualization) - NOT a photo
**About Section**: Professional headshot - circular frame with gradient border
**Project Cards**: Project screenshots/mockups - 16:9 aspect ratio, rounded corners
**Background Accents**: Subtle dot grid patterns on sections for texture

## Interactions & Motion

- Smooth scroll behavior with section snap points
- Card hover transforms (translateY, shadow increase)
- Metric counter animations on viewport entry
- Subtle parallax on hero background
- Page transition fade effects (150ms duration)
- Button ripple effects on click

## Accessibility Notes

- All interactive elements minimum 44x44px touch targets
- Focus indicators with 2px offset ring in primary color
- Dark mode toggle in header (sun/moon icon)
- Prefers-reduced-motion: disable animations
- Semantic HTML throughout (section, article, nav tags)
- ARIA labels on icon-only buttons