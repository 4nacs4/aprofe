var User = require('../models/User');
var userData = require('../controllers/User');
var userdata = express.Router();

userdata.route('/userdata')  
  .get(userData.findAllUsers)
  .post(userData.addUser);

app.use('/api', userdata);  