var friends = require("../data/friends");

module.exports = function(app) {

app.GET("/api/friends", function (require, response) {
    return response.json(friends);
});

app.POST("/api/friends", function (require, response) {
    var newFriend = require.body;

    //NEED TO .push somewhere

});

}