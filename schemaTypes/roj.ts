import {defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import content from './content' // Importing the content schema
export const roj = defineType({
  name: 'roj',
  title: 'ROJ',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    // Inherit all fields from the content schema
    ...content.fields.filter(
      (field) =>
        field.name === 'slug' ||
        field.name === 'title' ||
        field.name === 'description' ||
        field.name === 'body',
    ),
    // Specific fields for ROJ documents
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{type: 'seo'}],
    },
  ],
})
