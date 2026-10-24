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