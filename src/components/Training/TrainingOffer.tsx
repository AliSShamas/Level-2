import {ArrowUpRight, ClipboardList, MessageCircle, Presentation, UsersRound} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import styles from './Training.module.css';

const offers = [
  {key: 'discovery', icon: MessageCircle, color: 'text-teal-700'},
  {key: 'design', icon: ClipboardList, color: 'text-sky-800'},
  {key: 'delivery', icon: Presentation, color: 'text-orange-700'},
  {key: 'start', icon: UsersRound, color: 'text-teal-700'}
] as const;

export default function TrainingOffer() {
  const t = useTranslations('TrainingPage.offer');

  return (
    <section data-reveal-group className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className={`${styles.heading} text-3xl font-semibold tracking-tight md:text-4xl`}>{t('title')}</h2>
          <p className="mt-6 text-base leading-8 md:text-lg">{t('description')}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map(({key, icon: Icon, color}) => (
            <article data-reveal key={key}>
              <div className={styles.offerCard}>
                <Icon aria-hidden="true" className={`mt-1 size-8 shrink-0 ${color}`} strokeWidth={1.6} />
                <div>
                  <h3 className={`${styles.blueHeading} text-xl font-semibold`}>{t(`${key}.title`)}</h3>
                  <p className="mt-3 leading-7">{t(`${key}.description`)}</p>
                  {key === 'start' && (
                    <Link href="/#contact" className={`${styles.textLink} mt-5 inline-flex min-h-11 items-center gap-2 font-semibold`}>
                      {t('cta')}
                      <ArrowUpRight aria-hidden="true" className="size-5 rtl:-rotate-90" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
