import {useTranslations} from 'next-intl';
import {ArrowUpRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('HomePage.hero');

  return (
    <section
      data-reveal-group="hero"
      className="relative isolate min-h-[620px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home-hero.png')"
      }}
    >
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex min-h-[620px] max-w-7xl items-end px-6 py-16 md:items-center md:py-24">
        <div className="max-w-2xl text-white">
          <h1 data-reveal className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl rtl:leading-snug">
            {t('title')}
          </h1>

          <p data-reveal className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
            {t('description')}
          </p>

          <div data-reveal className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center gap-3 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-lg transition-[background-color,box-shadow,translate] duration-200 ease-out hover:bg-green-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-0.5"
            >
              {t('cta')}
              <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:-translate-y-0.5 rtl:-rotate-90" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
