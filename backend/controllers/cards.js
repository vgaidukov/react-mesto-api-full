const Card = require('../models/card');

const NotFoundError = require('../utils/errors/NotFoundError');
const ForbiddenError = require('../utils/errors/ForbiddenError');

const { setErrorType } = require('../utils/setErrorType');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  req.body.owner = req.user._id;
  const { name, link, owner } = req.body;

  Card.create({
    name,
    link,
    owner,
  })
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      next(setErrorType(err));
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError();
      }
      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenError();
      }

      return card;
    })
    .then((card) => Card.deleteOne(card))

    .then((card) => res.send(card))

    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError();
      }

      res.send(card);
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError();
      }

      res.send(card);
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
