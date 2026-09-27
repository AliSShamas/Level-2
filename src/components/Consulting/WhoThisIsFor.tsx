import Image from 'next/image';
import {useTranslations} from 'next-intl';

import styles from './Consulting.module.css';

const situations = ['change', 'leadership', 'learning', 'capacity', 'strategy'] as const;

export default function WhoThisIsFor() {
  const t = useTranslations('ConsultingPage.whoThisIsFor');

  return (
    <section id="who-this-is-for" data-reveal-group className={`${styles.softSection} scroll-mt-28 px-6 py-20 md:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="lg:order-2">
          <h2 className={`${styles.heading} text-3xl font-semibold tracking-tight md:text-4xl`}>{t('title')}</h2>
          <p className="mt-6 text-base leading-8 md:text-lg">{t('description')}</p>
          <p className="mt-6 leading-8">{t('intro')}</p>
          <ul className="mt-4 space-y-3">
            {situations.map((situation) => (
              <li key={situation} className="flex items-start gap-3 leading-7">
                <span aria-hidden="true" className="mt-2 size-3 shrink-0 rounded-full border-[3px] border-orange-600" />
                <span>{t(`situations.${situation}`)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-8">{t('audience')}</p>
        </div>

        <div data-reveal className="lg:order-1">
          <div className={`${styles.photo} aspect-[5/4] lg:aspect-square`}>
            <Image
              src="/images/coaching/space-to-reflect.webp"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 128px) / 2), 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
