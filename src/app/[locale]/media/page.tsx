import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

import MediaHero from '@/components/media/mediaHero';
import MediaListing from '@/components/media/mediaListing';

import {client} from '@/sanity/lib/client';
import {
  articlesQuery,
  podcastsQuery
} from '@/sanity/lib/queries';

type SanityPodcastCard = {
  _id: string;
  title: string;
  excerpt: string;
  description: string;
  slug: string;
  image: string;
  publishedAt: string;
  audioUrl: string;
};

type MediaPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type SanityArticleCard = {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  publishedAt: string;
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

export default async function MediaPage({
  params
}: MediaPageProps) {
  const {locale} = await params;

  const articles = await client.fetch<SanityArticleCard[]>(
    articlesQuery,
    {
      locale
    }
  );

  const podcasts = await client.fetch<SanityPodcastCard[]>(
    podcastsQuery,
    {
      locale
    }
  );

  return (
    <main>
      <MediaHero />

      <MediaListing
        articles={articles}
        podcasts={podcasts}
      />
    </main>
  );
}