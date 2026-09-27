# How the Training page works

## The file map

- `src/app/[locale]/training/page.tsx` assembles the five sections.
- `src/components/Training/` contains those sections and their shared CSS module.
- `src/data/training-programs.ts` stores program IDs, URL slugs, images, and display order.
- `messages/en.json` and `messages/ar.json` store the readable text under `TrainingPage`.
- `src/lib/training-catalog.ts` contains the search and pagination functions.
- `src/app/[locale]/training/[slug]/page.tsx` is the reusable program detail page.

## Why separate data and translations?

A program has one identity, such as `communication`, regardless of language. Its URL slug and image are shared, while its title, short description, full overview, and image description are translated. The ID connects the data file to `TrainingPage.programs.communication` in each message file.

Seven programs are small enough to store directly in the project. There is no database or search service to set up. Editing these files requires rebuilding/deploying the site. A CMS could replace this storage later if non-developers need to edit programs.

## Search and pagination

`ProgramAreas.tsx` starts with `'use client'` because it responds to typing and clicking. `useState` remembers the search text and selected page while the component is open. The other sections do not need interactive state.

Each render follows this order:

1. Attach the current language's title and excerpt to each program.
2. Search **all seven** programs by title and excerpt.
3. Take six matching programs for the selected page.
4. Render those cards and the page controls.

Searching ignores capitalization, accents, Arabic vowel marks, tatweel, and common alef/yaa variations. Every word typed must appear somewhere in the title or excerpt. This is simple text matching, not AI search. It searches the displayed language, so Arabic visitors should enter Arabic terms.

For page 1, `slice(0, 6)` returns the first six items. Page 2 uses `slice(6, 12)` and currently returns Time and Life Management. Page counts come from the result count rather than being hard-coded. Typing resets the page to 1; otherwise a visitor could remain on page 2 when only one result exists. Empty results have a clear reset action.

Search and page selection are local React state: refreshing, leaving the page, or switching language resets them. They are not saved in the URL or browser storage.

## One template, seven detail pages

The folder `[slug]` is a dynamic route. For `/en/training/communication-that-connects`, Next.js passes `communication-that-connects` as the slug. The page finds that program, loads its translated content, and renders the shared layout. Unknown slugs return a 404.

In this Next.js version, route `params` is a Promise, so the page uses `await params`. `generateStaticParams` supplies the seven slugs; combined with the parent locale routes, the site can build all fourteen English/Arabic detail pages. You do not copy a page component seven times.

Enquire Now links to the existing homepage contact section. This change does not add a form submission backend.

## Add or edit a program

1. Put its image in `public/images/training/`.
2. Add an entry to `training-programs.ts` with a unique ID, slug, and `/images/training/...` path. Array order controls card order.
3. Add that same ID under `TrainingPage.programs` in **both** message files. Include `title`, `excerpt`, `overview`, and `imageAlt`.
4. Run `npm run lint` and `npm run build`.
5. Check both languages, search, pagination, the detail link, and a narrow mobile screen.

An eighth program automatically joins page 2. A thirteenth creates page 3. Avoid changing published slugs casually: old links would need redirects.

## Styling and accessibility

The CSS module scopes the warm orange headings and blue buttons to Training. Desktop cards reveal their action on hover or keyboard focus; touch devices show the action without requiring hover. The entire card is one link. Layouts stack on mobile, and logical CSS properties let Arabic flow right to left. Reduced-motion preferences disable card transitions.

Program copy is editable draft content. Review it before publishing. Generated images and their exact prompts are recorded in `training-image-prompts.md`.
