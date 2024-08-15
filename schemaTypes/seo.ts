import { defineType } from 'sanity'
import { slugify } from '../utils/slugify' // Import custom function to format SEO friendly URLs

export default defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      // Add validation for maximum length (e.g., 60 characters)
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      // Add validation for maximum length (e.g., 150-160 characters)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => slugify(input), // Use custom slugify function
      },
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      // Consider adding a validation for maximum number of keywords
    },
    {
      name: 'image',
      title: 'SEO Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // Add validation for image dimensions (e.g., minimum width and height)
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
          // Consider inheriting from SEO title if not overridden
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          // Consider inheriting from meta description if not overridden
        },
        {
          name: 'image',
          title: 'Image',
          type: 'reference',
          to: [{ type: 'image' }],
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          // Consider using a computed field based on the document's URL
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
          // Consider inheriting from SEO title or Open Graph title if not overridden
        },
        {
          name: 'description',
          title: 'Twitter Description',
          type: 'text',
          // Consider inheriting from meta description or Open Graph description if not overridden
        },
        {
          name: 'image',
          title: 'Twitter Image',
          type: 'reference',
          to: [{ type: 'image' }],
        },
        {
          name: 'cardType',
          title: 'Card Type',
          type: 'string',
          options: {
            list: [
              { title: 'Summary', value: 'summary' },
              { title: 'Summary with Large Image', value: 'summary_large_image' },
              { title: 'Photo', value: 'photo' },
              { title: 'Video', value: 'video' },
              { title: 'Gallery', value: 'gallery' },
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
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Index', value: 'index' },
          { title: 'Noindex', value: 'noindex' },
          { title: 'Follow', value: 'follow' },
          { title: 'Nofollow', value: 'nofollow' },
          // Add other directives as needed
        ],
      },
    },
    // Additional fields (customize as needed)
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },// Normallywe have this field in content.js (let's keep it while this)
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }], // Assuming an 'author' schema
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }], // Assuming a 'category' schema
    },
  ],
})
