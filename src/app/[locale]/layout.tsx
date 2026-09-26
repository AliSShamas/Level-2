import type {ReactNode} from 'react';
import {Manrope, Noto_Sans_Arabic} from 'next/font/google';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollAnimations from '@/components/common/ScrollAnimations';

import {routing} from '@/i18n/routing';

import '@/app/globals.css';
import BackToTop from '@/components/common/BackToTop';

const latinFont = Manrope({subsets: ['latin'], display: 'swap', variable: '--font-latin'});
const arabicFont = Noto_Sans_Arabic({subsets: ['arabic'], display: 'swap', variable: '--font-arabic'});

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
      <body className={`${latinFont.variable} ${arabicFont.variable}`}>
        <NextIntlClientProvider>
          <Header/>
          <ScrollAnimations>
            {children}
            <Footer/>
          </ScrollAnimations>
          <BackToTop/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
