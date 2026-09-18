import type {ReactNode} from 'react';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

import {routing} from '@/i18n/routing';

import '@/app/globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{locale: string}>;
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale
  }));
}
export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}