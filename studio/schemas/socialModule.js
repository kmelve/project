export default {
  name: 'socialModule',
  title: 'Social Module',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Text for blue button',
      name: 'buttonBlueText',
      type: 'string'
    },
    {
      title: 'Url for blue button link',
      name: 'buttonBlueUrl',
      type: 'url'
    },
    {
      title: 'Text for grey button',
      name: 'buttonGreyText',
      type: 'string'
    },
    {
      title: 'Url for grey button link',
      name: 'buttonGreyUrl',
      type: 'url'
    }
  ]
};
