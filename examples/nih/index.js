module.exports = {
  calcAccel: function(first, second){
    const deltaV = second.velocity - first.velocity;
    const deltaT = second.timestamp - first.timestamp;
    return deltaV / deltaT;
  },
};
