const expect = require('must');
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

    expect(result).to.equal(1);
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
    const fixture = {number: 1};
    jpl.recordTelemetry(fixture);
    expect(jpl.db.length).to.equal(1);
    expect(jpl.db[0]).to.equal(fixture);

    assert.equal(jpl.db[0].number, '1'); // whoops
  });
});
