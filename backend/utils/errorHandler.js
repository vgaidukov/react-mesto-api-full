const InternalServerError = require('./errors/InternalServerError');

const errorHandler = (err, req, res, next) => {
  if (!err.statusCode) {
    const e = new InternalServerError();
    res
      .status(e.statusCode)
      .send({ message: e.message });
    return;
  }
  res
    .status(err.statusCode)
    .send({ message: err.message });
  next();
};

module.exports = { errorHandler };
