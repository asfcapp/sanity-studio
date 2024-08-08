import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
  name: 'delit',
  title: 'Délit',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'content', title: 'Content Fields' },
    { name: 'seo', title: 'SEO Fields' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Brève description',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      group: 'content',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'articleDeLoi',
      title: 'Article de loi',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent',
          title: 'Description',
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            {
              name: 'fileObject',
              title: 'File Object',
              type: 'object',
              fields: [
                {
                  name: 'fileName',
                  title: 'File Name',
                  type: 'string',
                },
                {
                  name: 'file',
                  title: 'File',
                  type: 'file',
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'explication',
      title: 'Explication',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent',
          title: 'Description',
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            {
              name: 'fileObject',
              title: 'File Object',
              type: 'object',
              fields: [
                {
                  name: 'fileName',
                  title: 'File Name',
                  type: 'string',
                },
                {
                  name: 'file',
                  title: 'File',
                  type: 'file',
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'dataMaroc',
      title: 'Data Maroc',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent',
          title: 'Description',
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            {
              name: 'fileObject',
              title: 'File Object',
              type: 'object',
              fields: [
                {
                  name: 'fileName',
                  title: 'File Name',
                  type: 'string',
                },
                {
                  name: 'file',
                  title: 'File',
                  type: 'file',
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'observation',
      title: 'Observation',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent',
          title: 'Description',
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            {
              name: 'fileObject',
              title: 'File Object',
              type: 'object',
              fields: [
                {
                  name: 'fileName',
                  title: 'File Name',
                  type: 'string',
                },
                {
                  name: 'file',
                  title: 'File',
                  type: 'file',
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'policy',
          type: 'blockContent',
          title: 'Policy Briefs',
        }),
        defineField({
          name: 'etudes',
          type: 'blockContent',
          title: 'Etudes',
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            {
              name: 'fileObject',
              title: 'File Object',
              type: 'object',
              fields: [
                {
                  name: 'fileName',
                  title: 'File Name',
                  type: 'string',
                },
                {
                  name: 'file',
                  title: 'File',
                  type: 'file',
                },
                {
                  name: 'author',
                  title: 'Author',
                  type: 'string',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'presse',
          type: 'array',
          title: 'Communiqué de presse',
          of: [
            defineArrayMember({
              type: 'reference',
              to: [{ type: 'presse' }],
            }),
          ],
        }),
      ],
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
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.unique(),
        }),
      ],
    }),
  ],
})
