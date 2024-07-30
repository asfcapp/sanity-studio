import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'delit',
  title: 'Délit',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pdf',
      type: 'file',
      title: 'Ficher',
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Brève description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true, // Enables the user to specify the hotspot for the image
      },
    }),
    defineField({
      name: 'articleDeLoi',
      title: 'Article de loi',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent', // Assuming 'blockContent' is a defined type in your schema
          title: 'Description',
        }),
        defineField({
          name: 'files',
          title: 'Files',
          type: 'array',
          of: [
            defineArrayMember({
              title: 'File',
              name: 'file',
              type: 'file',
              options: {
                accept: 'application/pdf',
              },
              validation: (Rule) =>
                Rule.custom((file) => {
                  if (file) {
                    const fileSize = (file as unknown as File).size
                    if (fileSize > 2 * 1024 * 1024) {
                      // 2MB in bytes
                      return 'File size must be 2MB or less'
                    }
                  }
                  return true
                }),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'explication',
      title: 'Explication',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent', // Assuming 'blockContent' is a defined type in your schema
          title: 'Description',
        }),
      ],
    }),
    defineField({
      name: 'dataMaroc',
      title: 'Data Maroc',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent', // Assuming 'blockContent' is a defined type in your schema
          title: 'Description',
        }),
      ],
    }),
    defineField({
      name: 'observation',
      title: 'Observation',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'description',
          type: 'blockContent', // Assuming 'blockContent' is a defined type in your schema
          title: 'Description',
        }),
      ],
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Titre',
          validation: (rule) => rule.required().min(5).max(100),
        }),
        defineField({
          name: 'policy',
          type: 'blockContent', // Assuming 'blockContent' is a defined type in your schema
          title: 'Policy Briefs',
        }),
        defineField({
          name: 'etudes',
          type: 'blockContent', // Assuming 'blockContent' is a defined type in your schema
          title: 'Etudes',
        }),
        defineField({
          name: 'presse',
          type: 'array', // Assuming 'post' is a defined type in your schema
          title: 'Communiqué de presse',
          of: [
            defineArrayMember({
              type: 'reference',
              to: [{type: 'presse'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
