import {defineField, defineType} from 'sanity'
import {TagsIcon} from '@sanity/icons'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
