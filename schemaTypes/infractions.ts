import {defineType} from 'sanity'

export default defineType({
  name: 'infraction',
  title: 'Infraction',
  type: 'document',
  fields: [
    {
      name: 'infractionName',
      title: "Nom de l'infraction",
      type: 'string',
      validation: (Rule) => Rule.required(),
      // Unique identifier for the offense
    },
    {
      name: 'infractionSlug',
      title: "Slug de l'infraction",
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'briefDescription',
      title: 'Brève description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      // Concise explanation of the offense
    },
    {
      name: 'infractionImage',
      title: "Image de l'infraction",
      type: 'reference',
      to: [{type: 'imageAsset'}],
      // Illustration representing the infraction
    },
    {
      name: 'lawArticle',
      title: 'Article(s) de Loi',
      type: 'blockContent',
      // Reference to the relevant article in the legal code
    },
    {
      name: 'explanation',
      title: 'Explication',
      type: 'blockContent',
    },

    {
      name: 'moroccanData',
      title: 'Data Maroc',
      type: 'blockContent',
      // Specific data related to the offense within the Moroccan context
    },
    {
      name: 'observation',
      title: 'Observation',
      type: 'blockContent',
    },
    {
      name: 'publication',
      title: 'Publication',
      type: 'blockContent',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'reference',
      to: [{type: 'seo'}],
    },
  ],
})
