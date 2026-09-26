import Image from 'next/image';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import HeaderFrame from './HeaderFrame';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationMenu from './NavigationMenu';
import SearchOverlay from './SearchOverlay';
import SocialLinks from './SocialLinks';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <HeaderFrame>
      <div
        className="
          mx-auto grid max-w-[90rem]
          grid-cols-[auto_1fr] sm:grid-cols-[1fr_auto_1fr]
          items-center gap-2 sm:gap-4
          px-4 py-4
          transition-[padding] duration-300 ease-out
          group-data-[scrolled=true]/header:py-2
          sm:px-6 lg:px-8
        "
      >
        {/* Left side: social links */}
        <div className="hidden min-w-0 justify-self-start sm:block">
          <SocialLinks variant="header" />
        </div>

        {/* Center: logo + brand */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center rounded-md transition-opacity duration-200 ease-out hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
        >
          <Image
            src="/images/tree.png"
            alt={t('brand')}
            width={180}
            height={120}
            priority
            className="
              h-auto w-24 sm:w-32
              transition-[width] duration-300 ease-out
              group-data-[scrolled=true]/header:w-20
            "
          />

          <span
            className="
              mt-1 text-center text-sm font-semibold
              transition-[font-size] duration-300 ease-out
              group-data-[scrolled=true]/header:text-xs
            "
          >
            {t('brand')}
          </span>
        </Link>

        {/* Right side: language, search, hamburger */}
        <div className="flex items-center gap-1 justify-self-end text-green-700 sm:gap-3 lg:gap-5">
          <LanguageSwitcher />
          <SearchOverlay />
          <NavigationMenu />
        </div>
      </div>
    </HeaderFrame>
  );
}
