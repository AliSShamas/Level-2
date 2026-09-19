import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import SocialLinks from './SocialLinks';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <Link href="/" className="text-xl font-bold">
            {t('brand')}
          </Link>

          <p className="mt-3 text-sm text-white/70">
            {t('description')}
          </p>
        </div>

        <div>
          <h2 className="font-semibold">
            {t('categories')}
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-white/75">
            <Link href="/coaching">
              {t('coaching')}
            </Link>

            <Link href="/training">
              {t('training')}
            </Link>

            <Link href="/consulting">
              {t('consulting')}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="font-semibold">
            {t('quickLinks')}
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-white/75">
            <Link href="/about">
              {t('about')}
            </Link>

            <Link href="/contact">
              {t('contact')}
            </Link>

            <Link href="/media">
              {t('mediaCenter')}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="font-semibold">
            {t('resources')}
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-white/75">
            <Link href="/media">
              {t('podcasts')}
            </Link>

            <Link href="/media">
              {t('articles')}
            </Link>

            <Link href="/media">
              {t('videos')}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="font-semibold">
            {t('reachUs')}
          </h2>

          <a
            href="mailto:hello@example.com"
            className="mt-5 block text-white/75"
          >
            {t('email')}
          </a>

          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-6 py-5">
        <p
          dir="auto"
          className="mx-auto max-w-7xl text-sm text-white/70"
        >
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}   