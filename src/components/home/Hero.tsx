import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('HomePage.hero');

  return (
    <section
      data-reveal-group="hero"
      className="relative isolate min-h-[620px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home-hero.png')"
      }}
    >
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex min-h-[620px] max-w-7xl items-end px-6 py-16 md:items-center md:py-24">
        <div className="max-w-2xl text-white">
          <h1 data-reveal className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl rtl:leading-snug">
            {t('title')}
          </h1>

          <p data-reveal className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
            {t('description')}
          </p>

        </div>
      </div>
    </section>
  );
}
