import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
  groups: [
    {name: 'content', title: 'Content Fields'},
    {name: 'seo', title: 'SEO Fields'},
  ],
  fields: [
    // Content Fields
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
      group: 'content',
      validation: (Rule: {
        required: () => {
          (): any
          new (): any
          min: {
            (arg0: number): {(): any; new (): any; max: {(arg0: number): any; new (): any}}
            new (): any
          }
        }
      }) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The unique identifier for this page. This is used in the URL.',
      group: 'content',
      options: {
        source: 'sectionTitle',
        maxLength: 96,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
      group: 'content',
      validation: (Rule: {
        required: () => {
          (): any
          new (): any
          min: {
            (arg0: number): {(): any; new (): any; max: {(arg0: number): any; new (): any}}
            new (): any
          }
        }
      }) => Rule.required().min(10).max(200),
    },
    {
      name: 'aboutdescription',
      type: 'text',
      title: 'About Description',
      group: 'content',
      validation: (Rule: {
        required: () => {
          (): any
          new (): any
          min: {
            (arg0: number): {(): any; new (): any; max: {(arg0: number): any; new (): any}}
            new (): any
          }
        }
      }) => Rule.required().min(50).max(500),
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Rows',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'aboutList',
          title: 'About List',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule: {
                required: () => {
                  (): any
                  new (): any
                  min: {
                    (arg0: number): {(): any; new (): any; max: {(arg0: number): any; new (): any}}
                    new (): any
                  }
                }
              }) => Rule.required().min(5).max(100),
            },
            {
              name: 'content',
              type: 'text',
              title: 'Content',
              validation: (Rule: {
                required: () => {
                  (): any
                  new (): any
                  min: {
                    (arg0: number): {(): any; new (): any; max: {(arg0: number): any; new (): any}}
                    new (): any
                  }
                }
              }) => Rule.required().min(10).max(300),
            },
          ],
        },
      ],
    },

    // SEO Fields
    {
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
    },
  ],
}
