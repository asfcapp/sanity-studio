import { defineType, defineArrayMember } from 'sanity';

/**
 * This is the schema definition for the rich text fields used for
 * this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      title: 'Figure',
      name: 'figure',
      type: 'object',
      fields: [
        {
          name: 'image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'caption',
          type: 'string',
        },
      ],
    }),
    defineArrayMember({
      title: 'File',
      name: 'file',
      type: 'file',
      options: {
        accept: 'application/pdf'
      },
      validation: (Rule) =>
        Rule.custom((file) => {
          if (file) {
            const fileSize = (file as unknown as File).size;
            if (fileSize > 2 * 1024 * 1024) { // 2MB in bytes
              return 'File size must be 2MB or less';
            }
          }
          return true;
        }),
      
    }),
  ],
});
