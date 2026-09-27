import {ArrowUpRight, ClipboardList, Handshake, MessageSquare, UsersRound} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import styles from './Consulting.module.css';

const offers = [
  {key: 'discovery', icon: MessageSquare},
  {key: 'design', icon: ClipboardList},
  {key: 'work', icon: UsersRound},
  {key: 'start', icon: Handshake}
] as const;

export default function ConsultingOffer() {
  const t = useTranslations('ConsultingPage.offer');

  return (
    <section data-reveal-group className={`${styles.softSection} px-6 py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className={`${styles.heading} text-3xl font-semibold tracking-tight md:text-4xl`}>{t('title')}</h2>
          <p className="mt-6 text-base leading-8 md:text-lg">{t('description')}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offers.map(({key, icon: Icon}) => (
            <article data-reveal key={key}>
              <div className={styles.offerCard}>
                <Icon aria-hidden="true" className={`${styles.offerIcon} size-9 shrink-0`} strokeWidth={1.6} />
                <h3 className={`${styles.offerTitle} mt-6 text-xl font-semibold`}>{t(`${key}.title`)}</h3>
                <p className="mt-4 leading-7">{t(`${key}.description`)}</p>
                {key === 'start' && (
                  <Link href="/#contact" className={styles.cardLink}>
                    {t('cta')}
                    <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 rtl:-rotate-90" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
