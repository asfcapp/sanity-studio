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
    // Inherit all fields from the content schema
    ...content.fields,

    // Specific fields for Partner documents
    {
      // Partner type selection
      name: 'partnerType',
      title: 'Partner Type',
      type: 'array',
      of: [{ type: 'string' }], // Array of strings
      options: {
        list: ['ROJ', 'Campaign'], // Predefined options for selection
        layout: 'radio', // Display options as radio buttons
      },
      initialValue: [], // Set an empty array as the default value
      validation: (Rule) =>
        Rule.required() // Partner type is required
          .min(1) // Minimum of 1 selection
          .max(2) // Maximum of 2 selections
          .custom((value, context) => {
            // Check for duplicate partner names
            const existingPartners = context.document.parent.children.filter(
              (child) => child.type === 'partner' && child._id !== context.document._id
            );

            const existingPartnerWithSameName = existingPartners.find(
              (partner) => partner.name === value
            );

            if (existingPartnerWithSameName) {
              return 'A partner with this name already exists.';
            }

            return true;
          }),
    },
    {
      // Partner name field
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(), // Partner name is required
    },
    {
      // Slug generation based on partner name
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // Generate slug from the partner name
        maxLength: 96, // Optional: Set a maximum slug length (default is 128)
        isUnique: true, // Ensure unique slugs for partners
      },
    },
    // ... other partner-specific fields can be added here
  ],
});
