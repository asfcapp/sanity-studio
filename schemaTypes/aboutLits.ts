export default {
  name: 'aboutList',
  type: 'object',
  title: 'About List',
  fieldsets: [
    { name: 'content', title: 'Content Fields' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      fieldset: 'content',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      fieldset: 'content',
    },
  ],
};
