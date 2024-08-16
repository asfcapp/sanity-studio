import {defineType} from 'sanity'

export default defineType({
  name: 'image',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      // Comment: This field is used to provide additional context or description for the image.
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) => Rule.required(), // Make alt text required for accessibility
      // Comment: This field is essential for accessibility. It provides a textual description of the image for users who cannot see it, such as visually impaired users or users with slow internet connections.
    },
    {
      name: 'credit',
      type: 'string',
      title: 'Credit',
      // Comment: This field is used to attribute the image to its creator or source.
    },
    {
      name: 'asset',
      title: 'Asset',
      type: 'reference',
      to: [{type: 'asset'}], // Assuming you have an asset type for managing image files
      // Comment: This field references an asset document, which might contain additional information about the image, such as its original file, dimensions, or metadata.
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
      hidden: true, // Hide from the studio interface
      // Comment: This field stores the width of the image in pixels. It's automatically generated and hidden from the studio interface.
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
      hidden: true,
      // Comment: This field stores the height of the image in pixels. It's automatically generated and hidden from the studio interface.
    },
  ],
})
