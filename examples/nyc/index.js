const db = [];

const pusher = payload => {
  if (typeof payload.number !== "number") {
    return new Error("You dun goofed");
  }
  db.push(payload);
  return null
}

module.exports = {
  calcAccel: (first, second) => {
    const deltaV = second.velocity - first.velocity;
    const deltaT = second.timestamp - first.timestamp;
    return deltaV / deltaT;
  },
  recordTelemetry: (packet) => {
    const err = pusher(packet);
    if (err !== null) {
      throw new Error("argh");
    }
  },
  db,
};
