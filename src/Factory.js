const Faker = require('faker');

const For = require('./helpers/for');
const { isObject, isNumber, isFunction } = require('./helpers/typeCheck');

class Factory {
  constructor(routine) {
    this.routine = routine;
  }

  resolveArgs(_overides, _count) {
    let count = _count;
    let overides = _overides;

    if (
      !isObject(overides) &&
      !isNumber(overides) &&
      !isFunction(overides)
    ) {
      throw new Error('Overide type is not valid');
    }

    if (isNumber(overides)) {
      count = overides;
      overides = {};
    }

    if (isFunction(overides)) {
      overides = overides(Faker);
    }

    if (count < 1) {
      throw new Error('Count should be positive and not zero');
    }

    return { overides, count };
  }

  create(_overides = 1, _count = 1) {
    const { overides, count } = this.resolveArgs(_overides, _count);
    return For(count).map(() => {
      const model = this.routine(Faker);

      return { ...model, ...overides };
    });
  }
}

module.exports = Factory;
