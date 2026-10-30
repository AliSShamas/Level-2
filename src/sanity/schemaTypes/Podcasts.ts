import {defineField, defineType} from 'sanity';

export const podcastType = defineType({
  name: 'podcast',
  title: 'Podcast',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string'
        }),

        defineField({
          name: 'ar',
          title: 'Arabic',
          type: 'string'
        })
      ]
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en'
      }
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'text'
        }),

        defineField({
          name: 'ar',
          title: 'Arabic',
          type: 'text'
        })
      ]
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'text'
        }),

        defineField({
          name: 'ar',
          title: 'Arabic',
          type: 'text'
        })
      ]
    }),

    defineField({
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url'
    })
  ]
});