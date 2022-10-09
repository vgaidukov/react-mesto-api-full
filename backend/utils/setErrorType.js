const BadRequestError = require('./errors/BadRequestError');
const NotFoundError = require('./errors/NotFoundError');
const UnauthorizedError = require('./errors/UnauthorizedError');
const ConflictError = require('./errors/ConflictError');

const setErrorType = (err) => {
  if (err.name === 'ValidationError') {
    return new BadRequestError();
  }
  if (err.name === 'CastError') {
    return new NotFoundError();
  }
  if (err.name === 'UnauthorizedError') {
    return new UnauthorizedError();
  }
  if (err.name === 'ConflictError') {
    return new ConflictError();
  }
  if (err.code === 11000) {
    return new ConflictError();
  }
  return err;
};

module.exports = { setErrorType };
