import AboutPreview from '@/components/home/AboutPreview';
import ContactSection from '@/components/home/ContactSection';
import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import MediaPreview, {
  type SanityArticleCard,
  type SanityPodcastCard
} from '@/components/home/MediaPreview';
import Testimonials from '@/components/home/Testimonials';
import ThreePillars from '@/components/home/ThreePillars';

import {client} from '@/sanity/lib/client';
import {
  articlesQuery,
  podcastsQuery
} from '@/sanity/lib/queries';

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params
}: HomePageProps) {
  const {locale} = await params;

  const articles =
    await client.fetch<SanityArticleCard[]>(
      articlesQuery,
      {
        locale
      }
    );

  const podcasts =
    await client.fetch<SanityPodcastCard[]>(
      podcastsQuery,
      {
        locale
      }
    );

  return (
    <main>
      <Hero />
      <IntroSection />
      <AboutPreview />
      <ThreePillars />

      <MediaPreview
        articles={articles}
        podcasts={podcasts}
      />

      <Testimonials />
      <ContactSection />
    </main>
  );
}