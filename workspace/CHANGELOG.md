<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-07-20: Refined mobile circled header region parity in `src/sections/MobileCredentialPage/components/MobileHeader.tsx` by switching profile/badge to block image rendering, top-aligning cells, tightening gap spacing, and adding temporary `__ANIMA_DBG__ mobile-header-layout` metrics log.
- 2026-07-20: Fixed empty root render risk at `/` by replacing nested `<body>` wrapper with `<div>` in `src/App.tsx`, ensuring content mounts under `#app` reliably.
- 2026-07-20: Tuned mobile details section parity in `src/sections/MobileCredentialPage/components/MobileCredentialDetails.tsx` by adjusting intro block padding, title/label typographic rhythm, description line-height, and issuer text sizing to better match the source reference.
- 2026-07-20: Improved mobile CHST requirements icon alignment in `src/sections/MobileCredentialPage/components/MobileRequirements.tsx` by replacing inline/baseline icon rendering with `block mx-auto` and fixed icon-cell width for consistent centering.
- 2026-07-19: Centered white desktop icons in green CHST minimum-requirements boxes by updating `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` to use full-size flex-centered wrappers and block images instead of inline baseline flow.
- 2026-07-19: Removed temporary `__ANIMA_DBG__ profile-image-render` debug logging from `src/sections/DesktopCredentialPage/components/DesktopBackground.tsx` to reduce repeated dev-mode console noise after stability verification.
- 2026-07-17: Fixed desktop profile image/container mismatch by removing forced inline-baseline image rendering in `src/sections/DesktopCredentialPage/components/DesktopBackground.tsx`, updating image class usage plus `overflow-hidden` in `src/sections/DesktopCredentialPage/index.tsx`, and adding targeted `__ANIMA_DBG__` profile render logging.
- 2026-07-15: Updated certification number in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` from "CHST-23494" to "CHST-23261".
- 2026-07-15: Updated certified date in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` from "06/05/2026" to "07/17/2026" (including recertification cycle start).
- 2026-07-15: Updated location in `src/data/credentialContent.ts` from "Neenah, WI · United States" to "Mesa, AZ · United States".
- 2026-07-15: Updated credential holder name in `src/data/credentialContent.ts` from "Aaron Alan Arps" to "Anthony Phillips".
- 2026-07-15: Completed Step 5 interaction verification with live issue modal open/close wiring in `src/App.tsx`, `src/sections/DesktopCredentialPage/index.tsx`, `src/sections/DesktopCredentialPage/components/IssueLink.tsx`, and `src/components/IssueModal.tsx`.
- Added functional Show More/Show Less toggles in `src/sections/DesktopCredentialPage/components/Disclaimer.tsx` and `src/sections/MobileCredentialPage/components/MobileFooter.tsx`.
- Added functional expires tooltip toggles in `src/sections/DesktopCredentialPage/components/CredentialStatus.tsx` and `src/sections/MobileCredentialPage/components/MobileCredentialDetails.tsx`.
- Pattern reinforced: preserve generated class structure and add parity behavior via localized state and conditional visibility classes.
- 2026-07-15: Completed Step 4 responsive tuning by making mobile header background/badge prop-driven in `src/sections/MobileCredentialPage/components/MobileHeader.tsx`.
- Updated `src/sections/MobileCredentialPage/index.tsx` to pull status/background/badge values from `src/data/credentialContent.ts` for parity-safe responsive rendering.
- Updated `src/sections/DesktopCredentialPage/index.tsx` to use centralized `credentialContent.assets.footerBackgroundImage`.
- Pattern reinforced: preserve generated class structure and improve pixel parity via shared content wiring over hardcoded asset literals.
- 2026-07-15: Completed Step 3 section rebuild by moving visible text/links/assets for desktop+mobile into `src/data/credentialContent.ts`.
<!-- NEXT_ENTRY_HERE -->
</changelog>
