import Image from 'next/image';
import {ArrowDown, ArrowUpRight, ChevronRight} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import styles from './Consulting.module.css';

export default function ConsultingHero() {
  const t = useTranslations('ConsultingPage.hero');

  return (
    <section data-reveal-group="hero" className={`${styles.hero} px-6 pb-20 pt-8 md:pb-24 md:pt-10`}>
      <div className="mx-auto max-w-7xl">
        <nav aria-label={t('breadcrumbLabel')} className={`${styles.breadcrumb} text-sm`}>
          <ol className="flex items-center gap-2">
            <li><Link href="/">{t('home')}</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-3.5 text-slate-400 rtl:rotate-180" /></li>
            <li aria-current="page">{t('title')}</li>
          </ol>
        </nav>

        <div className="mt-12 grid items-center gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h1 className={`${styles.heading} text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl`}>{t('title')}</h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-slate-700 md:text-2xl">{t('subtitle')}</p>
            <p className="mt-6 max-w-xl text-lg leading-8">{t('description')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="#who-this-is-for" className={styles.button}>
                {t('explore')}
                <ArrowDown aria-hidden="true" className="size-5 shrink-0" />
              </Link>
              <Link href="/#contact" className={`${styles.textLink} inline-flex min-h-12 items-center gap-2 font-semibold`}>
                {t('contact')}
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 rtl:-rotate-90" />
              </Link>
            </div>
          </div>

          <div data-reveal>
            <div className={`${styles.photo} ${styles.heroPhoto} aspect-[5/4]`}>
              <Image
                src="/images/media/building-resilient-teams.webp"
                alt={t('imageAlt')}
                fill
                preload
                sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 112px) / 2), 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
