var mongoose = require('mongoose'),
 	customId = require('mongoose-hook-custom-id'),
    Schema   = mongoose.Schema;

var userData = new Schema({  
  name:    { type: String, required: true },
  lastName:     { type: String, required: true },
  username:     { type: String, required: true, index: {unique: true, dropDups: true} }
});

userData.plugin(customId, {mongoose: mongoose}); 
module.exports = mongoose.model('userData', userData);  