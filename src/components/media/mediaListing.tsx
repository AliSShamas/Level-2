
'use client';
import {Link} from '@/i18n/navigation';
import {useState} from 'react';
import Image from 'next/image';
import {
  FileText,
  Mic2,
  Play
} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {mediaItems} from '@/data/media';
import type {MediaType} from '@/types/media';

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

export default function MediaListing() {
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
    <section className="bg-stone-100 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

     
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const active =
              filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  setActiveFilter(filter)
                }
                className={
                  active
                    ? `
                      rounded-full
                      border border-green-700
                      bg-green-700
                      px-5 py-2.5
                      font-medium text-white
                    `
                    : `
                      rounded-full
                      border border-slate-300
                      bg-white
                      px-5 py-2.5
                      font-medium text-slate-700
                      transition
                      hover:border-green-700
                      hover:bg-green-50
                      hover:text-green-700
                    `
                }
              >
                {t(filter)}
              </button>
            );
          })}
        </div>

       
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const Icon =
              mediaIcons[item.type];
              const href =
         item.type === 'article'
         ? `/media/articles/${item.slug}`
         : item.type === 'podcast'
         ? `/media/podcasts/${item.slug}`
         : `/media/videos/${item.slug}`;

            return (
              <article
                key={item.slug}
                className="
                  overflow-hidden rounded-3xl
                  bg-white shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              > 
        
              <Link href={href}>
  
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="
                      (max-width: 767px)
                      calc(100vw - 48px),
                      (max-width: 1023px)
                      calc((100vw - 72px) / 2),
                      410px
                    "
                    className="
                      object-cover
                      transition duration-300
                      hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute start-4 top-4
                      inline-flex items-center gap-2
                      rounded-full
                      bg-white/95
                      px-3.5 py-2
                      text-xs font-semibold
                      text-green-800
                      shadow-sm
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4"
                    />

                    {t(item.type)}
                  </div>
                </div>

                <div className="p-6 lg:p-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {t(
                      `${item.translationKey}.title`
                    )}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {t(
                      `${item.translationKey}.excerpt`
                    )}
                  </p>
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