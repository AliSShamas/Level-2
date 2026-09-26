'use client';

import {useEffect, useState} from 'react';
import {ArrowUp} from 'lucide-react';
import {useTranslations} from 'next-intl';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('Navigation');

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'instant' : 'smooth'
    });
  }

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t('backToTop')}
      className="fixed bottom-6 end-6 z-40
        flex size-14 items-center justify-center
        rounded-xl bg-slate-900 text-white shadow-lg
        transition-[background-color,box-shadow,translate] duration-200 ease-out
        hover:bg-green-800 hover:shadow-xl
        motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
    >
      <ArrowUp className="size-6" />
    </button>
  );
}
