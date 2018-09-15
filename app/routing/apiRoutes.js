var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
            var match = {
                name: "",
                photo: "",
                score: 1000
            };

            var newFriend = req.body;
            var newFriendScore = newFriend.scores;

            var scoreDiff = 0;

            for (var i = 0; i < (friends.length - 1); i++) {
                scoreDiff = 0;

                for (var j = 0; j < friends[i].scores[j]; j++) {
                    scoreDiff += Math.abs(parseInt(newFriendScore[j]) - parseInt(friends[i].scores[j]));

                    if (scoreDiff <= match.score) {
                        match.name = friends[i].name;
                        match.photo = friends[i].photo;
                        match.score = scoreDiff;
                    }
                }
            }

            friends.push(newFriend);
            res.json(match);
    });

};