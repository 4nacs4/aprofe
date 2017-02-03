var middleware = require('../services/middleware');
var userProfile = require('../controllers/userProfile');
var User = express.Router();

User.get('/profile/:id',middleware.ensureAuthenticated, userProfile.findUserProfile);

app.use('/api', User);  