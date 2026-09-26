import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {ChevronsRight} from 'lucide-react';

import {Link} from '@/i18n/navigation';

export default function IntroSection() {
  const t = useTranslations('HomePage.intro');

  return (
    <section data-reveal-group className="overflow-hidden bg-stone-100 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div data-reveal className="flex justify-center">
          <Image
            src="/images/tree.png"
            alt=""
            width={650}
            height={650}
            className="h-auto w-full max-w-md object-contain md:max-w-xl"
          />
        </div>

        <div data-reveal className="text-start">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-emerald-900 md:text-5xl">
            {t('title')}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
            {t('description')}
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white! transition-[background-color,box-shadow,translate] duration-200 ease-out hover:bg-green-800 hover:shadow-lg focus-visible:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5"
          >
            {t('cta')}
            <ChevronsRight aria-hidden="true" className="size-5 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 rtl:rotate-180 rtl:motion-safe:group-hover:-translate-x-1 rtl:motion-safe:group-focus-visible:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
