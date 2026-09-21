'use client';

import {useEffect, useState} from 'react';

interface HeaderFrameProps {
  children: React.ReactNode;
}

export default function HeaderFrame({
  children
}: HeaderFrameProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      data-scrolled={isScrolled}
      className="
        group/header sticky top-0 z-40
        border-b border-slate-200 bg-white
        transition-all duration-300
      "
    >
      {children}
    </header>
  );
}