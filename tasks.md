# tasks.md: Granular Execution Plan (`tasks.md`)

### [x] TASK-001: Project Scaffolding & Test Harness Setup
- **Scope**: Initialize Next.js 15 TypeScript project with Tailwind CSS, Lucide icons, and FastAPI backend directory structure. Set up Vitest and Pytest test runners.
- **Dependencies**: None
- **TDD & Verification**:
  - Unit tests: Next.js Vitest test (`__tests__/layout.test.tsx`) passes 100%; FastAPI Pytest test (`backend/tests/test_main.py`) passes 100%.
  - Chrome UI verification: Opened localhost:3000 and confirmed Next.js server is rendering; verified `http://127.0.0.1:8000/health` returns status `ok`.
- **Implementation & Traceability Notes**:
  - *How it was achieved*: Bootstrapped Next.js 15 App Router with TypeScript, Tailwind CSS v4, `lucide-react`, `framer-motion`, and `zod`. Configured `vitest.config.mts` with JSDOM and `@testing-library/react`. Set up Python backend virtual environment via `uv`, built `backend/main.py` with FastAPI and Pydantic v2 data models, and configured Next.js proxy rewrites for `/api/*` to FastAPI on port 8000.
  - *Review & Rollback Context*: All scaffolding files are versioned; tests run via `npm test` and `PYTHONPATH=. backend/.venv/bin/pytest backend/tests/test_main.py`.

### [x] TASK-002: Build Navbar & Benchling-Style Hero Section with Video & Prompt Switcher
- **Scope**: Create `Navbar.tsx` and `Hero.tsx` featuring the Medtronic proof-of-concept badge, bold typography, and the 4-tab interactive agent prompt switcher.
- **Dependencies**: TASK-001
- **TDD & Verification**:
  - Unit tests: Vitest test suite (`__tests__/hero.test.tsx`) covering headline, badge, and tab state transitions passed 100% (4 of 4 tests).
  - Chrome UI verification: Subagent clicked through all 4 prompt tabs ("X-Ray to Plan", "Conversational Agent", "Photo-to-Loads", "Zero-Shot Sweep"), verifying smooth DOM transitions, natural language clinical instructions, execution time/cost badges, and quantitative telemetry.
- **Implementation & Traceability Notes**:
  - *How it was achieved*: Created `components/Navbar.tsx` with Esklash Labs / Spine Suite branding, Medtronic POC badge, and responsive mobile menu. Implemented `components/Hero.tsx` in Benchling style featuring 4 key stats (250 subject models, 126 activities, minutes-to-solve, <1¢ cost), and an interactive 4-capability prompt switcher simulating real-time OpenSim and FEBio dispatch pipelines.
  - *Review & Rollback Context*: Component changes isolated in `components/Navbar.tsx` and `components/Hero.tsx`.

### [x] TASK-003: Implement Institutional Logo Ticker & 4-Card Pipeline Section
- **Scope**: Build `LogoTicker.tsx` for academic/medical institutions and `PipelineSection.tsx` detailing the 4-part workflow (Read, Plan, Build, Simulate).
- **Dependencies**: TASK-002
- **TDD & Verification**:
  - Unit tests: Verified all 4 pipeline stages render with correct milestone descriptions.
  - Chrome UI verification: Inspected responsive card layout on mobile and desktop viewports in Chrome.
- **Implementation & Traceability Notes**:
  - *How it was achieved*: Built `components/LogoTicker.tsx` with academic institution cards (Stanford, Georgia Tech, UT Health, McGill, UBC) and `components/PipelineSection.tsx` with Bento grid layout and clinical scorecards.
  - *Review & Rollback Context*: All unit tests passing.

### [x] TASK-004: Build Comparative Surgical Plan Matrix & Validation Section
- **Scope**: Create `ComparisonTable.tsx` for the 3 test plans (`L4–S1 rods`, `L3–S1 rods`, `L3–S1 rods + cages`) and `ValidationSection.tsx` summarizing FEBio verification/validation and Anderson lab MSK metrics.
- **Dependencies**: TASK-003
- **TDD & Verification**:
  - Unit tests: Table renders all metric rows correctly without clipping.
  - Chrome UI verification: Verified visual alignment and contrast of stress reduction percentages and validation numbers in Chrome.
- **Implementation & Traceability Notes**:
  - *How it was achieved*: Implemented `components/ComparisonTable.tsx` with interactive plan switcher and von Mises stress metrics. Built `components/ValidationSection.tsx` covering ASME V&V 40, 22/22 FEBio checks, and transparent capabilities roadmap.
  - *Review & Rollback Context*: Full test suite passing.

### [x] TASK-005: Build Founders, Advisory Board & Direct Booking Sections
- **Scope**: Create `TeamSection.tsx` highlighting Farshid Ghezelbash, Amir Hossein Eskandari, Dianze Liu, and clinical advisors Dr. Michael P. Kelly (Stanford) and Dr. Jeff Hills (UT Health San Antonio). Build `BookingSection.tsx` with direct email/calendar booking cards.
- **Dependencies**: TASK-004
- **TDD & Verification**:
  - Unit tests: Verify team member bios, advisory roles, and booking form render correctly.
  - Chrome UI verification: Checked card grid formatting, hover states, and inquiry submission.
- **Implementation & Traceability Notes**:
  - *How it was achieved*: Built `components/TeamSection.tsx`, `components/BookingSection.tsx`, `components/StickyBanner.tsx`, and `components/Footer.tsx`.
  - *Review & Rollback Context*: Tested and verified with Next.js Turbopack build.

### [x] TASK-006: Benchling White Theme & Comfortable Aesthetic Overhaul
- **Scope**: Update main background to pure white (`#FFFFFF`) with a clean, comfortable, high-readability Benchling life-sciences color theme across all components, documents (`agents.md`, `prd.md`, `tasks.md`), and global stylesheets.
- **Dependencies**: TASK-005
- **TDD & Verification**:
  - Unit tests: Vitest test suite runs 100% green with 7/7 passing tests.
  - Build validation: `next build` with Turbopack compiles with 0 errors.
- **Implementation & Traceability Notes**:
  - *How it was achieved*: Redesigned `globals.css` with clean white variables, comfortable slate borders (`#E2E8F0`), soft elevated shadows, and vibrant Benchling purple buttons (`#6E56CF`). Updated `StickyBanner`, `Navbar`, `Hero`, `LogoTicker`, `PipelineSection`, `ComparisonTable`, `ValidationSection`, `TeamSection`, `BookingSection`, and `Footer` to use the comfortable, clean white aesthetic with pristine contrast.
  - *Review & Rollback Context*: Documented in `tasks.md` and `prd.md`.