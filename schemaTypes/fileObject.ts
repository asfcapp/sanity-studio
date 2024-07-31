// schemas/fileObject.js

export default {
    name: 'fileObject',
    title: 'File Object',
    type: 'object',
    fields: [
      {
        name: 'fileName',
        title: 'File Name',
        type: 'string',
      },
      {
        name: 'file',
        title: 'File',
        type: 'file',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
    ],
  };
  