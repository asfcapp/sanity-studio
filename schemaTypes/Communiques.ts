import {defineField, defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'presse',
  title: 'Communiqué de presse',
  type: 'document',
  icon: AddDocumentIcon,
  groups: [
    {name: 'content', title: 'Content Fields'},
    {name: 'seo', title: 'SEO Fields'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',

      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',

      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',

      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'content',
    }),
    defineField({
      name: 'blogCategory',
      title: 'Blog categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blogCategory'}}],
      group: 'content',
    }),
    defineField({
      name: 'columnistCategory',
      title: 'Columnist categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      group: 'content',
    }),

    defineField({
      name: 'displayOnHomePage',
      title: 'Display on Home Page',
      type: 'boolean',
      description: 'Check this box if you want this post to be displayed on the home page.',
      group: 'content',
    }),
    // SEO Fields
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          validation: (Rule) => Rule.required().max(60),
        }),
        defineField({
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          validation: (Rule) =>
            Rule.required()
              .min(70)
              .max(160)
              .warning('Meta Description should be between 70 and 160 characters.'),
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.unique(),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
