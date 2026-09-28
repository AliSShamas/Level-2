'use client';

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {ArrowUpRight, Menu, Search, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import SocialLinks from './SocialLinks';
import styles from './NavigationMenu.module.css';

const primaryLinks = [
  {href: '/coaching', translationKey: 'coaching'},
  {href: '/consulting', translationKey: 'consulting'},
  {href: '/training', translationKey: 'training'}
] as const;

const secondaryLinks = [
  {href: '/#about', translationKey: 'about'},
  {href: '/media', translationKey: 'media'},
  {href: '/#contact', translationKey: 'contact'}
] as const;

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const searchAfterClose = useRef(false);
  const t = useTranslations('Navigation');
  const footer = useTranslations('Footer');

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // The native modal keeps background controls inert and traps keyboard focus.
    dialog.showModal();
    closeButtonRef.current?.focus({preventScroll: true});

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({preventScroll: true});

      // Release this modal's focus/scroll lock before opening the existing search.
      if (searchAfterClose.current) {
        searchAfterClose.current = false;
        document.querySelector<HTMLButtonElement>('header button[aria-controls="site-search"]')?.click();
      }
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t('openMenu')}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-green-700 transition-[background-color,color,scale] duration-200 ease-out hover:bg-green-50 hover:text-green-900 motion-safe:hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
      >
        <Menu aria-hidden="true" className="size-6" />
      </button>

      {isOpen && (
        <dialog
          ref={dialogRef}
          id="site-navigation"
          aria-labelledby="site-navigation-title"
          className={styles.overlay}
          onCancel={(event) => {
            event.preventDefault();
            closeMenu();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
        >
          <div className={styles.panel}>
            <h2 id="site-navigation-title" className="sr-only">{t('openMenu')}</h2>

            <div className={styles.menuHeader}>
              <div className={styles.desktopSocials}>
                <SocialLinks variant="menu" />
              </div>

              <Link href="/" onClick={closeMenu} className={styles.brand}>
                <Image
                  src="/images/tree.png"
                  alt=""
                  width={180}
                  height={120}
                  className="h-auto w-36 brightness-0 invert md:w-44"
                />
                <span className="mt-3 text-lg font-semibold tracking-tight md:text-xl">{t('brand')}</span>
                <span className="mt-1 text-xs font-normal tracking-wide text-emerald-100/65">{footer('description')}</span>
              </Link>

              <div className={styles.actions}>
                <LanguageSwitcher variant="menu" onSwitch={closeMenu} />
                <button
                  type="button"
                  aria-label={t('search')}
                  className={styles.iconButton}
                  onClick={() => {
                    searchAfterClose.current = true;
                    closeMenu();
                  }}
                >
                  <Search aria-hidden="true" className="size-6" />
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  aria-label={t('closeMenu')}
                  className={styles.iconButton}
                >
                  <X aria-hidden="true" className="size-7" />
                </button>
              </div>
            </div>

            <nav className={styles.navigation}>
              <div className={styles.primaryLinks}>
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`${styles.primaryLink} ${styles[link.translationKey]}`}
                  >
                    <span>{t(link.translationKey)}</span>
                    <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 rtl:-rotate-90" />
                  </Link>
                ))}
              </div>

              <div className={styles.secondaryLinks}>
                {secondaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu}>
                    {t(link.translationKey)}
                  </Link>
                ))}
              </div>
            </nav>

            <div className={styles.mobileSocials}>
              <SocialLinks variant="menu" />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
