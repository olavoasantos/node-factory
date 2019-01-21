const tasks = (...arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks('yarn test', 'yarn format', 'yarn lint', 'yarn build'),
  },
};
