import Image from 'next/image';
import {
  BriefcaseBusiness,
  Compass,
  Lightbulb,
  UsersRound
} from "lucide-react";
import {useTranslations} from "next-intl";

import styles from './Coaching.module.css';

const audiences = [
  {
    key: "professionals",
    icon: BriefcaseBusiness
  },
  {
    key: "leaders",
    icon: UsersRound
  },
  {
    key: "transition",
    icon: Compass
  },
  {
    key: "clarity",
    icon: Lightbulb
  }
] as const;

export default function WhoThisIsFor() {
  const t = useTranslations("CoachingPage.whoThisIsFor");

  return (
    <section id="who-this-is-for" data-reveal-group className={`${styles.softSection} scroll-mt-28 px-6 py-20 md:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="lg:order-2">
          <p className={styles.eyebrow}>
            {t("eyebrow")}
          </p>

          <h2 className={`${styles.heading} mt-4 text-3xl font-semibold tracking-tight md:text-4xl`}>
            {t("title")}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            {t("description")}
          </p>
          <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <article
                  key={audience.key}
                  className="flex items-start gap-3"
                >
                  <div className={styles.icon}>
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <h3 className={`${styles.heading} text-base font-semibold`}>
                      {t(`${audience.key}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {t(`${audience.key}.description`)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div data-reveal className="lg:order-1">
          <div className={`${styles.photo} aspect-square`}>
            <Image
              src="/images/media/growth-through-reflection.webp"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 128px) / 2), 600px"
              className="object-cover"
            />
          </div>
          <p className={`${styles.heading} mt-5 border-s-2 border-sky-300 ps-4 text-base font-medium leading-7`}>
            {t('reflection')}
          </p>
        </div>
      </div>
    </section>
  );
}
