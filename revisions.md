# Website Revisions — Feedback from Farshid

For: Dianze (developer)
Branch: `Farshid`

Please apply these changes across the whole site.

## 1. Name: Spine Twin, not Spine Suite
- The company and product name is **Spine Twin** everywhere.
- Remove every instance of "Spine Suite" / "SPINE SUITE", including page titles, meta descriptions, the navbar, the footer, the booking widget, the section headings ("The Spine Suite difference", "Spine Suite in numbers") and the email addresses (`@spinesuite.com`).

## 2. No software or tool names
- Do **not** mention OpenSim or FEBio anywhere, including version numbers (FEBio 4.2, OpenSim 4.5), the "22/22 FEBio Benchmarks" claim and the "FEBio Case Files" download.
- Use only generic terms: **musculoskeletal** (modeling or simulation) and **finite element** (analysis).

## 3. No model names
- Do **not** mention YOLO or YOLO v11 anywhere.
- Use only generic terms: **landmarking**, **machine learning**, **computer vision**.
- Do not name any specific models.

## 4. Home page: hero (top of the first page)
- Do not say "From One Lateral X-Ray". Say **"From X-Ray to Simulated Surgery"**.
- Keep it super short and to the point.
- Also apply this everywhere else: write "X-ray", not "one lateral X-ray" or "lateral radiographs" (the Pipeline section, the footer, the product page, the demo page).

## 5. Second section (Mission)
- Keep the layout and content; it looks good.
- Remove the word **"guesswork"** everywhere. Use **"biomechanical analysis"** instead.

## 6. People and advisory board
- Remove the **Clinical Advisory Board** completely.
- Remove **all people's names** except our own team.
- Keep the **universities only** (affiliations), with no individual names.

## 7. "Meet with us" page (third page: demo / booking)
- This page has a lot of "Spine Suite", "YOLO", "FEBio" and "OpenSim" references. Remove them entirely and follow points 1–3 above.

## Where to look
- Name: `app/layout.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/CalBookingWidget.tsx`, `components/ClinicalWorkbenchSection.tsx`, `components/MissionSection.tsx`, every `app/*/page.tsx`
- OpenSim / FEBio: `components/PipelineSection.tsx`, `components/ComparisonTable.tsx`, `components/FeatureCarouselSection.tsx`, `components/BookingSection.tsx`, `components/Footer.tsx`, `components/MissionSection.tsx`, `app/product/page.tsx`, `app/demo/page.tsx`
- YOLO: `components/PipelineSection.tsx`, `components/ClinicalWorkbenchSection.tsx`, `components/BookingSection.tsx`, `components/CalBookingWidget.tsx`, `app/product/page.tsx`, `app/demo/page.tsx`
- "One Lateral X-Ray": `components/Hero.tsx`, `components/PipelineSection.tsx`
- "Guesswork": `components/MissionSection.tsx`
- Advisory and names: `components/LogoTicker.tsx`, `app/about/page.tsx`, `app/team/`
