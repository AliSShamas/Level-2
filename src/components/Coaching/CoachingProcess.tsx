import {ArrowUpRight, Compass, MessageCircle, Route, Sprout} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import styles from './Coaching.module.css';

const steps = [
  {key: 'discovery', icon: MessageCircle, accent: 'bg-sky-50 text-sky-800'},
  {key: 'direction', icon: Compass, accent: 'bg-teal-50 text-teal-700'},
  {key: 'sessions', icon: Route, accent: 'bg-orange-50 text-orange-700'},
  {key: 'progress', icon: Sprout, accent: 'bg-sky-50 text-sky-800'}
] as const;

export default function CoachingProcess() {
  const t = useTranslations('CoachingPage.process');

  return (
    <section data-reveal-group className={`${styles.softSection} px-6 py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className={styles.eyebrow}>{t('eyebrow')}</p>
          <h2 className={`${styles.heading} mt-4 text-3xl font-semibold tracking-tight md:text-4xl`}>
            {t('title')}
          </h2>
          <p className="mt-5 text-base leading-8 md:text-lg">{t('description')}</p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {steps.map(({key, icon: Icon, accent}, index) => (
            <li data-reveal key={key}>
              <div className={styles.step}>
                <div className="flex items-center justify-between gap-4">
                  <span className={`flex size-12 items-center justify-center rounded-2xl ${accent}`}>
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <span aria-hidden="true" className="text-sm font-semibold tracking-widest text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={`${styles.heading} mt-5 text-xl font-semibold`}>{t(`${key}.title`)}</h3>
                <p className="mt-3 max-w-lg leading-7">{t(`${key}.description`)}</p>
              </div>
            </li>
          ))}
        </ol>

        <div id="inquire" data-reveal className={`${styles.invitation} mt-12 scroll-mt-28 p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12`}>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('invitation.title')}</h2>
            <p className="mt-3 leading-7 text-white/80">{t('invitation.description')}</p>
          </div>
          <Link href="/#contact" className={`${styles.button} mt-6 shrink-0 lg:mt-0`}>
            {t('invitation.cta')}
            <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 rtl:-rotate-90" />
          </Link>
        </div>
      </div>
    </section>
  );
}
