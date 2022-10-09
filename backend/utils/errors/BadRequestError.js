class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.message = 'Ошибка валидации, переданы некорректные данные';
  }
}

module.exports = BadRequestError;
