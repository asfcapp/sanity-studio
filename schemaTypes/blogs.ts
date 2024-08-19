import {defineType} from 'sanity'
import {SchemaIcon} from '@sanity/icons'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: SchemaIcon,
  fields: [
    // Reference to the content document
    {
      name: 'contentReference',
      title: 'Contenu',
      type: 'reference',
      to: [{type: 'content'}],
      validation: (Rule) => Rule.required(),
    },

    // Additional fields specific to blog
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readingTime',
      title: 'Temps de lecture',
      type: 'string',
      description: 'Durée estimée de lecture en minutes',
    },
    {
      name: 'publishedAt',
      title: 'Publié le',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
          list: [
              { title: 'Officiel', value: 'official' },
              { title: 'Communauté', value: 'community' },
          ],
      layout: 'radio', // Present options as radio buttons
      defaultValue: 'official' // Valeur par défaut
    },
      validation: (Rule) => Rule.required(), // Ensure a category is selected
    }
  ],
})
