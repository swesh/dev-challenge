
var Consumer = require("./Consumer");
var App = (function () {
    var client;
    function subscribe() {
        client.subscribe("/fx/prices", Consumer.feedData);
    }
    function onError(error) {
        console.log("There is an error while getting feeds..! ",error.headers.message);
    }
    this.init = function () {
        client = Stomp.client("ws://localhost:8011/stomp");
        return this;
    },
    this.getLiveFeeds = function () {
        client.connect("/fx/prices", subscribe, onError);
    }    
    return this;
})();
module.exports = App;