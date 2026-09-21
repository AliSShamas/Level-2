import Image from 'next/image';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import treeLogo from '../../../public/images/tree.png';

import SocialLinks from './SocialLinks';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-green-900/10 bg-[#edf2e8] text-[#294333] [&_a]:transition-colors [&_a:hover]:text-green-700 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-green-700">
      <div className="mx-auto grid max-w-[84rem] gap-x-10 gap-y-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))_1.2fr] lg:gap-x-12 lg:[&>div:not(:first-child)]:pt-4">
        <div className="max-w-64">
          <Link href="/" className="inline-flex flex-col items-start gap-5 text-xl font-bold tracking-tight">
            <Image
              src={treeLogo}
              alt=""
              sizes="176px"
              className="h-auto w-44"
            />
            <span>{t('brand')}</span>
          </Link>

          <p className="mt-3 text-sm leading-6 text-[#536451]">
            {t('description')}
          </p>
        </div>

        <div>
          <h2 className="font-semibold after:mt-4 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-green-700/50 after:content-['']">
            {t('categories')}
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-[#536451]">
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
          <h2 className="font-semibold after:mt-4 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-green-700/50 after:content-['']">
            {t('quickLinks')}
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-[#536451]">
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
          <h2 className="font-semibold after:mt-4 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-green-700/50 after:content-['']">
            {t('resources')}
          </h2>

          <nav className="mt-5 flex flex-col gap-3 text-[#536451]">
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
          <h2 className="font-semibold after:mt-4 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-green-700/50 after:content-['']">
            {t('reachUs')}
          </h2>

          <a
            href="mailto:hello@example.com"
            className="mt-5 block break-words text-[#536451]"
          >
            {t('email')}
          </a>

          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-green-900/10 px-4 py-5">
        <p
          dir="auto"
          className="mx-auto max-w-[87rem] text-base font-semibold leading-7 text-[#536451]"
        >
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
