import {defineType} from 'sanity'
import {slugify} from '../utils/slugify' // Importez votre fonction slugify centralisée

export const author = defineType({
  name: 'author',
  title: 'Auteur',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input) => slugify(input), // Utilise la fonction slugify centralisée
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{type: 'image'}],
    },
    {
      name: 'social',
      title: 'Social',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        // Add more social media fields as needed
      ],
    },
    {
      name: 'coAuthors',
      title: 'Co-Authors',
      type: 'array',
      of: [{type: 'authorReference'}],
    },
  ],
})

export const authorReference = defineType({
  name: 'authorReference',
  title: 'Author Reference',
  type: 'reference',
  to: [{type: 'author'}],
  options: {
    filter: 'name != $currentAuthor',
  },
})
