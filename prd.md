# prd.md: SpineTwin Web Platform (`prd.md`)

## Project Overview & Core Objectives
* **Product Name**: SpineTwin by Esklash Labs (`esklashlabs.ai` / `spinetwin.tech`)
* **Mission**: A flight simulator for spine surgery: transforming an X-ray into a planned, physics-simulated surgical construct (finite element + musculoskeletal models) with an integrated AI agent.
* **Target Audience**: Spine surgeons (e.g., Stanford, UT Health San Antonio), medical device partners (e.g., Medtronic), biomechanics researchers, and investors.
* **Visual Identity**: Benchling-inspired modern life-sciences design system with crisp, pure white main background (`#FFFFFF`), comfortable soft slate surfaces (`#F8FAFC`), deep navy/slate typography (`#0F172A`), refined card borders (`#E2E8F0`), and Benchling electric purple (`#6E56CF`) CTAs for an aesthetically pleasing, comfortable clinical experience.
* **Core Objectives**:
  1. Showcase the 11-stage surgical planner and conversational Spine Agent through high-end Bento grids, interactive step-by-step stage previews, and embedded video.
  2. Highlight institutional pedigree (Georgia Tech, Stanford, Polytechnique, McGill, UBC) and transparent validation metrics.
  3. Provide frictionless conversion via direct team calendar/email booking for custom clinical case demos and data partnerships.

## System Architecture & Tech Stack
* **Frontend**: Next.js 15 (App Router), TypeScript (`strict: true`), Tailwind CSS, Framer Motion for buttery smooth scroll animations, and Lucide / Radix UI icons.
* **Backend**: Python 3.11+, FastAPI, Pydantic v2, and SMTP/Calendar webhook integrations for booking and contact form submissions.
* **Deployment**: GitHub Pages / Vercel (Frontend) + Render / AWS (FastAPI Backend).

---

## Page Structure & User Flows

### 0. Top Announcement Banner (`StickyBanner.tsx`)
* **Background**: Apple light gray (`bg-[#F5F5F7]`) with fine hairline border (`border-[#E5E5E7]`).
* **Content**: `Introducing Spine Agent 2.4: Autonomous multi-physics routing for surgical biomechanics.`
* **Actions**: Link to console in Apple blue (`#0071e3`) + Clinical Portal sign-in + FDA 21 CFR Part 11 status badge.

### 1. Navigation Bar (`Navbar.tsx`)
* **Logo**: ESKLASH LABS / SPINETWIN (with subtle medical tech badge).
* **Styling**: Clean frosted white glass (`bg-white/90 backdrop-blur-md`) with soft bottom border (`border-slate-200/80`).
* **Links**: Overview, The 11-Stage Workflow, The Spine Agent, Validation, The Team, Comparison.
* **Action**: Primary Benchling purple "Request Demo" CTA button linked to calendar booking.

### 2. Hero Section (`Hero.tsx`) - Benchling Style (Comfortable Light Palette)
* **Background**: Crisp white background with subtle ambient lavender/sky radial light meshes.
* **Headline**: `From X-Ray to Simulated Surgery` in bold typography.
* **Subheadline**: `An agent that runs finite element and musculoskeletal models of the patient. Built by biomechanics, medical imaging, and machine learning experts.`
* **CTAs**: `Request Clinical Demo` (Benchling purple button) | `Explore 11-Stage Pipeline` (clean glass button).
* **Interactive Prompt Switcher (Benchling style)**: Tabbed switcher letting visitors preview the four core agent capabilities:
  1. *X-Ray to Plan*: "Detect T1–L5 landmarks, compute GAP score, and optimize L3–S1 correction in 0.2s."
  2. *Conversational Agent*: "Simulate pre-op vs. planned L3–S1 fusion. What happens at the adjacent level?"
  3. *Photo-to-Loads*: "Analyze lifting photo (170 cm, 70 kg) → L5–S1: 2,319 N compression, 840 N shear."
  4. *Zero-Shot Sweep*: "Sweep ±5% PCSA, slack length, and gravity in musculoskeletal model."
* **Console Workbench**: Elevated white card with tabbed telemetry, clinical reasoning, and execution logs.

### 3. Institutional Pedigree Strip (`LogoTicker.tsx`)
* **Background**: Soft cool gray (`bg-slate-50/70 border-y border-slate-200/80`).
* **Copy**: `Backed by clinical research and academic excellence across:`
* **Cards**: Clean elevated white cards for Georgia Tech, Stanford Medicine, UT Health San Antonio, Polytechnique Montréal, McGill, UBC, IRSST, Torus Biomedical.

### 4. The 4-Card Pipeline ("How It Works" - Benchling Bento Grid) (`PipelineSection.tsx`)
* **Background**: Pure white (`bg-white border-t border-slate-200/80`).
* **Card 1: Read (Stages 1–5)**: Machine learning landmark detection of 17 vertebrae (T1–L5, 8 editable corners), automated GAP score, and sagittal parameters (`PI`, `PT`, `SS`, `LL`, `TK`, `SVA`).
* **Card 2: Plan (Stages 6–8)**: Rigid-body kinematic mechanism optimization (~3,800 candidate plans scored in 0.2s), cohort matching against 16,807 spines, and dual PJK risk assessment.
* **Card 3: Build (Stage 9)**: 42-spine statistical shape model (`±1.9 mm` fit), 6-DOF STP pedicle screw trajectories with cortical breach detection.
* **Card 4: Simulate (Stages 10–11)**: Side-by-side finite element stress (`3–8 min`) + musculoskeletal static optimization (`~40s`).

### 5. Multi-Plan Comparative Matrix (`ComparisonTable.tsx`)
* A clean, interactive white data table card comparing the three tested surgical plans on the test film:
  * `L4–S1 · Rods` vs. `L3–S1 · Rods` vs. `L3–S1 · Rods + Cages`
  * Metrics: Fused level motion drop (`-93%` to `-99.9%`), Rod peak stress & safety factor (`66 MPa [13x]` down to `34 MPa [25x]`), Adjacent level compression, and PJK risk scores.

### 6. Scientific Validation & Honest Status (`ValidationSection.tsx`)
* Clean summary cards on comfortable slate-50 background highlighting scientific rigor:
  * **Finite Element Verification & Validation**: Conforms to ASME V&V 40; 55/85 cadaver validation checks passed.
  * **Musculoskeletal Simulation Engine**: Anderson lab model (`r = 0.91` lumbar disc pressure across 5 in vivo studies, 250 Framingham subject-specific models).
  * **Honest Status**: Transparent breakdown of what works today vs. what is in development.

### 7. The Founders & Advisory Board (`TeamSection.tsx`)
* **Founders**: Farshid Ghezelbash, PhD; Amir Hossein Eskandari, PhD; Dianze Liu.
* **Advisory Board**: Michael P. Kelly, MD (Stanford University); Jeff Hills, MD (UT Health San Antonio).

### 8. Direct Booking & Contact Section (`BookingSection.tsx`)
* **Copy**: `Schedule a Clinical Review & Technical Demo`
* **Direct Calendar / Email Booking Cards**: Dianze Liu, Farshid Ghezelbash, PhD, and Amir Hossein Eskandari, PhD.
* **General Inquiries Form**: Name, Institution/Company, Role (Surgeon, Device Manufacturer, Researcher, Investor), Message, and Submit button connected to FastAPI backend.

### 9. Multi-Column Footer (`Footer.tsx`)
* Multi-column navigation links, ASME V&V 40 and FDA 21 CFR Part 11 compliance badges, and copyright.

---

## Non-Functional Requirements
* **Performance**: Sub-second initial page load, optimized Tailwind assets, responsive layout for mobile, tablet, and widescreen displays.
* **Accessibility**: High-contrast, comfortable light life-sciences mode conforming to WCAG AA guidelines with rich semantic HTML5 tags and aria-labels.
* **Code Quality**: Strict TypeScript types, modular component architecture, and clean FastAPI route handlers with Pydantic validation.