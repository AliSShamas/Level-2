import {useTranslations} from 'next-intl';

export default function MediaHero() {
  const t = useTranslations('MediaPage');

  return (
    <section className="bg-emerald-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
          {t('eyebrow')}
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          {t('title')}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
          {t('description')}
        </p>
      </div>
    </section>
  );
}