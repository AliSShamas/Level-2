import Image from 'next/image';
import {useTranslations} from 'next-intl';

import styles from './Training.module.css';

const audiences = ['educators', 'leaders', 'teams', 'youth'] as const;

export default function WhoIsThisFor() {
  const t = useTranslations('TrainingPage.whoThisIsFor');

  return (
    <section data-reveal-group className={`${styles.softSection} px-6 py-20 md:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="lg:order-2">
          <h2 className={`${styles.heading} text-3xl font-semibold tracking-tight md:text-4xl`}>{t('title')}</h2>
          <p className="mt-6 text-base leading-8 md:text-lg">{t('description')}</p>
          <ul className="mt-6 space-y-4">
            {audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-3 leading-7">
                <span aria-hidden="true" className="mt-2 size-3 shrink-0 rounded-full border-[3px] border-orange-600" />
                <span>{t(`audiences.${audience}`)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-8">{t('closing')}</p>
        </div>
        <div data-reveal className="lg:order-1">
          <div className={`${styles.photo} aspect-[5/4] lg:aspect-square`}>
            <Image src="/images/media/building-resilient-teams.webp" alt={t('imageAlt')} fill
              sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 128px) / 2), 600px"
              className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
