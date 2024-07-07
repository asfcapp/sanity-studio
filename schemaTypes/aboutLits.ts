// schemas/aboutList.js
export default {
  name: 'aboutList',
  type: 'object',
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
}
