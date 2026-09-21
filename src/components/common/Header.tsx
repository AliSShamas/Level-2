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
          mx-auto grid max-w-7xl
          grid-cols-[1fr_auto_1fr]
          items-center gap-4
          px-4 py-7
          transition-all duration-300
          group-data-[scrolled=true]/header:py-3
          sm:px-6
        "
      >
        {/* Left side: social links */}
        <div className="min-w-0 justify-self-start">
          <div className="hidden sm:block">
            <SocialLinks />
          </div>
        </div>

        {/* Center: logo + brand */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/images/tree.png"
            alt={t('brand')}
            width={180}
            height={120}
            priority
            className="
              h-auto w-36
              transition-all duration-300
              group-data-[scrolled=true]/header:w-24
            "
          />

          <span
            className="
              mt-1 text-center text-sm font-semibold
              transition-all duration-300
              group-data-[scrolled=true]/header:text-xs
            "
          >
            {t('brand')}
          </span>
        </Link>

        {/* Right side: language, search, hamburger */}
        <div className="flex items-center gap-3 justify-self-end sm:gap-4">
          <LanguageSwitcher />
          <SearchOverlay />
          <NavigationMenu />
        </div>
      </div>
    </HeaderFrame>
  );
}