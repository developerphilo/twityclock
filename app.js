
const Twit = require('twit');

const config = require('./config');

const T = new Twit(config);

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();

console.log(today.toLocaleDateString("en-US", options));

// T.post('statuses/update', { status: 'hello world!' }, function (err, data, response) {
//     console.log(data)
// })