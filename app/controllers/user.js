var mongoose = require('mongoose');  
var User  = mongoose.model('User');

exports.findAllUsers = function(req, res) {  
    User.find(function(err, users) {
    if(err) res.send(500, err.message);

    console.log('GET /users')
        res.status(200).jsonp(users);
    });
};
exports.addUser = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var newUser = new User({
		name:    req.body.name,
		lastName: 	  req.body.lastName,
		username: 	  req.body.username
	});

	newUser.save(function(err, newuser) {
		if(err) 
			return res.status(200).jsonp(err);
    	res.status(200).jsonp(newuser);
	});
};