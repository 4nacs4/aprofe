var middleware = require('../services/middleware');
var auth = require('../controllers/auth');
var authUser = express.Router();

authUser.route('/signin')
	.post(auth.signIn);

authUser.post('/signup',auth.signUp);

authUser.get('/profile',middleware.ensureAuthenticated,auth.signUp);

app.use('/auth', authUser);  