import type {Metadata} from 'next';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {ArrowUpRight, ChevronRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

import {getTrainingProgram, trainingPrograms} from '@/data/training-programs';
import {Link} from '@/i18n/navigation';

import styles from '@/components/Training/Training.module.css';

type ProgramPageProps = {params: Promise<{locale: string; slug: string}>};

// The locale layout supplies en/ar; this supplies the seven slugs for each locale.
export function generateStaticParams() {
  return trainingPrograms.map((program) => ({slug: program.slug}));
}

export async function generateMetadata({params}: ProgramPageProps): Promise<Metadata> {
  const {locale, slug} = await params;
  const program = getTrainingProgram(slug);
  if (!program) notFound();
  const t = await getTranslations({locale, namespace: 'TrainingPage'});
  return {
    title: t(`programs.${program.id}.title`),
    description: t(`programs.${program.id}.excerpt`)
  };
}

export default async function TrainingProgramPage({params}: ProgramPageProps) {
  const {locale, slug} = await params;
  const program = getTrainingProgram(slug);
  if (!program) notFound();

  const t = await getTranslations({locale, namespace: 'TrainingPage'});
  const title = t(`programs.${program.id}.title`);

  return (
    <main className={styles.page}>
      <section data-reveal-group="hero" className={`${styles.hero} px-6 pb-20 pt-8 md:pb-24 md:pt-10`}>
        <div className="mx-auto max-w-7xl">
          <nav aria-label={t('hero.breadcrumbLabel')} className={`${styles.breadcrumb} text-sm`}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/">{t('hero.home')}</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3.5 text-slate-400 rtl:rotate-180" /></li>
              <li><Link href="/training#program-areas">{t('hero.title')}</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3.5 text-slate-400 rtl:rotate-180" /></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">{t('detail.eyebrow')}</p>
              <h1 className={`${styles.blueHeading} mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl`}>{title}</h1>
            </div>
            <div data-reveal>
              <div className={`${styles.photo} aspect-[4/3]`}>
                <Image src={program.image} alt={t(`programs.${program.id}.imageAlt`)} fill preload
                  sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 112px) / 2), 608px"
                  className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal-group className={`${styles.softSection} px-6 py-20 md:py-24`}>
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <h2 className={`${styles.blueHeading} text-3xl font-semibold tracking-tight md:text-4xl`}>{t('detail.overview')}</h2>
            <p className="mt-6 text-lg leading-8">{t(`programs.${program.id}.overview`)}</p>
            <p className="mt-6 text-sm leading-7">{t('detail.adapted')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/#contact" className={styles.button}>
                {t('detail.enquire')}
                <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 rtl:-rotate-90" />
              </Link>
              <Link href="/training#program-areas" className={`${styles.textLink} inline-flex min-h-11 items-center font-semibold`}>{t('detail.back')}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
