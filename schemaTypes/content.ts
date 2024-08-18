import {defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'content',
  title: 'Contenu',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    {
      name: 'title',
      title: 'Titre du contenu',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: 'slug',
      title: "Slug pour l'URL",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'Brouillon', value: 'draft'},
          {title: 'Publié', value: 'published'},
          {title: 'Archivé', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    },
  ],
})