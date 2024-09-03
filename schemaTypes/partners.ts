import {defineType} from 'sanity'

// Define the Partner document type
export default defineType({
  // Document type information
  name: 'partner',
  title: 'Partner',
  type: 'document',

  // Document fields
  fields: [
    {
      // Partner type selection - using checkboxes for multiple selections
      name: 'partnerType',
      title: 'Partner Type',
      type: 'array', // Array to store multiple selections
      of: [{type: 'string'}], // Each element in the array will be a string
      options: {
        list: ['ROJ', 'Campagne'], // Predefined options for selection
        layout: 'checkbox', // Display options as checkboxes (allows multiple selections)
      },
      initialValue: [], // Set an empty array as the default value (no selections)
      validation: (Rule) => Rule.required(), // Partner type is required (at least one checkbox must be selected)
      // No need for min or max validation since checkboxes allow any number of selections
    },
    {
      // Partner name field
      name: 'name',
      title: 'Nom du partenaire',
      type: 'string',
      validation: (Rule) => Rule.required(), // Name is required
    },
    //Might need its proper descrption
    {
      name: 'description',
      title: 'Description du partenaire',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image du partenaire',
      type: 'reference',
      to: [{type: 'imageAsset'}],
    },
    {
      name: 'socialLink',
      title: 'Lien social',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'socialLink'}]}],
    },
  ],
})
