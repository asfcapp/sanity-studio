import {defineType} from 'sanity'
export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      description: 'The copyright text for the footer.',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
      description: 'The address of the company or organization.',
    },
  ],
})
