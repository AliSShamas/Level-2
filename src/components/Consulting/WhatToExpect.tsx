import {useTranslations} from 'next-intl';

import styles from './Consulting.module.css';

const paragraphs = ['partnership', 'listening', 'approach', 'commitment'] as const;

export default function WhatToExpect() {
  const t = useTranslations('ConsultingPage.whatToExpect');

  return (
    <section data-reveal-group className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-5xl">
          <h2 className={`${styles.heading} text-3xl font-semibold tracking-tight md:text-4xl`}>{t('title')}</h2>
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
      </div>
    </section>
  );
}
