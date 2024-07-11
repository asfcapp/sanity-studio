// schemas/home.js
import {HomeIcon} from '@sanity/icons'

export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'aboutdescription',
      type: 'text',
      title: 'About description',
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Rows',
      of: [
        {
          type: 'object',
          name: 'aboutList',
          title: 'About List',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'content',
              type: 'text',
              title: 'Content',
            },
          ],
        },
      ],
    },
  ],
}
