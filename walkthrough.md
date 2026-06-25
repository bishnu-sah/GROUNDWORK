# Groundwork Portfolio Site - Completion Walkthrough

We have successfully built and compiled a complete, pixel-perfect clone of the **Landing Page**, **Philosophy Page**, **Studio Page**, **Insights Page**, **Contact Page**, and **Inquire Page** for the Groundwork architecture portfolio.

---

## 1. Inquire Page Implementation Summary

The Inquire wizard page has been built with a step-by-step wizard layout matching the reference specs exactly:

* **[Step Indicator Progress Navigation](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/components/StepIndicator.tsx)**: Displays steps `01 PROJECT TYPE`, `02 DETAILS`, and `03 VISION`. Includes a bold layout for the active step, horizontal lines extending right, and greyed-out labels for inactive steps.
* **[Inquiry Wizard Layout](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/components/InquiryWizard.tsx)**: Handles wizard states and transitions:
  * **Step 1**: Presents three clickable project type cards (*New Home*, *Renovation*, *Interior Design*). Clicking a card activates a thick black border and persists the selection.
  * **Step 2**: Gathers contact details (*Name*, *Email*, *Phone*, *Location*, *Budget*, *Timeline*) in a clean 2-column input grid.
  * **Step 3**: Collects structural vision text, agreements, and support file upload parameters.
  * **Transitions**: Integrates Framer Motion sliding animations.
* **[Inquiry Sidebar](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/components/InquirySidebar.tsx)**: Displays the *Groundwork Approach* details on the right side (~30% grid block) with a portrait-ratio concrete grayscale image labeled *"STUDIO CONTEXT"* overlaid near the bottom.
* **[Inquiry Footer Actions](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/components/InquiryFooter.tsx)**: Manages bottom actions, containing a left-aligned exit/back button, and a right-aligned continue button that remains disabled (grey `#D6D0C8`) until inputs validate, swapping to black on activation.
* **[Inquire Footer Variant](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/components/Footer.tsx)**: Renders the custom 3-column layout mapping (GROUNDWORK/Description, CONNECT links, and STUDIO links) specifically on the `/inquire` route with the copyright aligned on the far right.

---

## 2. Multi-Page Navigation & Routing

* **Active Links**: The shared [Navbar](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/components/Navbar.tsx) dynamically evaluates path changes to highlight the active menu link with a thin underline block matching the reference styling.
* **Cross-Page Anchors**: Integrated route scroll behaviors in [App.tsx](file:///c:/Users/BISHNU%20SAH/OneDrive/Desktop/GroundWork/src/App.tsx) so that navigating back to landing sections (e.g. `/#portfolio`, `/#contact`) from external routes works correctly.
* **Production Build Verified**: Confirmed build completeness with `npm run build`.
