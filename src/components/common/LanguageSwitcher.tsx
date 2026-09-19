'use client';

import {useLocale, useTranslations} from 'next-intl';

import {
  usePathname,
  useRouter
} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('Navigation');

  const nextLocale = locale === 'en' ? 'ar' : 'en';

  function switchLanguage() {
    router.replace(pathname, {
      locale: nextLocale
    });
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className="text-sm font-medium"
    >
      {locale === 'en'
        ? t('switchToArabic')
        : t('switchToEnglish')}
    </button>
  );
}