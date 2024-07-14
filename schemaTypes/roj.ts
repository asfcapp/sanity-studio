import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const roj = defineType({
  name: 'roj',
  title: 'ROJ',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      //   title: 'titre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required().error('Required to generate a page on the site'),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'sectionTitle',
      type: 'string',
    }),
    defineField({
      name: 'sectionSubTitle',
      type: 'string',
    }),
    defineField({
      name: 'sectionDescription',
      type: 'blockContent',
    }),
  ],
})
