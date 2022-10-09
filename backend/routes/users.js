const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const {
  getUsers,
  getUser,
  setUserInfo,
  getUserInfo,
  setAvatar,
} = require('../controllers/users');

const { urlPattern } = require('../utils/constants');

router.get('/', getUsers);
router.get('/me', getUserInfo);

router.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.objectId().required(),
    }),
  }),
  getUser,
);

router.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().regex(urlPattern),
    }).unknown(true),
  }),
  setUserInfo,
);

router.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().regex(urlPattern),
    }).unknown(true),
  }),
  setAvatar,
);

module.exports = router;
