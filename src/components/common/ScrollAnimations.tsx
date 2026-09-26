'use client';

import {useLayoutEffect, useRef, type ReactNode} from 'react';
import {usePathname} from 'next/navigation';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

interface ScrollAnimationsProps {
  children: ReactNode;
}

export default function ScrollAnimations({children}: ScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    // Content is visible in the HTML. Only enhance it when motion is welcome.
    media.add('(prefers-reduced-motion: no-preference)', (context) => {
      const animations = new Map<HTMLElement, gsap.core.Tween>();

      // Register later additions in the same GSAP context so they are cleaned up too.
      const revealNewContent = context.add('revealNewContent', () => {
        animations.forEach((animation, target) => {
          if (!container.contains(target)) {
            animation.scrollTrigger?.kill();
            animation.kill();
            animations.delete(target);
          }
        });

        container
          .querySelectorAll<HTMLElement>('[data-reveal-group]')
          .forEach((group) => {
            const targets = Array.from(
              group.querySelectorAll<HTMLElement>('[data-reveal]')
            ).filter((target) => (
              target.closest('[data-reveal-group]') === group &&
              !animations.has(target)
            ));
            const rows = new Map<number, number>();

            // Measure before applying transforms so only items on the same row stagger.
            const positions = targets.map((target) => (
              Math.round(target.getBoundingClientRect().top)
            ));

            targets.forEach((target, index) => {
              const row = positions[index];
              const rowIndex = rows.get(row) ?? 0;
              rows.set(row, rowIndex + 1);
              const isHero = group.dataset.revealGroup === 'hero';

              const animation = gsap.fromTo(target, {
                opacity: 0,
                y: 24
              }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: isHero ? index * 0.12 : Math.min(rowIndex, 3) * 0.1,
                ease: 'power2.out',
                clearProps: 'opacity,transform',
                // Each card has its own trigger, including vertically stacked mobile cards.
                ...(isHero ? {} : {
                  scrollTrigger: {
                    trigger: target,
                    start: 'top 90%',
                    once: true
                  }
                })
              });

              animations.set(target, animation);
            });
          });
      });

      revealNewContent();

      // Tabbing to a link must never leave keyboard focus inside invisible content.
      function revealFocusedContent(event: FocusEvent) {
        if (!(event.target instanceof Element)) return;

        const target = event.target.closest<HTMLElement>('[data-reveal]');
        if (!target) return;

        const animation = animations.get(target);
        animation?.progress(1);
        animation?.scrollTrigger?.kill();
      }

      // Media filters and responsive images can move later sections after setup.
      let refreshFrame = 0;
      function scheduleRefresh() {
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      }

      const observer = new ResizeObserver(scheduleRefresh);
      const contentObserver = new MutationObserver(() => {
        revealNewContent();
        scheduleRefresh();
      });

      observer.observe(container);
      contentObserver.observe(container, {childList: true, subtree: true});
      container.addEventListener('focusin', revealFocusedContent);

      return () => {
        observer.disconnect();
        contentObserver.disconnect();
        cancelAnimationFrame(refreshFrame);
        container.removeEventListener('focusin', revealFocusedContent);
      };
    });

    // Revert inline styles and dispose triggers on navigation, unmount, or reduced motion.
    return () => media.revert();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
