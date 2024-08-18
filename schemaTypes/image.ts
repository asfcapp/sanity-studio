import { defineType, ComponentIcon } from 'sanity'

export default defineType({
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true, // Enable hotspot functionality for cropping and positioning
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      // Optional field for providing additional context or description
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) => Rule.required(), // Make alt text mandatory for accessibility
      // Essential for describing the image for visually impaired users or users with slow connections
    },
    {
      name: 'credit',
      type: 'string',
      title: 'Credit',
      // Optional field for attributing the image to its creator or source
    },
    {
      name: 'asset',
      title: 'Asset',
      type: 'reference',
      to: [{ type: 'asset' }],
      // References an asset document, which might contain additional information about the image
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
      hidden: true,
      // Automatically generated field storing the image width in pixels
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
      hidden: true,
      // Automatically generated field storing the image height in pixels
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      // Use a built-in icon from @sanity/icons
      icon: ComponentIcon.Image,
    },
  ],
})
