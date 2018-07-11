const assert = require('assert');
const jpl = require('..');

const fix1 = {
  velocity: 1,
  timestamp: 1,
};

const fix2 = {
  velocity: 2,
  timestamp: 2,
};

const result = jpl.calcAccel(fix1, fix2);

assert.equal(result, 1);
