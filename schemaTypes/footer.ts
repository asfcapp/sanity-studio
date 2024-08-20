export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      description: 'The copyright text for the footer.'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
      description: 'The address of the company or organization.'
    },
    {
      name: 'socialLinks',
      title: 'Liens Sociaux',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'socialLink' } }],
      description: 'A list of social media links to display in the footer.'
    }
  ]
})
