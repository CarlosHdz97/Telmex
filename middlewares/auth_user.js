const User = require('../models').User;
module.exports = function (req, res, next) {
  if(!req.originalUrl.includes('/home')) return next();
  if(req.session.userId) return next();
  res.redirect('/sessions');
}
