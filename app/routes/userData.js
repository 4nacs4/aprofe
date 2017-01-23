var User = require('../models/userData');
var userData = require('../controllers/userData');
var userdata = express.Router();

userdata.route('/userdata')  
  .get(userData.findAllUsers)
  .post(userData.addUser);

app.use('/api', userdata);  