var UserModel = require('../models/User');
var mongoose = require('mongoose');  
var User = mongoose.model('User');  
var service = require('../services/services');

exports.signUp = function(req, res) {  
	var newUser = new User(req.body);
    newUser.save(function(err, newuser) {
	    if(err) 
			return res.status(500).jsonp(err);
		return res
	        .status(200)
	        .send({
	        	type: "OK",
	        	reason: "SignUp Success",
	        	data:{user:newuser},
	        	token: service.createToken(newuser)
	        });
	});
};

exports.signIn = function(req, res) {  
 	User.findOne({ fullId: req.body.id}, function(err, user) {
        if (err) res.status(500).jsonp(err);
        if(user){
	        user.comparePassword(req.body.password, function(err, isMatch) {
	            if (err) res.status(500).jsonp(err);
	            if(isMatch){
			        return res
			            .status(200)
			            .send({
			            	type: "OK",
			            	reason: "Login Success",
			            	data:{user:user},
			            	token: service.createToken(user)
			            });
		        }
		        else{
		        	 return res
			            .status(404)
			            .send({
			            	type: "ERROR",
			            	reason: "Login Incorrect"
			            });
		        }
	        });
	    }
	    else{
        	 return res
	            .status(404)
	            .send({
	            	type: "ERROR",
	            	reason: "User Not Found"
	            });
        }
        
   	});  
};