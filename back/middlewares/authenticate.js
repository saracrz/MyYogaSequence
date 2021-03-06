const jwt = require("jsonwebtoken");
const UserModel = require('../models/users.model')

const authenticate = (req, res, next) => {
  jwt.verify(req.headers.access_token, 'secret', (err, token) => {
    
    if (err) { res.status(403).json({ error: 'Token not valid' }) }
    
    UserModel.findOne({ email: token.email }).then(user => {
      console.log(user);
      res.locals.user = user;
      next();
    });
  });
}

module.exports = authenticate;