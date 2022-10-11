const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const validator = require('validator');

const UnauthorizedError = require('../utils/errors/UnauthorizedError');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [2, 'Must be at least 2, got {VALUE}'],
      maxlength: [30, 'Must be not more then 30, got {VALUE}'],
      default: 'Жак-Ив Кусто',
    },
    about: {
      type: String,
      minlength: [2, 'Must be at least 2, got {VALUE}'],
      maxlength: [30, 'Must be not more then 30, got {VALUE}'],
      default: 'Исследователь',
    },
    avatar: {
      type: String,
      validate: {
        validator(value) {
          return validator.isURL(value);
        },
        message: 'URL is not valid',
      },
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    },
    email: {
      type: String,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
        message: 'Email is not valid',
      },
      required: [true, 'Please feel in'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please feel in'],
      select: false,
    },
  },
  {
    toObject:
    {
      versionKey: false,
      useProjection: true,
    },
  },
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError());
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError());
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
