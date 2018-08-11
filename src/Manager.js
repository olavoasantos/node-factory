const Factory = require('./Factory');

const Manager = () => {
  const factories = {};

  const exists = (name) => Object.keys(factories).includes(name);

  const register = (name, routine) => {
    if (!exists(name)) factories[name] = new Factory(routine);
  }

  const run = (name) => {
    if (!exists(name)) {
      throw new Error(`Factory ${name} not defined`);
    }

    return factories[name];
  }

  return { register, factory: run };
};

module.exports = Manager;
