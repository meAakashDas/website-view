# RisePaisa — Engineering and Design Standards

## 1. Project Integrity
- Preserve the existing HTML, CSS, vanilla JavaScript, Express, and SQLite architecture.
- Never introduce a framework or dependency without a clear need.
- Inspect relevant existing code before changing anything.
- Make small, targeted changes instead of rewriting entire files.
- Never remove working features or modify unrelated pages.

## 2. Premium Design Direction
- Use Apple.com as inspiration for clarity, restraint, typography, spacing, and polished interactions.
- Do not copy Apple's branding, assets, or distinctive page designs.
- Maintain RisePaisa's own professional financial-education identity.
- Use a consistent design system with reusable CSS variables for colors, spacing, typography, borders, and shadows.
- Keep buttons, cards, navigation, forms, and page layouts consistent.
- Avoid unnecessary gradients, excessive cards, visual clutter, and decorative animations.
- Prioritize clear content hierarchy, generous whitespace, and readable typography.

## 3. Responsive Design
- Design mobile-first.
- Verify layouts on mobile, tablet, and desktop widths.
- Prevent horizontal overflow, overlapping elements, and clipped content.
- Ensure navigation, forms, calculators, and tables work on small screens.

## 4. Performance and Smoothness
- Minimize unnecessary JavaScript, dependencies, network requests, and DOM updates.
- Avoid expensive scroll handlers and unnecessary animations.
- Prefer CSS transitions for simple interactions.
- Respect prefers-reduced-motion.
- Optimize images and defer noncritical resources where appropriate.
- Avoid layout shifts and unnecessary re-rendering.

## 5. Bug Prevention
- Preserve existing financial calculator formulas and verify changes against known test cases.
- Protect SQLite data, database schemas, and existing API contracts.
- Handle loading, empty, invalid, and error states.
- Check browser console errors and failed network requests when possible.
- Validate inputs and handle unexpected values safely.
- Never claim a test passed unless it was actually executed.

## 6. Accessibility
- Use semantic HTML and correct heading hierarchy.
- Ensure keyboard navigation and visible focus states.
- Provide accessible labels for form controls.
- Maintain readable text and sufficient color contrast.

## 7. Mandatory Workflow
1. Understand the request and inspect only relevant files.
2. Identify affected components and potential regressions.
3. Make the smallest complete change.
4. Run relevant checks and tests.
5. Inspect the final changes for visual and functional regressions.
6. Report what changed, which tests passed, and any unresolved issues.

## 8. Token Efficiency
- Avoid repeatedly scanning the entire repository.
- Reuse existing components and utilities.
- Do not generate unnecessary documentation or duplicate code.
- Keep progress updates and final reports concise.
- Ask before destructive operations, broad rewrites, or database migrations.

## Definition of Done
A change is complete only when it meets the request, preserves existing functionality, follows the design system, and passes all applicable checks that can be executed.
