'use client';

import {useLocale, useTranslations} from 'next-intl';

import {
  usePathname,
  useRouter
} from '@/i18n/navigation';

export default function LanguageSwitcher({
  variant = 'header',
  onSwitch
}: {
  variant?: 'header' | 'menu';
  onSwitch?: () => void;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('Navigation');

  const nextLocale = locale === 'en' ? 'ar' : 'en';

  function switchLanguage() {
    onSwitch?.();
    router.replace(pathname, {
      locale: nextLocale
    });
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className={`inline-flex min-h-10 shrink-0 items-center rounded-lg px-1 text-sm font-semibold transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-2 sm:text-base ${variant === 'menu' ? 'text-emerald-100 hover:bg-white/10 hover:text-white focus-visible:outline-emerald-200' : 'text-green-700 hover:bg-green-50 hover:text-green-900 focus-visible:outline-green-700'}`}
    >
      {locale === 'en'
        ? t('switchToArabic')
        : t('switchToEnglish')}
    </button>
  );
}
