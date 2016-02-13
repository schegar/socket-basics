var moment = require("./moment.js");
var now = moment();

console.log(now.format("X"));
console.log(now.valueOf());

var timestamp = 1455364307237;

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format("HH:mm:ss"));

// console.log(now.format());
// now.subtract(1, "year");
// console.log(now.format());
// console.log(now.format("hh:mm:ss"));