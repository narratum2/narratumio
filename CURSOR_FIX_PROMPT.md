# Cursor AI Prompt: Fix loader, navigation, strategic frequencies alignment, modals, and color mood switcher for narratumio

## Context

The new iteration of the Narratumio website (branch `codex/fix-loader-timing-and-visibility-issues`) introduces a full‑screen spinner loader with a 3‑second fallback timeout. On fast connections this spinner is still displayed, causing unnecessary wait time and violating UX guidelines that spinners should not appear for quick processes【306273984606426†L310-L341】. The live site uses a subtle top progress bar which feels smoother. The new version also hides the top navigation buttons; there are no anchor links to sections, which makes orientation difficult. Terms and privacy pop-ups are non‑functional, and "Strategic Frequencies" cards are misaligned on wide screens. Colour mood pickers are unlabeled circles and some colours break the design; their click area is too small and they lack accessibility.

## Tasks

1. **Loader design** – Replace the full‑screen spinner with a lightweight solution:
   - Use skeleton screens (placeholder content shapes) or a thin top progress bar. These reduce perceived waiting time and are recommended for quick processes【306273984606426†L347-L368】.
   - Only show a spinner when a network request legitimately takes longer than ~1 second.
   - Remove the hard‑coded 3‑second `setTimeout` fallback; instead hide the loader on the `load` or `DOMContentLoaded` events.
   - Ensure the loader is positioned at the top and doesn’t block interaction.

2. **Navigation** – Reintroduce a visible header navigation bar:
   - Add a sticky header containing anchor links to each page section (e.g., “Hero”, “Strategic Frequencies”, “Terms & Privacy”).
   - Add right‑side navigation items that reflect the sections; implement accessible skip links.
   - Remove unused navigation dots if they are not backed by markup.

3. **Terms & Privacy modals** – Fix the pop‑up links:
   - Ensure modal markup exists in HTML with an overlay and content container.
   - Add event listeners on Terms/Privacy links to open the correct modal; allow closing via a close button and the escape key.
   - Make sure the modals are accessible (focus trap, labelled, ARIA roles).

4. **Strategic Frequencies layout** – Align the cards/buttons:
   - Use CSS Flexbox or Grid to distribute cards evenly; set consistent gaps and margins.
   - Ensure responsiveness across devices by using `flex-wrap` or `grid-template-columns`.

5. **Colour mood switcher** – Improve usability and accessibility:
   - Replace generic coloured circles with labelled buttons or toggle switches (e.g., “Magenta”, “Cyan”, “Amber”).
   - Increase the clickable area and provide tooltips or visible labels.
   - Choose a restrained set of high‑contrast theme colours and ensure text remains readable (meet WCAG contrast ratios).
   - Persist the selected theme using `localStorage` so that the choice remains on refresh.

6. **Animations** – Simplify and respect user preferences:
   - Remove unnecessary timed animations and bouncing effects.
   - Use CSS transitions with short durations and support `prefers-reduced-motion` to minimise motion for sensitive users.
   - Avoid using long `setTimeout` calls to orchestrate animation sequences; rely on CSS keyframes or class toggles.

## Recommended AI tools

- **GitHub Copilot or GPT‑4** – Use these code‑generation models to refactor and implement the changes above. They can assist with rewriting event handlers, generating accessible HTML/CSS, and suggesting improved patterns.
- **LogRocket Galileo AI** – After deploying the changes, use this AI analytics tool to review user sessions, identify remaining UX pain points, and quantify improvements.
- **AI‑powered design tools (e.g., Figma AI plugin)** – Use these for generating colour palettes and micro‑interaction prototypes that align with your brand.

## Implementation workflow

1. Create a new branch (e.g., `fix-loader-nav-and-mood-switcher`) from `main`.
2. Apply the loader refactor across `index.html` and `script.js`; introduce skeleton screens or progress bar.
3. Rebuild the header navigation component and update the CSS.
4. Add proper modal markup and event handlers for Terms and Privacy.
5. Refactor the Strategic Frequencies section into a responsive grid/flex layout.
6. Implement the improved colour mood switcher component with labelled buttons.
7. Reduce animation timing and remove unnecessary JavaScript timeouts.
8. Test across browsers, screen sizes, and with assistive technology.
9. Open a pull request referencing this prompt and request review from the UX team.
