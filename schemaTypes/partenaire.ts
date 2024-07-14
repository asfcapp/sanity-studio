import {ComponentIcon} from '@sanity/icons'

export default {
  name: 'partenaire',
  type: 'document',
  title: 'Partenaires',
  icon: ComponentIcon,
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true, // Enables the user to specify the hotspot for the image
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'review',
      type: 'text',
      title: 'Review',
    },
  ],
}
