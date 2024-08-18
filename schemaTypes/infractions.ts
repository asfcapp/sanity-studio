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
      type: 'string',
      // Reference to the relevant article in the legal code
    },
    {
      name: 'moroccanData',
      title: 'Moroccan Data',
      type: 'array',
      of: [{ type: 'string' }], // Adjust the type based on the specific data you need
      // Specific data related to the offense within the Moroccan context
    },
    {
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [{ type: 'file' }], // Adjust the type to 'reference' if you want to reference existing publication documents
      // Relevant documents (like PDFs) related to the offense
    },
    {
      name: 'campaign',
      title: 'Campaign',
      type: 'reference',
      to: [{ type: 'campaign' }],
      // The campaign to which this infraction belongs
    },
  ],
});
