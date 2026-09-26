# Frontend animation changes

## Saved starting point

Before editing, the working tree was clean at Git commit `3664066` (`feat: build initial home page sections`). All 46 tracked files were saved to:

`.backups/frontend-before-motion-20260925.zip`

The archive was checked against the tracked file list: no files were missing. Dependencies (`node_modules`), generated builds, and ignored local files are not included. The `.backups` folder is now ignored by Git.

## What changed

| Area | Behavior |
| --- | --- |
| Hero | Heading and description fade upward on entry, 120 ms apart. |
| Intro, About, Three Pillars, Media, footer | Content fades upward 24 px over 700 ms when it reaches 90% of the viewport height. Each item reveals once per page visit. |
| Cards in a row | Entrances start 100 ms apart; stacked mobile cards trigger independently as you scroll. |
| Media filters | Newly mounted cards get their own entrance; scroll positions refresh when filtering changes the page height. |
| Buttons and links | Explicit 200–300 ms color, shadow, opacity, and small movement transitions; arrows and media images respond to hover and keyboard focus. |
| Header | Existing shrinking behavior has specific transition properties and a subtle scrolled shadow. |
| Accessibility | Reduced-motion preference disables reveals, transitions, and smooth scrolling. Focusing a waiting reveal shows it immediately. Content stays visible without JavaScript and when printing. |

The existing Three Pillars card expansion, colors, button reveal, and touch behavior remain in `ThreePillars.module.css`. That stylesheet did not need changes.

## Code map

- `src/components/common/ScrollAnimations.tsx`: new shared GSAP/ScrollTrigger controller; handles cleanup, locale navigation, dynamic cards, and motion preferences.
- `src/app/[locale]/layout.tsx`: wraps the page and footer in that controller while retaining server-rendered content.
- `src/components/home/{Hero,IntroSection,AboutPreview,ThreePillars,MediaPreview}.tsx`: reveal markers and hover/focus styles.
- `src/components/common/{Header,HeaderFrame,NavigationMenu,SearchOverlay,LanguageSwitcher,SocialLinks,Footer,BackToTop}.tsx`: interaction transitions, footer reveal markers, and reduced-motion-aware back-to-top scrolling.
- `src/app/globals.css`: reduced-motion and print rules.
- `package.json` and `package-lock.json`: add `gsap` (locked to 3.15.0).
- `.gitignore` and `eslint.config.mjs`: keep local backups and verification artifacts out of commits and linting.

## GSAP and Tailwind explained

GSAP is a JavaScript animation library. Its [ScrollTrigger plugin](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) starts the section animations when the visitor scrolls to them. This implementation uses ordinary scrolling with short entrance animations.

Tailwind hover transitions are CSS. The transition utility chooses what changes; the duration utility chooses how long the change takes:

```tsx
className="transition-colors duration-300 ease-out hover:bg-green-800"
```

This changes the background color smoothly over 300 milliseconds. An exact custom duration uses [`duration-[350ms]`](https://tailwindcss.com/docs/transition-duration), rather than `transition[350]`.

To adjust scroll speed or movement, edit `duration: 0.7` and `y: 24` in `ScrollAnimations.tsx`. Add `data-reveal-group` to a content group and `data-reveal` to its nonnested reveal targets. Put hover transforms on a child, so they do not compete with the reveal transform.

## Reverting

Ask to **revert the frontend animation changes to the saved snapshot**. The original versions are available in both commit `3664066` and the ZIP above. Restore the changed files listed here, remove the new `ScrollAnimations.tsx` and this change note, and reconcile dependencies with the restored lockfile. If unrelated edits have happened since, preserve those and revert only the animation changes. Keep the ZIP until you are happy with the result.

`.backups/frontend-animation-manifest.json` records the changed paths and their post-change SHA-256 hashes, so later edits can be identified before reverting.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and both `/en` and `/ar` pages.
- `git diff --check`: passed.
- Headless Edge browser checks: desktop reveals, existing pillar expansion, keyboard focus, media filter changes, reduced motion on load and while browsing, instant reduced-motion back-to-top, Arabic mobile layout, touch-visible pillar actions, client-side language switching, and content visibility without JavaScript all passed. No JavaScript exceptions or console errors were recorded.

Local browser results and screenshots are saved in `.backups/` for review.
