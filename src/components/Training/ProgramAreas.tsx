'use client';

import {useRef, useState} from 'react';
import Image from 'next/image';
import {ArrowUpRight, ChevronLeft, ChevronRight, Search, X} from 'lucide-react';
import {useFormatter, useLocale, useTranslations} from 'next-intl';

import {trainingPrograms} from '@/data/training-programs';
import {Link} from '@/i18n/navigation';
import {filterTrainingPrograms, paginateTrainingPrograms} from '@/lib/training-catalog';

import styles from './Training.module.css';

export default function ProgramAreas() {
  const t = useTranslations('TrainingPage');
  const format = useFormatter();
  const locale = useLocale();
  // Explicit digits prevent server/browser Intl defaults from disagreeing in Arabic.
  const numberOptions = {numberingSystem: locale === 'ar' ? 'arab' : 'latn'};
  const [query, setQuery] = useState('');
  const [requestedPage, setRequestedPage] = useState(1);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Translate BEFORE searching, so visitors search the language they are reading.
  const programs = trainingPrograms.map((program) => ({
    ...program,
    title: t(`programs.${program.id}.title`),
    excerpt: t(`programs.${program.id}.excerpt`)
  }));
  const filteredPrograms = filterTrainingPrograms(programs, query);
  // Filter the whole catalog first, then take the current page of those results.
  const {items, page, pageCount, from, to} = paginateTrainingPrograms(filteredPrograms, requestedPage);

  function updateSearch(value: string) {
    setQuery(value);
    setRequestedPage(1);
  }

  function changePage(nextPage: number) {
    setRequestedPage(nextPage);
    headingRef.current?.focus({preventScroll: true});
    headingRef.current?.scrollIntoView({
      block: 'start',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  }

  function clearSearch() {
    updateSearch('');
    searchRef.current?.focus();
  }

  return (
    <section id="program-areas" className={`${styles.softSection} scroll-mt-28 px-6 py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h2 ref={headingRef} tabIndex={-1} className={`${styles.blueHeading} scroll-mt-28 text-3xl font-semibold tracking-tight focus:outline-none md:text-4xl`}>
              {t('catalog.title')}
            </h2>
            <p className="mt-5 text-base leading-8 md:text-lg">
              {t.rich('catalog.description', {
                strong: (chunks) => <strong className="font-semibold text-slate-700">{chunks}</strong>
              })}
            </p>
          </div>

          <div role="search" className="w-full lg:max-w-xs lg:shrink-0">
            <label htmlFor="training-search" className="sr-only">{t('catalog.searchLabel')}</label>
            <div className="relative">
              <Search aria-hidden="true" className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <input ref={searchRef} id="training-search" type="search" value={query}
                onChange={(event) => updateSearch(event.target.value)}
                placeholder={t('catalog.searchPlaceholder')} aria-controls="training-program-results"
                className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pe-12 ps-12 text-start text-slate-800 outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-700/15 [&::-webkit-search-cancel-button]:hidden" />
              {query && (
                <button type="button" onClick={clearSearch} aria-label={t('catalog.clearSearch')}
                  className="absolute end-1 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-700">
                  <X aria-hidden="true" className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <p role="status" aria-live="polite" aria-atomic="true" className="mt-6 text-sm text-slate-500">
          {filteredPrograms.length
            ? t('catalog.results', {from: format.number(from, numberOptions), to: format.number(to, numberOptions), total: format.number(filteredPrograms.length, numberOptions)})
            : t('catalog.noResults')}
        </p>

        <div id="training-program-results">
          {items.length ? (
            <div className="mt-8 grid items-start gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {items.map((program) => (
                <article key={program.id} className={styles.programSlot}>
                  <Link href={`/training/${program.slug}`} aria-labelledby={`program-${program.id}`} className={styles.programCard}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-stone-200">
                      <Image src={program.image} alt={t(`programs.${program.id}.imageAlt`)} fill
                        sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 72px) / 2), (max-width: 1328px) calc((100vw - 96px) / 3), 411px"
                        className="object-cover" />
                    </div>
                    <div className="p-5 lg:p-6">
                      <h3 id={`program-${program.id}`} className={`${styles.blueHeading} text-xl font-semibold leading-7`}>{program.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{program.excerpt}</p>
                      <div className={styles.programAction}>
                        <div className={styles.actionInner}>
                          <span className={styles.programButton}>
                            {t('catalog.moreInfo')}
                            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 rtl:-rotate-90" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-14 text-center">
              <h3 className={`${styles.blueHeading} text-xl font-semibold`}>{t('catalog.emptyTitle')}</h3>
              <p className="mt-3 leading-7">{t('catalog.emptyDescription')}</p>
              <button type="button" onClick={clearSearch} className={`${styles.button} mt-6`}>{t('catalog.reset')}</button>
            </div>
          )}
        </div>

        {pageCount > 1 && (
          <nav aria-label={t('catalog.paginationLabel')} className={`${styles.pagination} mt-10`}>
            <button type="button" disabled={page === 1} onClick={() => changePage(page - 1)} aria-label={t('catalog.previous')} aria-controls="training-program-results">
              <ChevronLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
            </button>
            {Array.from({length: pageCount}, (_, index) => index + 1).map((number) => (
              <button key={number} type="button" onClick={() => changePage(number)} aria-label={t('catalog.page', {page: number})}
                aria-current={page === number ? 'page' : undefined} aria-controls="training-program-results">
                {format.number(number, numberOptions)}
              </button>
            ))}
            <button type="button" disabled={page === pageCount} onClick={() => changePage(page + 1)} aria-label={t('catalog.next')} aria-controls="training-program-results">
              <ChevronRight aria-hidden="true" className="size-4 rtl:rotate-180" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
