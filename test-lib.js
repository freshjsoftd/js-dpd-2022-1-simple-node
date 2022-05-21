'use strict';

// const cowsay = require('cowsay')
const {create, all, sqrt} = require('mathjs');

const config = {
  epsilon: 1e-12,
  matrix: 'Matrix',
  number: 'number',
  precision: 64,
  predictable: false,
  randomSeed: null,
}

const math = create(all, config);

console.log(math.gcd(125, 35,50));