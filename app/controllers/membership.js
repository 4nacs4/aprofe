var UserModel = require('../models/User');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.createMembership = function(req, res) {
    User.findOne({_id: req.params._id}, function(err, user) {
        if (err)
            res.status(500).jsonp(err);
        if (user) {
            return res
                    .status(200)
                    .send({
                type: "OK",
                reason: "Profile Search Success",
                data: {user: user}
            });
        }
        else {
            return res
                    .status(404)
                    .send({
                type: "ERROR",
                reason: "User profile Not Found"
            });
        }

    });
};
