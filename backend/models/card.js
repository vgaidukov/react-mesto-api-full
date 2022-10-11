const mongoose = require('mongoose');
const User = require('./user');

const { urlPattern } = require('../utils/constants');

const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please feel in'],
      minlength: [2, 'Must be at least 2, got {VALUE}'],
      maxlength: [30, 'Must be not more then 30, got {VALUE}'],
    },
    link: {
      type: String,
      validate: {
        validator(value) {
          return urlPattern.test(value);
        },
        message: 'URL is not valid',
      },
      required: [true, 'Please feel in'],
    },
    owner: {
      type: mongoose.ObjectId,
      ref: User,
      required: true,
    },
    likes: {
      type: [mongoose.ObjectId],
      ref: User,
      default: [],

    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toObject:
      { versionKey: false },
  },
);

module.exports = mongoose.model('card', cardSchema);
