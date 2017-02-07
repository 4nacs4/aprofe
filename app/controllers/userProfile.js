var UserModel = require('../models/User');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Utils = require('../services/utils');

exports.findUserProfile = function(req, res) {
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
exports.updateUserProfile = function(req, res) {
    var userData = req.body;
    var userId = userData.userId
    var validate = Utils.validateFields(userData, ['userId']);

    if (validate) {
        return res
                .status(400)
                .send({
            type: "ERROR",
            reason: validate
        });
    }

    User.findOne({_id: userData.userId}, function(err, user) {
        if (err)
            return res.status(500).jsonp(err);
        if (user) {
            user = user.toObject();
            userData = Utils.mergeData(user, userData);
            userData = Utils.dataCleanUp(userData, ['_id', 'id', 'personType', 'status', 'password', 'membership', 'userId', '__v']);

            User.update({_id: userId}, userData, function(err, status) {
                if (err)
                    return res.status(200).jsonp(err);
                if (status > 0) {
                    User.findOne({_id: userId}, function(err, user) {
                        if (err)
                            return res.status(500).jsonp(err);
                        return res
                                .status(200)
                                .send({
                            type: "OK",
                            reason: "Profile Update Success",
                            data: {user: user}
                        });
                    });
                }
                else {
                    return res
                            .status(400)
                            .send({
                        type: "ERROR",
                        reason: "Profile Update Failed!",
                        data: {user: user}
                    });
                }
            })
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
exports.addUser = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var newUser = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        username: req.body.username
    });

    newUser.save(function(err, newuser) {
        if (err)
            return res.status(200).jsonp(err);
        res.status(200).jsonp(newuser);
    });
};