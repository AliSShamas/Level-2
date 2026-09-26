import Image from "next/image";
import {ArrowDown, ArrowUpRight, ChevronRight} from "lucide-react";
import {useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";

import styles from './Coaching.module.css';

export default function CoachingHero() {
  const t = useTranslations("CoachingPage.hero");

  return (
    <section data-reveal-group="hero" className={`${styles.hero} px-6 pb-20 pt-8 md:pb-24 md:pt-10`}>
      <div className="mx-auto max-w-7xl">
        <nav aria-label={t('breadcrumbLabel')} className={`${styles.breadcrumb} text-sm`}>
          <ol className="flex items-center gap-2">
            <li><Link href="/">{t('home')}</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-3.5 text-slate-400 rtl:rotate-180" /></li>
            <li aria-current="page">{t('eyebrow')}</li>
          </ol>
        </nav>

        <div className="mt-12 grid items-center gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h1 className={`${styles.heading} mt-5 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl`}>
              {t('title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {t('description')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/#contact" className={styles.button}>
                {t('cta')}
                <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 rtl:-rotate-90" />
              </Link>
              <Link href="#who-this-is-for" className={styles.textLink}>
                {t('explore')}
                <ArrowDown aria-hidden="true" className="size-4 shrink-0" />
              </Link>
            </div>
          </div>

          <figure data-reveal>
            <div className={`${styles.photo} ${styles.heroPhoto} aspect-[5/4]`}>
              <Image
                src="/images/coaching/coaching-conversation.webp"
                alt={t('imageAlt')}
                fill
                preload
                sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 112px) / 2), 608px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-sky-700" />
              {t('imageCaption')}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
