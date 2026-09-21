import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  UserRound
} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import styles from './ThreePillars.module.css';

const pillars = [
  {
    key: 'coaching',
    href: '/coaching',
    icon: UserRound
  },
  {
    key: 'consulting',
    href: '/consulting',
    icon: Building2
  },
  {
    key: 'training',
    href: '/training',
    icon: GraduationCap
  }
] as const;

export default function ThreePillars() {
  const t = useTranslations('HomePage.pillars');

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            {t('eyebrow')}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {t('title')}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t('description')}
          </p>
        </div>

        <div className={`${styles.grid} mt-14`}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.key} className={styles[pillar.key]}>
                <Link
                  href={pillar.href}
                  aria-labelledby={`pillar-${pillar.key}`}
                  className={styles.card}
                >
                  <div className={styles.icon}>
                    <Icon aria-hidden="true" className="size-7" />
                  </div>

                  <h3
                    id={`pillar-${pillar.key}`}
                    className="mt-10 text-3xl font-semibold tracking-tight md:text-2xl lg:text-3xl"
                  >
                    {t(`${pillar.key}.title`)}
                  </h3>

                  <p className={styles.description}>
                    {t(`${pillar.key}.description`)}
                  </p>

                  <span className={styles.action}>
                    <span className={styles.button}>
                      {t('learnMore')}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 rtl:-rotate-90"
                      />
                    </span>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
