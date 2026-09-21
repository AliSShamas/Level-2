import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {ChevronsRight} from 'lucide-react';

import {Link} from '@/i18n/navigation';

export default function IntroSection() {
  const t = useTranslations('HomePage.intro');

  return (
    <section className="overflow-hidden bg-stone-100 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex justify-center">
          <Image
            src="/images/tree.png"
            alt=""
            width={650}
            height={650}
            className="h-auto w-full max-w-md object-contain md:max-w-xl"
          />
        </div>

        <div className="text-start">
         <h2 className="text-4xl font-bold leading-tight tracking-tight text-emerald-900 md:text-5xl">
  {t('title')}
</h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
            {t('description')}
          </p>

        <Link
  href="/contact"
  className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white! transition-colors duration-200 hover:bg-green-800"
>
  {t('cta')}
  <ChevronsRight className="size-5 rtl:rotate-180" />
</Link>
        </div>
      </div>
    </section>
  );
}