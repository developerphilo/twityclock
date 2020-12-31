
const Twit = require('twit');

const config = require('./config');

const T = new Twit(config);
var options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
var today = new Date();

const newDate = today.toLocaleDateString("en-US", options);

console.log(newDate)



tweetIt()

setInterval(tweetIt, 1000 * 60 * 60 * 24);

// tweet
function tweetIt() {
    var tweet = {
        status: `${newDate}`
    }

    T.post('statuses/update', tweet, tweeted);


    // callback  function
    function tweeted(err, data, response) {

        if (err) {
            console.log("Something went wrong!")

        } else {
            console.log('it works tada')
        }


    }
}

