import {defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'
import content from './content' // Importing the content schema to inherit fields

export default defineType({
  name: 'campagne',
  title: 'Campaign',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    // Campaign-specific fields
    {
      name: 'name',
      title: 'Campaign Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      // This field is required. It must be filled in for each campaign.
    },
    // Inherit fields from the content schema, allowing for selective inheritance.
    // This means we can choose exactly which fields from 'content' we want to include in this schema.
    // This also allows for customization of fields even if they are not in content.ts (LSP principle)
    // Filter content fields to include only title and slug
    {
      // Spread the slug field and explicitly define the type and name
      ...(content.fields.find((field) => field.name === 'slug') ?? {}),
      type: 'slug', // Ensure the type is explicitly defined as 'slug'
      name: 'slug', // Explicitly include the name field
      options: {
        ...(content.fields.find((field) => field.name === 'slug')?.options || {}), // Inherit existing options
        source: 'name', // Change the source to 'name' instead of 'title'
      },
      validation: content.fields.find((field) => field.name === 'slug')?.validation, // Inherit the validation from 'content'
    },
    {
      name: 'image',
      title: 'image',
      type: 'reference',
      to: [{type: 'imageAsset'}],
    },
    {
      name: 'description',
      title: 'Présentation de la campagne',
      type: 'text',
      validation: (Rule) => Rule.required().max(850),
      // A concise overview of the campaign
    },
    {
      name: 'infractions',
      title: 'Infractions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'infraction'}]}],
      // An array of references to Infraction documents associated with the campaign
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{type: 'seo'}],
      // Reference to SEO data for optimizing the campaign's search visibility
    },
  ],
})
