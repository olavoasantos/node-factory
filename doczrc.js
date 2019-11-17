export default {
  title: 'Node Factory',
  description: 'Easy way to create random data for your tests',
  typescript: true,
  menu: [
    'Main',
    {
      name: 'factory API',
      menu: [
        'factory',
        'create',
        'only',
        'make',
        'state',
        'seed',
        'onInsert',
        'onHydrate',
      ]
    },
    {
      name: 'enumFactory API',
      menu: [
        'enumFactory',
        'get',
        'unique',
      ]
    },
    'Types',
    { name: 'Examples' },
    'Update from v0.2.6',
    {
      name: 'GitHub',
      menu: [
        { name: 'Repo', href: 'https://github.com/olavoasantos/node-factory/' },
        { name: 'Issues', href: 'https://github.com/olavoasantos/node-factory/issues' },
        { name: 'Pull requests', href: 'https://github.com/olavoasantos/node-factory/pulls' },
      ],
    },
  ],
  themeConfig: {
    styles: {
      h1: {
        fontSize: 50,
      },
    },
  },
};
