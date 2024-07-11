import {defineField, defineType} from 'sanity'
import {SchemaIcon} from '@sanity/icons'

export default defineType({
  name: 'blogCategory',
  title: 'Blog category',
  type: 'document',
  icon: SchemaIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (Optional)',
      type: 'text',
    }),
  ],
})
