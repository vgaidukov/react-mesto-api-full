const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../utils/errors/UnauthorizedError');

const auth = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError();
  }

  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, 'very-secret-key');
  } catch (err) {
    throw new UnauthorizedError();
  }

  req.user = payload;
  next();
};

module.exports = auth;
