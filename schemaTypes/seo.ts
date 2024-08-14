import {defineType} from 'sanity'
import {slugify} from '../utils/slugify' // Importez votre fonction slugify personnalisée

export default defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => slugify(input), // Utilise la fonction slugify personnalisée
      },
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      title: 'SEO Image',
      type: 'reference',
      to: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'reference',
          to: [{type: 'image'}],
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
      ],
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Twitter Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Twitter Description',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Twitter Image',
          type: 'reference',
          to: [{type: 'image'}],
        },
        {
          name: 'cardType',
          title: 'Card Type',
          type: 'string',
          options: {
            list: [
              {title: 'Summary', value: 'summary'},
              {title: 'Summary with Large Image', value: 'summary_large_image'},
              {title: 'Photo', value: 'photo'},
              {title: 'Video', value: 'video'},
              {title: 'Gallery', value: 'gallery'},
            ],
          },
        },
        {
          name: 'site',
          title: 'Site Handle',
          type: 'string',
          description: 'Your Twitter username (e.g., @yourusername)',
        },
        {
          name: 'creator',
          title: 'Creator Handle',
          type: 'string',
          description: 'The Twitter username of the content creator (e.g., @authorusername)',
        },
      ],
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
    },
    {
      name: 'robots',
      title: 'Robots Directives',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Index', value: 'index'},
          {title: 'Noindex', value: 'noindex'},
          {title: 'Follow', value: 'follow'},
          {title: 'Nofollow', value: 'nofollow'},
          // Add other directives as needed
        ],
      },
    },
    // Champs supplémentaires (à personnaliser)
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}], // Supposons un schéma 'author'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}], // Supposons un schéma 'category'
    },
  ],
})
