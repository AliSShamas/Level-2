'use client';

import {useEffect, useRef, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

const primaryLinks = [
  {
    href: '/coaching',
    translationKey: 'coaching'
  },
  {
    href: '/consulting',
    translationKey: 'consulting'
  },
  {
    href: '/training',
    translationKey: 'training'
  }
] as const;

const secondaryLinks = [
  {
    href: '/about',
    translationKey: 'about'
  },
  {
    href: '/media',
    translationKey: 'media'
  },
  {
    href: '/contact',
    translationKey: 'contact'
  }
] as const;

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const t = useTranslations('Navigation');

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements =
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );

      previouslyFocusedElement?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-label={t('openMenu')}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
      >
        <Menu className="size-5" />
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          id="site-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="site-navigation-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950 text-white"
        >
          <h2
            id="site-navigation-title"
            className="sr-only"
          >
            {t('openMenu')}
          </h2>

          <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-xl font-semibold"
              >
                {t('brand')}
              </Link>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                aria-label={t('closeMenu')}
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="my-auto py-16">
              <div className="flex flex-col gap-6">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-4xl font-semibold uppercase tracking-tight md:text-6xl"
                  >
                    {t(link.translationKey)}
                  </Link>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-8">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg"
                  >
                    {t(link.translationKey)}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}