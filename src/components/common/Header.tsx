import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

import LanguageSwitcher from './LanguageSwitcher';
import NavigationMenu from './NavigationMenu';
import SearchOverlay from './SearchOverlay';
import SocialLinks from './SocialLinks';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-0 justify-self-start">
          <div className="hidden sm:block">
            <SocialLinks />
          </div>
        </div>

        <Link
          href="/"
          className="max-w-40 truncate text-center text-base font-semibold sm:max-w-none sm:text-lg"
        >
          {t('brand')}
        </Link>

        <div className="flex items-center gap-3 justify-self-end sm:gap-4">
          <LanguageSwitcher />
          <SearchOverlay />
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}