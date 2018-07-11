const db = [];

module.exports = {
  calcAccel: (first, second) => {
    const deltaV = second.velocity - first.velocity;
    const deltaT = second.timestamp - first.timestamp;
    return deltaV / deltaT;
  },
  recordTelemetry: (packet) => {
    db.push(packet);
  },
  db,
};
