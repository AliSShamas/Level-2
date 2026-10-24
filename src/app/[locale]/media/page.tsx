import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import MediaHero from '@/components/media/mediaHero';
import MediaListing from '@/components/media/mediaListing';

type MediaPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: MediaPageProps): Promise<Metadata> {
  const {locale} = await params;

  const t = await getTranslations({
    locale,
    namespace: 'MediaPage'
  });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default function MediaPage() {
  return (
    <main>
      <MediaHero />
      <MediaListing />
    </main>
  );
}