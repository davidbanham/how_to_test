const assert = require('assert');
const jpl = require('..');

describe('calcAccel', () => {
  it('should return the expected result', () => {
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
  });
});

describe('recordTelemetry', () => {
  before('clear database', () => {
    jpl.db.length = 0;
  });

  after('clear database', () => {
    jpl.db.length = 0;
  });

  it('should put data in the database', () => {
    jpl.recordTelemetry('yo dawg!');
    assert.equal(jpl.db.length, 1);
  });
});
