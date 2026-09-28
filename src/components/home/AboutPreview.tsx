import {ChevronsRight} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

export default function AboutPreview() {
  const t = useTranslations('HomePage.aboutPreview');

  return (
    <section id="about" data-reveal-group className="relative scroll-mt-28 overflow-hidden bg-emerald-950 px-6 py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="absolute -end-32 -top-24 size-96 rounded-full border-[70px] border-emerald-700/40"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 end-32 size-80 rounded-full border-[55px] border-green-500/20"
      />

      <div className="relative mx-auto max-w-7xl">
        <p data-reveal className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
          {t('eyebrow')}
        </p>

        <h2 data-reveal className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {t('title')}
        </h2>

        <p data-reveal className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
          {t('description')}
        </p>

        <p data-reveal className="mt-8 max-w-3xl text-lg italic leading-8 text-green-200">
          {t('belief')}
        </p>

        <div data-reveal className="mt-10">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition-[background-color,box-shadow,translate] duration-200 ease-out hover:bg-green-500 hover:shadow-lg focus-visible:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300 motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5"
          >
            {t('cta')}
            <ChevronsRight aria-hidden="true" className="size-5 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 rtl:rotate-180 rtl:motion-safe:group-hover:-translate-x-1 rtl:motion-safe:group-focus-visible:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
