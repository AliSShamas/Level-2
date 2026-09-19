'use client';

import {useEffect, useRef, useState} from 'react';
import {Search, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = useTranslations('Navigation');

  function openSearch() {
    setIsOpen(true);
  }

  function closeSearch() {
    setIsOpen(false);
  }

 useEffect(() => {
  if (!isOpen) {
    return;
  }

  const searchButton = searchButtonRef.current;
  const previousOverflow = document.body.style.overflow;

  document.body.style.overflow = 'hidden';
  inputRef.current?.focus();

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeSearch();
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
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

    searchButton?.focus();
  };
}, [isOpen]);

  return (
    <>
      <button
        ref={searchButtonRef}
        type="button"
        onClick={openSearch}
        aria-label={t('search')}
        aria-expanded={isOpen}
        aria-controls="site-search"
        className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
      >
        <Search className="size-5" />
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          id="site-search"
          role="dialog"
          aria-modal="true"
          aria-labelledby="site-search-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-white/65 text-slate-950 backdrop-blur-lg"
        >
          <div className="mx-auto min-h-screen max-w-7xl px-6 py-6">
            <div className="flex items-center justify-between">
              <h2
                id="site-search-title"
                className="text-xl font-semibold"
              >
                {t('searchTitle')}
              </h2>

              <button
                type="button"
                onClick={closeSearch}
                aria-label={t('closeSearch')}
                className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="mx-auto mt-24 max-w-4xl">
              <div className="relative">
                <Search className="absolute start-0 top-1/2 size-6 -translate-y-1/2 text-slate-400" />

                <input
                  ref={inputRef}
                  type="search"
                  placeholder={t('searchPlaceholder')}
                  className="w-full border-b border-slate-300 bg-transparent py-5 ps-10 pe-4 text-2xl outline-none transition focus:border-slate-950 md:text-4xl"
                />
              </div>

              <p className="mt-6 text-sm text-slate-500">
                {t('searchHint')}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}