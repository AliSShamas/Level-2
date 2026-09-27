export const PROGRAMS_PER_PAGE = 6;

// Make search forgiving: ignore case, accents, Arabic vowel marks/tatweel,
// and common alef/yaa variants. This changes search text, never the displayed copy.
export function normalizeSearchText(value: string) {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/ـ/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .toLowerCase()
    .trim();
}

export function filterTrainingPrograms<T extends {title: string; excerpt: string}>(
  programs: readonly T[],
  query: string
) {
  const words = normalizeSearchText(query).split(/\s+/).filter(Boolean);

  return programs.filter((program) => {
    const searchableText = normalizeSearchText(`${program.title} ${program.excerpt}`);
    return words.every((word) => searchableText.includes(word));
  });
}

export function paginateTrainingPrograms<T>(programs: readonly T[], requestedPage: number) {
  const pageCount = Math.ceil(programs.length / PROGRAMS_PER_PAGE);
  const safePage = Number.isFinite(requestedPage) ? Math.trunc(requestedPage) : 1;
  const page = Math.max(1, Math.min(safePage, pageCount || 1));
  const start = (page - 1) * PROGRAMS_PER_PAGE;

  return {
    page,
    pageCount,
    items: programs.slice(start, start + PROGRAMS_PER_PAGE),
    from: programs.length ? start + 1 : 0,
    to: Math.min(start + PROGRAMS_PER_PAGE, programs.length)
  };
}
