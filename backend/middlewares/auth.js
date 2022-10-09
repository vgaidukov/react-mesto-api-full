const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../utils/errors/UnauthorizedError');

// const auth = (req, res, next) => {
//   if (!req.cookies.jwt) {
//     throw new UnauthorizedError();
//   }

//   const token = req.cookies.jwt;
//   let payload;

//   try {
//     payload = jwt.verify(token, 'very-secret-key');
//   } catch (err) {
//     throw new UnauthorizedError();
//   }

//   req.user = payload;
//   next();
// };

// module.exports = auth;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError();
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, 'very-secret-key');
  } catch (err) {
    throw new UnauthorizedError();
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};

module.exports = auth;
