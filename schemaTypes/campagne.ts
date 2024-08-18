//MUST ADD REFERENCE TO PARTENAIRES
import { defineType } from 'sanity';
import { AddDocumentIcon } from '@sanity/icons';
import content from './content'; // Importing the content schema to inherit fields

export default defineType({
  name: 'campagne',
  title: 'Campagne',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    // Inherit common fields from the content schema
    ...content.fields,

    // Campaign-specific fields
    {
      name: 'description',
      title: 'Brève Présentation',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
      // A brief description of the campaign, providing a quick overview of its purpose and scope.
      // This field is required and limited to 200 characters to ensure a concise summary.
    },
    {
      name: 'partenaires',
      title: 'Partenaires',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'partenaire' }] }],
      // An array of references to Partner documents.
      // This allows for linking multiple partners to the campaign, enabling flexible and reusable partner associations.
    },
    {
      name: 'donnees',
      title: 'Données de la Campagne',
      type: 'array',
      of: [
        {
          name: 'dataField',
          title: 'Champ de données',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nom du champ',
              type: 'string',
              validation: (Rule) => Rule.required(),
              // A required string field for the name of the data field.
              // It identifies each metric or specific data point related to the campaign.
            },
            {
              name: 'value',
              title: 'Valeur du champ',
              type: 'string',
              // A string field for the value associated with the data field.
              // Allows capturing various campaign-specific information flexibly.
            },
          ],
        },
      ],
      // A flexible array of data fields for campaigns.
      // Enables dynamic and customizable campaign-specific data to be captured.
    },
    {
      name: 'infractions',
      title: 'Infractions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'infraction' }] }],
      // An array of references to Infraction documents.
      // This allows associating specific infractions with the campaign, aiding in the management of related offenses.
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{ type: 'seo' }],
      // Reference to the SEO schema for optimizing the campaign for search engines.
      // Ensures that campaigns are properly configured to improve online visibility.
    },
  ],
});



