<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-07-20
- Mobile header parity/debug pass: updated `src/sections/MobileCredentialPage/components/MobileHeader.tsx` to use block-level profile/badge images (no inline/baseline flow), top-aligned table cells, and tighter inter-column gap for closer mobile reference alignment.
- Added minimal one-pass runtime diagnostic log `__ANIMA_DBG__ mobile-header-layout` in `MobileHeader` to capture profile/badge box metrics while investigating remaining mismatch.

## 2026-07-20
- Root render fix: updated `src/App.tsx` to replace a nested `<body>` route wrapper with a `<div>` so React can mount visible content under `#app` at `/` consistently.
- Pattern confirmed: never render `<html>/<body>` tags inside React route elements; use normal containers to avoid DOM normalization/mount anomalies.

## 2026-07-20
- Mobile details parity tuning: updated `src/sections/MobileCredentialPage/components/MobileCredentialDetails.tsx` intro block spacing/typography (horizontal padding, heading leading+tracking, description line-height, Issued By spacing, issuer name size) to better match reference proportions.
- Pattern confirmed: in this F2C mobile section, small parity drift is mainly typographic rhythm (line-height + micro-tracking) rather than structural layout.

## 2026-07-20
- Mobile parity adjustment: centered CHST minimum-requirements icons in `src/sections/MobileCredentialPage/components/MobileRequirements.tsx` by switching icon `<img>` to `block mx-auto` and giving icon cells fixed `w-9`.
- Pattern confirmed: table-cell icon drift on mobile is resolved by avoiding `inline align-baseline` and using block-level centering.

## 2026-07-19
- Centered desktop CHST minimum-requirements icons in `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` by making each icon wrapper `md:flex md:items-center md:justify-center md:w-full md:h-full` and rendering icons as `block`.
- Pattern confirmed: fixed-size icon cells in table layouts should use explicit centering containers instead of inline/baseline image flow.

## 2026-07-19
- Runtime debug cleanup: removed temporary `__ANIMA_DBG__ profile-image-render` console logging from `src/sections/DesktopCredentialPage/components/DesktopBackground.tsx` after confirming stable rendering.
- Pattern confirmed: keep diagnostic logs temporary and remove once layout/parity issues are resolved.

## 2026-07-17
- Debug fix for desktop profile image box mismatch: `src/sections/DesktopCredentialPage/components/DesktopBackground.tsx` now renders images as `block` (no forced inline/baseline).
- `src/sections/DesktopCredentialPage/index.tsx` removed inline/baseline classes from image usages and added `overflow-hidden` to the bordered profile container for exact box/image alignment.
- Pattern confirmed: avoid component-level `inline align-baseline` on fixed-size images when parent has border/shadow box constraints.

## 2026-07-15
- Step 5 verification pass: modal interactions and in-page disclosure behaviors are now live instead of static hidden placeholders.
- `src/App.tsx` now controls `IssueModal` open/close state via `DesktopCredentialPage` trigger.
- `Disclaimer`, `MobileFooter`, `CredentialStatus`, and `MobileCredentialDetails` now toggle Show More/Less and expires-note tooltip visibility with local state.
- Pattern confirmed: preserve generated visual classes and add behavior by minimal state wiring plus conditional class toggles.

## 2026-07-15
- Step 4 responsive tuning: `MobileHeader` now accepts `backgroundImageUrl` + `badgeImageUrl` props and renders those with inline background styles for stable mobile parity.
- `src/sections/MobileCredentialPage/index.tsx` now sources mobile header background, badge, and active status directly from `src/data/credentialContent.ts`.
- `src/sections/DesktopCredentialPage/index.tsx` now uses `credentialContent.assets.footerBackgroundImage` to keep desktop background asset centralized.
- Pattern confirmed: preserve generated class scaffolding and tune parity by replacing hardcoded assets/text with shared content props.

## 2026-07-15
- Step 3 section rebuild wired desktop/mobile details, requirements, and disclaimers to `src/data/credentialContent.ts` while preserving existing class-based layout.
- `CredentialCard` now composes `CredentialDescription` directly and passes badge URL to `CredentialBadge`, fixing parity flow and prop usage.
- Pattern confirmed: keep generated visual class structure stable, move all visible copy/links/assets to centralized constants for safer pixel-tuning passes.

## 2026-07-15
- Pixel-match clone foundation now centralizes reusable badge/person/link/asset data in `src/data/credentialContent.ts`.
- `DesktopCredentialPage/index.tsx` and `MobileCredentialPage/index.tsx` now pull person/asset/link values from shared content.
- `IssueLink` and `CredentialBadge` were made prop-driven for reuse across future parity passes.
</coder>
