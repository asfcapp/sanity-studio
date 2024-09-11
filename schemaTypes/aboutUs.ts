import {defineType} from 'sanity'
import content from './content' // Importing the content schema

export default defineType({
  name: 'aboutUs',
  title: 'Qui sommes nous',
  type: 'document',
  fields: [
    // Inherit only title slug and body  fields from the content schema
    ...content.fields.filter((field) => field.name === 'title' || field.name === 'slug'),
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'text',
    },
    {
      name: 'vision',
      title: 'Vision',
      type: 'text',
    },
    {
      name: 'values',
      title: 'Values',
      type: 'text',
    },
  ],
})
