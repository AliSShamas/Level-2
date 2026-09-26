# Visual polish trial

## Backup

Before these changes, all 49 current tracked and untracked project files (excluding ignored dependencies/builds/backups) were saved and verified in:

`.backups/before-visual-polish-20260925-122711.zip`

This snapshot includes the earlier GSAP animations, larger green header controls, and rounded navigation panel. Reverting this trial should preserve those earlier changes.

## Changes

- English typography: Manrope. Arabic typography: Noto Sans Arabic, with natural Arabic letter spacing. Loaded using `next/font/google`, which downloads fonts during build and serves them from the site.
- Header: reduced vertical padding and logo size, including its scrolled state.
- Three Pillars: equal-height cards, always-visible Explore actions, a 6px hover/focus lift and stronger shadow instead of changing card height. Existing pillar colors and hover color changes remain. Reduced motion disables the lift.
- Hero: translated Start a Conversation button, with responsive title sizes. It uses `/contact`, like the existing introductory CTA; the contact page is not implemented yet.
- Menu: quieter decorative ring; service arrows appear on hover or keyboard focus.

Changed files: `src/app/[locale]/layout.tsx`, `src/app/globals.css`, `src/components/common/Header.tsx`, `src/components/common/NavigationMenu.module.css`, `src/components/home/Hero.tsx`, `src/components/home/ThreePillars.module.css`, and `messages/{en,ar}.json`.

## Verification

Lint and production build passed. Browser checks passed in English and Arabic at 320, 390, 768, and 1440px: loaded fonts, compact header fit, translated hero links, equal card heights, stable layout on hover, menu arrow visibility, and reduced-motion behavior. No JavaScript exceptions were recorded. Screenshots are in `.backups/polish-*.png`.

To revert only this trial, restore the eight changed files above from the snapshot and remove this note, preserving any subsequent unrelated edits.
