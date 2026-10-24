import {defineField, defineType} from 'sanity';

export const articleType = defineType({
  name: 'article',
  title: 'Article',
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
      name: 'content',
      title: 'Content',
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
    })
  ]
});