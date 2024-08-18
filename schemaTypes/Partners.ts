import { defineType } from 'sanity';
import content from './content'; // Importing the content schema

// Define the Partner document type
export default defineType({
  // Document type information
  name: 'partner',
  title: 'Partner',
  type: 'document',

  // Document fields
  fields: [
    // Inherit needed  fields from the content schema
    ...content.fields,

    // Specific fields for Partner documents
    {
      // Partner type selection - using checkboxes for multiple selections
      name: 'partnerType',
      title: 'Partner Type',
      type: 'array', // Array to store multiple selections
      of: [{ type: 'string' }], // Each element in the array will be a string
      options: {
        list: ['ROJ', 'Campaign'], // Predefined options for selection
        layout: 'checkbox', // Display options as checkboxes (allows multiple selections)
      },
      initialValue: [], // Set an empty array as the default value (no selections)
      validation: (Rule) =>
        Rule.required() // Partner type is required (at least one checkbox must be selected)
          // No need for min or max validation since checkboxes allow any number of selections
    },
    {
    
    {
     