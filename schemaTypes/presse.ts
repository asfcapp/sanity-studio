import {defineField, defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'presse',
  title: 'Communiqué de presse',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'blogCategory',
      title: 'Blog categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blogCategory'}}],
    }),
    defineField({
      name: 'columnistCategory',
      title: 'Columnist categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),

    defineField({
      name: 'displayOnHomePage',
      title: 'Display on Home Page',
      type: 'boolean',
      description: 'Check this box if you want this post to be displayed on the home page.',
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
