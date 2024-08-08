import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const roj = defineType({
  name: 'roj',
  title: 'ROJ',
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
      title: 'Title',
      group: 'content',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required().error('Required to generate a page on the site'),
      group: 'content',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      group: 'content',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'content',
    }),
    defineField({
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
      group: 'content',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'sectionSubTitle',
      type: 'string',
      title: 'Section Subtitle',
      group: 'content',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'sectionDescription',
      type: 'blockContent',
      title: 'Section Description',
      group: 'content',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) =>
        Rule.custom((partenaires) => {
          if (!Array.isArray(partenaires)) return true // Return true if there's no array to validate

          // Define a type for the array items
          type PartenaireReference = {
            _ref: string
          }

          const ids = partenaires.map((p) => (p as PartenaireReference)._ref) // Cast to expected type
          const uniqueIds = new Set(ids)

          return ids.length === uniqueIds.size || 'Each partenaire must be unique'
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

// User Guide
/*
1. Title: The main title for the document. Must be between 5 and 100 characters.
2. Slug: A unique identifier for the page, used in the URL. This is generated from the title and must be unique.
3. Subtitle: A brief subtitle for the document. Must be up to 200 characters.
4. Image: An image associated with the document.
5. Section Title: The main title for the section. Must be between 5 and 100 characters.
6. Section Subtitle: A brief subtitle for the section. Must be up to 200 characters.
7. Section Description: Detailed description about the section.
8. Partenaires: A list of references to partner documents.
9. SEO Fields:
   - Meta Title: The title for SEO purposes. Must be up to 60 characters.
   - Meta Description: A brief description for SEO purposes. Must be between 70 and 160 characters.
   - Keywords: An array of keywords for SEO. Each keyword must be unique.
*/
