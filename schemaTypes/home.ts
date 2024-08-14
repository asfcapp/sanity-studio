import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'


export default ({
  name: 'home',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
  groups: [
    {name: 'content', title: 'Content Fields'},
    {name: 'seo', title: 'SEO Fields'},
  ],
  fields: [
    // Title and Slug
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

    // Generic Sections
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      group: 'content',
      of: [
        defineField({
          name: 'section',
          type: 'object',
          title: 'Section',
          fields: [
            defineField({
              name: 'sectionTitle',
              type: 'string',
              title: 'Section Title',
              validation: (Rule) => Rule.required().min(5).max(100),
            }),
            defineField({
              name: 'sectionSubTitle',
              type: 'string',
              title: 'Section Subtitle',
              validation: (Rule) => Rule.max(200),
            }),
            defineField({
              name: 'sectionDescription',
              type: 'blockContent',
              title: 'Section Description',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subsections',
              type: 'array',
              title: 'Subsections',
              of: [
                defineField({
                  name: 'subsection',
                  type: 'object',
                  title: 'Subsection',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                      title: 'Subsection Title',
                      validation: (Rule) => Rule.required().min(5).max(100),
                    }),
                    defineField({
                      name: 'description',
                      type: 'text',
                      title: 'Subsection Description',
                      validation: (Rule) => Rule.required().min(50).max(500),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});