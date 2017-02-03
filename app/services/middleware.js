var jwt = require('jwt-simple');  
var moment = require('moment');  

exports.ensureAuthenticated = function(req, res, next) {  
  try {

    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, config.TOKEN_SECRET);

    if(payload.exp <= moment().unix()) {
       return res
           .status(401)
          .send({message: "El token ha expirado"});
    }

    req.user = payload.sub;
    next();
  } catch (err) {
    return res
        .status(403)
        .send({message: "Acceso Denegado"}); 
  }
}