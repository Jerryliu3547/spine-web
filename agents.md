# agents.md: Antigravity Coding Agent Constitution (`agents.md`)

## Design & Aesthetic Standards
* **Design Philosophy**: Modern Benchling life-sciences platform aesthetic featuring a clean, comfortable pure white main background (`#FFFFFF`), soothing slate neutrals (`#F8FAFC`, `#F1F5F9`), crisp deep slate typography (`#0F172A`, `#334155`), refined border definitions (`#E2E8F0`), and Benchling signature purple/indigo accents (`#6E56CF`, `#5B45E0`).
* **Visual Excellence**: Avoid harsh pure dark mode or unstyled default layouts. Ensure generous breathing room, comfortable reading contrast, elegant card elevations, subtle glowing highlights, and seamless responsive design across all viewports.

## Tech Stack Standards
* **Next.js & TypeScript**: Use App Router (`app/`), Server Components by default, add `'use client'` strictly for interactive tabs, modals, and form state. Validate all contact payloads with Zod.
* **Python Backend**: Use FastAPI, type hints everywhere, Pydantic v2 data models, and clean separation of concerns between routers and services.

## Test-Driven Development (TDD) Mandate
* Write unit tests (Vitest for Next.js, Pytest for FastAPI) covering happy paths, edge cases, and form validation before implementing components.
* Ensure 100% test pass rates before marking any task complete.

## Proactive Browser Verification (Chrome Testing)
* Always launch Chrome to visually verify layout, typography, responsive breakpoints, form interactions, and calendar link behaviors in the running application.

## Operational Rules
* Work sequentially through `tasks.md`.
* Log all implementation choices in the traceability block upon task completion.