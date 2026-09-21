export type MediaType =
  | 'article'
  | 'podcast'
  | 'video';

export interface MediaItem {
  slug: string;
  type: MediaType;
  date: string;
  image: string;
  translationKey: string;
}
