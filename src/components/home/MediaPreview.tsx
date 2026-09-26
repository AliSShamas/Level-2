'use client';

import {useState} from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  FileText,
  Mic2,
  Play
} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import {mediaItems} from '@/data/media';
import type {MediaType} from '@/types/media';

import styles from './MediaPreview.module.css';

type Filter = 'all' | MediaType;

const filters: Filter[] = [
  'all',
  'podcast',
  'article',
  'video'
];

const mediaIcons = {
  article: FileText,
  podcast: Mic2,
  video: Play
};

export default function MediaPreview() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>('all');

  const t = useTranslations('HomePage.mediaPreview');

  const filteredItems =
    activeFilter === 'all'
      ? mediaItems
      : mediaItems.filter(
          (item) => item.type === activeFilter
        );

  return (
    <section data-reveal-group className="bg-stone-100 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            {t('eyebrow')}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {t('title')}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t('description')}
          </p>
        </div>

        <div data-reveal className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const active = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2.5 font-medium transition-[background-color,border-color,color,box-shadow] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 ${
                    active
                      ? 'border-green-700 bg-green-700 text-white hover:bg-green-800 focus-visible:bg-green-800'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-green-700 hover:bg-green-50 hover:text-green-700 focus-visible:border-green-700 focus-visible:bg-green-50 focus-visible:text-green-700'
                  }`}
                >
                  {t(filter)}
                </button>
              );
            })}
          </div>

          <Link
            href="/media"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-green-300 bg-green-100 px-6 py-3 font-semibold text-green-900 shadow-sm transition-[background-color,border-color,box-shadow] duration-200 ease-out hover:border-green-400 hover:bg-green-200 hover:shadow-md focus-visible:border-green-400 focus-visible:bg-green-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
          >
            {t('viewAll')}
            <ArrowUpRight aria-hidden="true" className="size-5 rtl:-rotate-90" />
          </Link>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {filteredItems.map((item) => {
            const Icon = mediaIcons[item.type];

            return (
              <article
                data-reveal
                key={item.slug}
                className={styles.item}
              >
                <Link
                  href="/media"
                  aria-labelledby={`media-${item.slug}`}
                  className={styles.card}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-stone-200">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 96px) / 3), 410px"
                      className="object-cover"
                    />
                    <div className="absolute start-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-green-800 shadow-sm">
                      <Icon aria-hidden="true" className="size-4" />
                      {t(item.type)}
                    </div>
                  </div>

                  <div className="p-6 lg:p-7">
                    <h3 id={`media-${item.slug}`} className="text-2xl font-semibold tracking-tight text-slate-900">
                      {t(`${item.translationKey}.title`)}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {t(`${item.translationKey}.excerpt`)}
                    </p>

                    <div className={styles.action}>
                      <div className={styles.actionInner}>
                        <span className={styles.button}>
                          {t('explore')}
                          <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 rtl:-rotate-90" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
