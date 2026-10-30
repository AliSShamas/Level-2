export const articleBySlugQuery = `
  *[
    _type == "article" &&
    slug.current == $slug
  ][0] {
    "title": select(
      $locale == "ar" => title.ar,
      title.en
    ),

    "excerpt": select(
      $locale == "ar" => excerpt.ar,
      excerpt.en
    ),

    "content": select(
      $locale == "ar" => content.ar,
      content.en
    ),

    "slug": slug.current
  }
`;

export const articlesQuery = `
  *[
    _type == "article"
  ] | order(publishedAt desc) {
    _id,

    "title": select(
      $locale == "ar" => title.ar,
      title.en
    ),

    "excerpt": select(
      $locale == "ar" => excerpt.ar,
      excerpt.en
    ),

    "slug": slug.current,

    "image": image.asset->url,

    publishedAt
  }
`;
export const podcastsQuery = `
  *[
    _type == "podcast"
  ] | order(publishedAt desc) {
    _id,

    "title": select(
      $locale == "ar" => title.ar,
      title.en
    ),

    "excerpt": select(
      $locale == "ar" => excerpt.ar,
      excerpt.en
    ),

    "description": select(
      $locale == "ar" => description.ar,
      description.en
    ),

    "slug": slug.current,

    "image": image.asset->url,

    publishedAt,

    audioUrl
  }
`;
export const podcastBySlugQuery = `
  *[
    _type == "podcast" &&
    slug.current == $slug
  ][0] {
    "title": select(
      $locale == "ar" => title.ar,
      title.en
    ),

    "excerpt": select(
      $locale == "ar" => excerpt.ar,
      excerpt.en
    ),

    "description": select(
      $locale == "ar" => description.ar,
      description.en
    ),

    "slug": slug.current,

    "image": image.asset->url,

    publishedAt,

    audioUrl
  }
`;