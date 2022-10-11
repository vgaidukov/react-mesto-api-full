const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();

const routerUsers = require('./users');
const routerCards = require('./cards');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');

const { urlPattern } = require('../utils/constants');
const NotFoundError = require('../utils/errors/NotFoundError');

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().regex(urlPattern),
    }),
  }),
  createUser,
);

router.use(auth);

router.use('/users', routerUsers);
router.use('/cards', routerCards);

router.use((res, req, next) => {
  const err = new NotFoundError();
  next(err);
});

module.exports = router;
