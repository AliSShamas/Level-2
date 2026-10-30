import {notFound} from 'next/navigation';

import {client} from '@/sanity/lib/client';
import {podcastBySlugQuery} from '@/sanity/lib/queries';

type PodcastPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

type Podcast = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  image: string;
  publishedAt: string;
  audioUrl: string;
};

export default async function PodcastPage({
  params
}: PodcastPageProps) {
  const {locale, slug} = await params;

  const podcast = await client.fetch<Podcast | null>(
    podcastBySlugQuery,
    {
      slug,
      locale
    }
  );

  if (!podcast) {
    notFound();
  }

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Podcast
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          {podcast.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          {podcast.excerpt}
        </p>

        <div className="mt-10 whitespace-pre-line text-lg leading-8 text-slate-700">
          {podcast.description}
        </div>

        {podcast.audioUrl && (
          <div className="mt-10">
            <a
              href={podcast.audioUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-green-700 px-6 py-3 font-medium text-white"
            >
              Listen to episode
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
