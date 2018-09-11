var friends = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function (require, response) {
    return response.json(friends);
});

app.post("/api/friends", function (require, response) {
    var newFriend = require.body;

    //NEED TO .push somewhere

});

}