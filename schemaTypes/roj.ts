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
    ...content.fields,
    // Specific fields for ROJ documents
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'partner'}]}],
      validation: (Rule) => Rule.required(),
    },
  ],
})
