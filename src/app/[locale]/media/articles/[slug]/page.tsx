import {notFound} from "next/navigation";

import {client} from "@/sanity/lib/client";
import {articleBySlugQuery} from "@/sanity/lib/queries";

type ArticlePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const {locale, slug} = await params;

  const article = await client.fetch<Article | null>(
    articleBySlugQuery,
    {
      slug,
      locale
    }
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Article
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-slate-600">
      {article.excerpt}
       </p>

  <div className="mt-10 whitespace-pre-line text-lg leading-8 text-slate-700">
  {article.content}
  </div>
      </div>
    </main>
  );
}