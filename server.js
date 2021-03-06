express = require("express"),  
app = express(),
bodyParser  = require("body-parser"),
methodOverride = require("method-override"),
mongoose = require('mongoose'),
cors = require('cors'),
config = require('./app/config/config');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(cors());  


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,     Content-Type, Accept");
  next();
});



// REGISTER OUR ROUTES -------------------------------

require('./app/routes/auth');
require('./app/routes/user');


mongoose.connect(config.mongoServices, function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
    //userData.drop();
  });
});

