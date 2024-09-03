import {defineType} from 'sanity'

export default defineType({
  name: 'iconMapping',
  title: 'Icon Mapping',
  type: 'document',
  fields: [
    {
      name: 'friendlyName',
      title: 'Friendly Name',
      type: 'string',
      description: 'This is the name that content editors will see (e.g., Home, Twitter).',
    },
    {
      name: 'iconIdentifier',
      title: 'Iconify Identifier',
      type: 'string',
      description: 'This is the actual Iconify icon name (e.g., mdi:home, fa:twitter).',
    },
  ],
})
