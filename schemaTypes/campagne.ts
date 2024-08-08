import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'campagne',
  title: 'Campagnes',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'content', title: 'Content Fields'},
    {name: 'seo', title: 'SEO Fields'},
  ],
  fields: [
    // Content Fields
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nom de la Campagne',
      group: 'content',
      validation: (rule) => rule.required(),
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
      name: 'description',
      type: 'text',
      title: 'Brève Présentation',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'partenaire',
      type: 'array',
      title: 'Partenaires',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'partenaire'}],
        }),
      ],
      validation: (rule) =>
        rule.custom((partenaires: {_ref: string}[] | undefined) => {
          if (!Array.isArray(partenaires)) {
            return 'Invalid data format' // Handle cases where the value is not an array
          }
          const uniqueIds = new Set(partenaires.map((p) => p._ref))
          return uniqueIds.size === partenaires.length
            ? true
            : 'Each partner can only be selected once'
        }),
    }),
    defineField({
      name: 'delit',
      type: 'array',
      title: 'Délits',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'delit'}],
        }),
      ],
      validation: (rule) =>
        rule.custom((delits: {_ref: string}[] | undefined) => {
          if (!Array.isArray(delits)) {
            return 'Invalid data format' // Handle cases where the value is not an array
          }
          const uniqueIds = new Set(delits.map((p) => p._ref))
          return uniqueIds.size === delits.length ? true : 'Each partner can only be selected once'
        }),
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
})
