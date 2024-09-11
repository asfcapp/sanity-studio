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
    ...content.fields.filter((field) => field.name === 'slug'),
    {
      name: 'imageRoj',
      title: 'Image ROJ',
      type: 'reference',
      to: [{type: 'imageAsset'}],
    },
    // Specific fields for ROJ documents
    {
      name: 'about',
      title: 'About',
      type: 'reference',
      to: [{type: 'aboutUs'}],
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'FAQ',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required().error('A question is required'),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text', // Block content for rich text formatting
              validation: (Rule) => Rule.required().error('An answer is required'),
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{type: 'seo'}],
    },
  ],
})
