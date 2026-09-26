import {Quote} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {testimonials} from '@/data/testimonials';

export default function Testimonials() {
  const t = useTranslations('HomePage.testimonials');

  const bottomTestimonials = [...testimonials].reverse();

  return (
    <section className="overflow-hidden bg-emerald-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
            {t('eyebrow')}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {t('title')}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            {t('description')}
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-6">
        <div className="overflow-hidden">
          <div className="testimonial-marquee flex w-max">
            <TestimonialGroup
              testimonials={testimonials}
              t={t}
            />

            <TestimonialGroup
              testimonials={testimonials}
              t={t}
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="testimonial-marquee testimonial-marquee-reverse flex w-max">
            <TestimonialGroup
              testimonials={bottomTestimonials}
              t={t}
            />

            <TestimonialGroup
              testimonials={bottomTestimonials}
              t={t}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialGroupProps {
  testimonials: readonly {
    id: number;
    accent: 'green' | 'orange';
    translationKey:
      | 'clarity'
      | 'leadership'
      | 'confidence'
      | 'growth';
  }[];
  t: ReturnType<typeof useTranslations>;
}

function TestimonialGroup({
  testimonials,
  t
}: TestimonialGroupProps) {
  return (
    <div className="flex shrink-0 gap-6 pe-6">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.id}
          className="
            flex min-h-[320px] w-[330px]
            shrink-0 flex-col rounded-3xl
            bg-white p-7 text-slate-900
            sm:w-[380px]
          "
        >
          <div
            className={`flex size-12 items-center justify-center rounded-2xl ${
              testimonial.accent === 'orange'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-green-100 text-green-800'
            }`}
          >
            <Quote className="size-6" />
          </div>

          <blockquote className="mt-7 text-lg leading-8 text-slate-600">
            {t(`${testimonial.translationKey}.quote`)}
          </blockquote>

          <div className="mt-auto pt-8">
            <p
              className={`font-bold ${
                testimonial.accent === 'orange'
                  ? 'text-orange-700'
                  : 'text-green-800'
              }`}
            >
              {t(`${testimonial.translationKey}.name`)}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {t(`${testimonial.translationKey}.location`)}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
