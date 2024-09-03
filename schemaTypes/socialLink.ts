import {defineType} from 'sanity'
export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Social Platform',
      type: 'string',
      description: 'Name of the social media platform (e.g., Facebook, Twitter).',
    },
    {
      name: 'url',
      title: 'Social URL',
      type: 'url',
      description: 'The URL of the social media page.',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'reference',
      to: [{type: 'iconMapping'}], // Reference to the icon mapping schema
      description: 'Select an icon for this social platform.',
      options: {
        disableNew: true, // Prevents creating new icons here
      },
    },
  ],
})
