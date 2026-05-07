# PROMPT.md — Customer Support SaaS Website MVP

## IMPORTANT

You must follow this document strictly.

Build a complete, polished, production-quality MVP website for a modern customer support / help desk SaaS platform.

The website must be inspired by the visual design principles of Help Scout:
- calm and friendly SaaS aesthetic
- warm backgrounds
- premium editorial typography
- large whitespace
- soft rounded cards
- strong product storytelling
- clean product mockups
- subtle animations
- professional trust-building sections

Do NOT copy Help Scout directly.
Use it only as a design inspiration.

The final result must look like a real premium SaaS startup website, not a template.

---

## PROJECT GOAL

Create a multi-page marketing website for a customer support platform.

The product helps companies manage:
- customer support conversations
- shared inbox
- live chat
- AI assistant replies
- knowledge base
- ticketing
- team collaboration
- customer history
- analytics
- automation

The website must feel trustworthy, modern, friendly, clean, and conversion-focused.

---

## TECH STACK

Use:

- Next.js App Router
- TypeScript
- React
- Tailwind CSS OR SCSS Modules
- Framer Motion for animations
- Lucide React for icons
- next/image for optimized images
- next/font for fonts
- SEO metadata for every page

Do NOT add:
- real backend
- database
- authentication logic
- payment integration
- external paid services

Forms can be frontend-only with fake success states.

---

## DESIGN DIRECTION

The design must be inspired by Help Scout’s design philosophy:

### Core Feeling

The website should feel:

- calm
- premium
- human
- friendly
- trustworthy
- simple but rich
- polished
- spacious
- editorial
- modern SaaS

The main design idea:

“Customer support software should feel calm, clear, and human.”

Avoid noisy UI. Avoid generic startup gradients everywhere. Avoid overused glassmorphism.

---

## VISUAL STYLE

Use a warm minimal SaaS visual system.

### Background Colors

Use warm white and soft clay backgrounds:

- Main background: #FFFFFF
- Warm background: #F8F5F0
- Soft cream: #FAF7F2
- Card background: #FFFFFF
- Muted section background: #F3EFE7

### Primary Colors

Use a strong modern blue as the main CTA color:

- Primary blue: #0B57D0
- Deep blue: #063B91
- Light blue: #EAF2FF

### Neutral Colors

- Main text: #101010
- Secondary text: #525252
- Muted text: #767676
- Border: #E5E1DA

### Accent Colors

Use soft pastel accents only where needed:

- Soft green: #DDF4E4
- Soft orange: #FFE4C2
- Soft purple: #ECE7FF
- Soft pink: #FDE2EA
- Soft yellow: #FFF3B8

Do not overuse colors. The website should still feel calm.

---

## TYPOGRAPHY

Use premium editorial typography.

Recommended font setup:

- Primary sans font: Inter, Geist, or similar
- Display font: use a strong modern display font if available via next/font/google
- Optional italic styling: use italic text for emotional highlights, quotes, labels, or editorial accents

Typography rules:

### Hero Title

- Very large
- Bold
- Tight line height
- Negative letter spacing
- Short and memorable

Example style:

font-size: clamp(48px, 8vw, 92px);
font-weight: 800;
line-height: 0.95;
letter-spacing: -0.05em;

### Section Titles

- 42px to 64px desktop
- 32px to 42px mobile
- font-weight: 700 or 800
- line-height: 1.05

### Body Text

- 17px to 20px
- line-height: 1.65
- color: secondary text

### Small Labels

Use small uppercase labels:

- font-size: 12px
- font-weight: 700
- letter-spacing: 0.12em
- text-transform: uppercase

Use italic text selectively, for example:

- “Support that feels human.”
- “Built for calm conversations.”
- “Less chaos, more clarity.”

---

## LOGO AND BRANDING

Create a beautiful fictional logo for the product.

Brand name suggestion:

Supportly

You may choose another strong SaaS-style name if it sounds better.

Logo requirements:

- clean wordmark
- simple icon
- icon can represent chat bubble, spark, inbox, or human connection
- must work in header and footer
- create favicon using the same brand icon
- favicon must be added properly in the project

The logo should feel premium, friendly, and modern.

---

## REQUIRED PAGES

Create a multi-page MVP website.

Required pages:

1. Home page
2. Features page
3. Pricing page
4. About page
5. Contact page
6. Privacy Policy page
7. Terms of Service page
8. Cookie Policy page
9. 404 Not Found page

Optional but recommended:

10. Integrations page
11. Demo page

Use App Router routing.

---

## GLOBAL LAYOUT

Create a reusable global layout with:

- Header
- Footer
- Cookie popup
- SEO metadata
- responsive container system

---

## HEADER REQUIREMENTS

Header must include:

- logo
- navigation links
- dropdown menu for features
- pricing link
- about link
- contact link
- primary CTA button
- mobile menu

Header design:

- sticky or semi-sticky
- white/warm translucent background
- subtle border bottom
- smooth dropdown animations
- clean hover states

Feature dropdown should include:

- Shared Inbox
- Live Chat
- AI Assistant
- Knowledge Base
- Automation
- Analytics

---

## FOOTER REQUIREMENTS

Footer must be rich and professional.

Include:

- logo
- short description
- product links
- company links
- resources links
- legal links
- social icons
- newsletter form
- copyright
- small trust statement

Footer should not feel empty.

---

## COOKIE POPUP

Add a cookie consent popup fixed at the bottom.

Requirements:

- appears on first visit
- bottom position
- warm card style
- short text
- Accept button
- Decline button
- link to Cookie Policy
- store choice in localStorage
- smooth enter/exit animation

---

## HOME PAGE STRUCTURE

The home page must be rich and visually full.

Required sections:

### 1. Hero Section

Include:

- large emotional headline
- italic accent text inside headline or subtitle
- clear subtitle
- primary CTA
- secondary CTA
- trust microcopy
- product mockup illustration

Example headline direction:

“Customer support that feels calm, fast, and human.”

Use product UI mockup:
- inbox dashboard
- chat widget
- AI reply suggestion
- customer profile card
- floating avatars
- soft decorative shapes

Use Framer Motion for entrance animations.

---

### 2. Logo Cloud / Trusted By

Include fictional company logos.

Use clean monochrome logo style.

Text example:

“Trusted by growing teams that care about every conversation.”

---

### 3. Problem Section

Explain the problem:

- support inboxes are messy
- customers wait too long
- teams lose context
- knowledge is scattered
- managers lack visibility

Use cards with icons.

---

### 4. Product Showcase

A large section showing the product interface.

Include:

- shared inbox mockup
- conversation thread
- internal notes
- AI suggested reply
- customer sidebar
- status pills
- team assignment

This should be visually strong.

---

### 5. Features Grid

Include at least 6 feature cards:

- Shared Inbox
- Live Chat
- AI Assistant
- Knowledge Base
- Automation Rules
- Customer Timeline
- Team Collaboration
- Analytics

Each card should have:
- icon
- title
- description
- small visual element

Use soft cards, pastel backgrounds, and hover animations.

---

### 6. AI Support Section

Dedicated section for AI features.

Include:

- AI draft replies
- conversation summaries
- knowledge base search
- tone adjustment
- auto-tagging
- smart routing

Design should feel futuristic but still calm.

---

### 7. Knowledge Base Section

Show a mock knowledge base layout:

- search bar
- article cards
- categories
- popular articles
- helpful rating

---

### 8. Live Chat Section

Show a beautiful live chat widget mockup.

Include:

- customer message
- agent reply
- quick replies
- typing indicator
- availability badge

---

### 9. Workflow / How It Works

Show 3 or 4 steps:

1. Connect your channels
2. Bring conversations into one inbox
3. Let AI help your team reply faster
4. Measure and improve support quality

Use timeline or horizontal cards.

---

### 10. Analytics Section

Show dashboard cards:

- response time
- resolved conversations
- CSAT
- team workload
- conversation volume

Use simple chart-like UI without real chart library unless needed.

---

### 11. Integrations Section

Show integrations with:

- Slack
- Shopify
- Stripe
- HubSpot
- Salesforce
- WhatsApp
- Gmail
- Zapier

Use icons or styled integration cards.

If real logos are not available, create tasteful placeholder icons.

---

### 12. Testimonials Section

Use believable fictional testimonials.

Avoid fake exaggerated claims.

Make them realistic and subtle.

Example:

“Supportly helped us reduce context switching and gave our team one calm place to work.”

Include:
- name
- role
- company
- avatar placeholder or generated image

---

### 13. Pricing Teaser

Show 3 pricing cards:

- Starter
- Growth
- Scale

Include CTA to Pricing page.

---

### 14. FAQ Section

Include common questions:

- Is this a real support platform?
- Can I connect email and chat?
- Does it include AI?
- Is there a free trial?
- Can I use it for ecommerce?
- Is my data secure?

---

### 15. Final CTA

Strong final conversion section.

Include:

- headline
- subtitle
- CTA button
- secondary contact/demo link

---

## FEATURES PAGE

Create a dedicated Features page.

Include:

- hero
- feature categories
- detailed sections for each major feature
- screenshots/mockups
- comparison blocks
- FAQ
- final CTA

Feature categories:

1. Inbox
2. Live Chat
3. AI Assistant
4. Knowledge Base
5. Automation
6. Analytics

Each category should have:
- title
- description
- bullet list
- visual card/mockup

---

## PRICING PAGE

Create a polished pricing page.

Include:

- hero
- monthly/yearly toggle
- 3 pricing plans
- feature comparison table
- FAQ
- enterprise CTA

Plans:

### Starter
For small teams

### Growth
For growing support teams

### Scale
For advanced operations

Pricing can be fictional.

Add:
- “Most popular” badge
- clean pricing cards
- subtle hover animation
- no real payment logic

---

## ABOUT PAGE

Create an About page with:

- mission section
- brand story
- values
- team section
- timeline
- final CTA

Tone:

Human, warm, trustworthy.

---

## CONTACT PAGE

Create a Contact page with:

- contact form
- demo request form
- company email placeholder
- office/location placeholder
- FAQ sidebar
- success state after submit

Form fields:

- name
- email
- company
- team size
- message

No backend required.

On submit:
- prevent default
- show success message

---

## LEGAL PAGES

Create:

- Privacy Policy
- Terms of Service
- Cookie Policy

These can use realistic placeholder legal text.

Must be:
- well formatted
- readable
- structured with headings
- SEO metadata included

---

## IMAGES AND ILLUSTRATIONS

Use relevant images where needed.

You may use external APIs for images, for example:

- Unsplash Source
- Pexels API placeholders
- DiceBear avatars
- UI Avatars
- placehold.co
- unavatar.io

Use images for:

- team avatars
- customer avatars
- editorial sections
- abstract support/teamwork illustrations
- product mockup decorations

Important:

- Use next/image where possible
- Add proper alt text
- Avoid broken image links
- If external image APIs require keys, use fallback placeholder images
- Do not rely on paid APIs

Images must feel relevant to:

- customer support
- SaaS teams
- help desk
- collaboration
- friendly business communication

---

## PRODUCT MOCKUPS

Create custom product mockups using HTML/CSS, not screenshots.

Mockups should include:

- inbox sidebar
- conversation list
- active conversation
- customer details card
- AI assistant card
- analytics widgets
- chat widget
- knowledge base search

The mockups should look polished and realistic.

Use:
- rounded cards
- soft shadows
- borders
- status pills
- avatars
- small icons
- layered floating panels

---

## ANIMATIONS

Use Framer Motion.

Animations should be subtle and premium.

Required animation types:

- fade up on section enter
- staggered cards
- soft hover lift
- dropdown animation
- mobile menu animation
- cookie popup animation
- hero mockup floating elements
- CTA hover transitions

Avoid:
- aggressive animations
- excessive motion
- slow animations
- distracting effects

Animation duration:

- 0.2s to 0.6s
- easeOut

---

## RESPONSIVE DESIGN

The website must be fully responsive.

Support:

- desktop
- tablet
- mobile

Mobile requirements:

- hamburger menu
- stacked sections
- readable hero
- no horizontal scroll
- product mockups must scale properly
- pricing cards stack cleanly
- forms are easy to use

---

## SEO REQUIREMENTS

Add proper SEO for every page.

Include:

- metadata title
- metadata description
- Open Graph metadata
- Twitter metadata
- canonical where appropriate
- semantic HTML
- clean heading hierarchy
- alt text for images
- accessible buttons and links

Home page SEO example:

Title:
Supportly — Calm Customer Support Software for Growing Teams

Description:
A modern customer support platform with shared inbox, live chat, AI replies, knowledge base, automation, and analytics.

---

## ACCESSIBILITY REQUIREMENTS

Implement:

- semantic HTML
- keyboard-accessible navigation
- visible focus states
- aria-labels where needed
- good contrast
- alt text
- form labels
- button states

---

## COMPONENT STRUCTURE

Create reusable components.

Suggested structure:

src/
app/
page.tsx
features/page.tsx
pricing/page.tsx
about/page.tsx
contact/page.tsx
privacy/page.tsx
terms/page.tsx
cookies/page.tsx
not-found.tsx
layout.tsx
globals.css

components/
layout/
Header.tsx
Footer.tsx
CookieBanner.tsx

    sections/
      Hero.tsx
      LogoCloud.tsx
      ProblemSection.tsx
      ProductShowcase.tsx
      FeatureGrid.tsx
      AiSection.tsx
      KnowledgeBaseSection.tsx
      LiveChatSection.tsx
      WorkflowSection.tsx
      AnalyticsSection.tsx
      IntegrationsSection.tsx
      TestimonialsSection.tsx
      PricingTeaser.tsx
      FAQSection.tsx
      FinalCTA.tsx

    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      SectionHeader.tsx
      ProductMockup.tsx
      ChatWidgetMockup.tsx
      InboxMockup.tsx
      AnalyticsMockup.tsx
      Logo.tsx

lib/
site-data.ts
metadata.ts

---

## CONTENT QUALITY

Write all website copy in polished English.

Tone:

- clear
- calm
- premium
- human
- conversion-focused
- not too corporate
- not too playful

Avoid fake unrealistic claims like:

- “Trusted by 1 million companies”
- “Guaranteed to 10x your support”
- “World’s best support tool”

Use believable, grounded copy.

---

## DESIGN DETAILS

Use:

- large rounded corners: 20px to 32px
- pill buttons
- warm background sections
- soft borders
- subtle shadows
- spacious layout
- editorial headings
- italic accents
- layered product cards
- floating UI elements
- calm pastel highlights

Avoid:

- generic blue gradient SaaS look
- dark cyberpunk sections
- random stock images everywhere
- cluttered layouts
- tiny typography
- inconsistent spacing

---

## CTA STRATEGY

Use clear CTAs:

Primary:
- Start free trial
- Book a demo

Secondary:
- See features
- View pricing
- Contact sales

No real signup logic required.

Buttons can link to:
- /contact
- /pricing
- /features

---

## FORMS

Create frontend-only forms:

Contact form:
- name
- email
- company
- team size
- message

Newsletter form:
- email

Demo form:
- name
- work email
- company
- support volume
- message

On submit:
- prevent page reload
- show friendly success state
- no backend

---

## PERFORMANCE REQUIREMENTS

Optimize:

- images
- component structure
- font loading
- metadata
- CSS
- responsive rendering

Avoid heavy dependencies.

Do not add unnecessary libraries.

---

## FINAL RESULT EXPECTATION

The final site must feel like a complete MVP, not a landing page draft.

It must include:

- multi-page structure
- full home page with many rich sections
- feature page
- pricing page
- about page
- contact page with forms
- legal pages
- cookie popup
- logo
- favicon
- SEO metadata
- responsive layout
- animations
- product mockups
- relevant illustrations/images
- polished UI system

The website should look close in quality to a modern premium SaaS website inspired by Help Scout, Intercom, Plain, Linear, and Stripe, but with its own identity.

---

## IMPLEMENTATION RULES

Before coding:

1. Inspect the existing project structure.
2. Do not delete important existing files unless necessary.
3. Create a clear component system.
4. Keep code clean and typed.
5. Use reusable data arrays for features, pricing, FAQs, testimonials, integrations.
6. Make sure the site builds successfully.
7. Run lint/build if available.
8. Fix all TypeScript and layout errors.
9. Ensure no broken links.
10. Ensure no broken images.

---

## ACCEPTANCE CHECKLIST

The task is complete only when:

- The site has all required pages
- Header and footer work globally
- Mobile menu works
- Cookie popup works
- Forms show success states
- SEO metadata exists
- Favicon exists
- Logo exists
- Design feels premium and Help Scout-inspired
- Home page has many rich sections
- Product mockups look realistic
- Animations are smooth
- Site is responsive
- Build passes without errors