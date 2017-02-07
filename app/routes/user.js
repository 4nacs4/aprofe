var middleware = require('../services/middleware');
var profile = require('../controllers/userProfile');
var membership = require('../controllers/membership');
var User = express.Router();

//Profile Routes
User.get('/profile/:_id',middleware.ensureAuthenticated, profile.findUserProfile);
User.post('/profile/update',middleware.ensureAuthenticated, profile.updateUserProfile);

//Membership Routes
User.get('/membership/create',middleware.ensureAuthenticated, membership.createMembership);

app.use('/api', User);  