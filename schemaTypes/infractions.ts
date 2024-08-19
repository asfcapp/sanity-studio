import { defineType } from 'sanity';

export default defineType({
  name: 'infraction',
  title: 'Infraction',
  type: 'document',
  fields: [
    {
      name: 'offenseName',
      title: 'Offense Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      // Unique identifier for the offense
    },
    {
      name: 'briefDescription',
      title: 'Brief Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      // Concise explanation of the offense
    },
    {
      name: 'lawArticle',
      title: 'Law Article',
      type: 'blockContent',
      // Reference to the relevant article in the legal code
    },
    {
      name: 'moroccanData',
      title: 'Moroccan Data',
      type: 'array',
      of: [{ type: 'blockContent' }], // Adjust the type based on the specific data you need
      // Specific data related to the offense within the Moroccan context
    },
  ],
});
