import Image from 'next/image';
import {useTranslations} from 'next-intl';

import styles from './Coaching.module.css';

const paragraphs = ['description', 'approach', 'focus'] as const;

export default function WhatToExpect() {
  const t = useTranslations('CoachingPage.whatToExpect');

  return (
    <section data-reveal-group className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <p className={styles.eyebrow}>{t('eyebrow')}</p>
          <h2 className={`${styles.heading} mt-4 text-3xl font-semibold tracking-tight md:text-4xl`}>
            {t('title')}
          </h2>
          <div className="mt-6 space-y-6 text-base leading-8 md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {t.rich(paragraph, {
                  strong: (chunks) => <strong className="font-semibold text-slate-700">{chunks}</strong>
                })}
              </p>
            ))}
          </div>
        </div>

        <div data-reveal>
          <div className={`${styles.photo} aspect-[5/4]`}>
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
