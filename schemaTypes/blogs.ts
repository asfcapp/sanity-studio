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
      title: 'Content',
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
      title: 'Reading Time',
      type: 'string',
      description: 'Estimated reading time in minutes',
    },
    {
      name: 'publishedAt',
      title: 'Published On',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },

    // Blog category: official or community
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Official', value: 'official' },
          { title: 'Community', value: 'community' },
        ],
        layout: 'radio', // Present options as radio buttons
        defaultValue: 'official' // Default value
      },
      validation: (Rule) => Rule.required(), // Ensure a category is selected
    },

    // isDisplayedOnHome field to add the blog to newsfeed 
    {
      name: 'isDisplayedOnHome',
      title: 'Display on Homepage',
      type: 'boolean',
      description: 'Indicates whether this blog post will be displayed on the homepage.',
      initialValue: false, // Default value
      validation: (Rule) => Rule.required(), // Validation to ensure the field is defined
    }
  ],
})
