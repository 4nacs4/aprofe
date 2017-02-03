var UserModel = require('../models/User');
var mongoose = require('mongoose');  
var User = mongoose.model('User'); 

exports.findUserProfile = function(req, res) {  
    User.findOne({ _id: req.params.id}, function(err, user) {
        if (err) res.status(500).jsonp(err);
        if(user){
	        return res
	            .status(200)
	            .send({
	            	type: "OK",
	            	reason: "Profile Search Success",
	            	data:{user:user}
	            });
	    }
	    else{
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