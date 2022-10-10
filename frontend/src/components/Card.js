import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext'

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__delete button ${isOwn && 'element__delete_visible'}`
    );
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `element__like button ${isLiked && 'element__like_active'}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="element">
            <button
                type="button"
                aria-label="Удалить"
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}>
            </button>
            <img
                src={card.link}
                alt={card.name}
                className="element__image"
                onClick={handleClick} />
            <div className="element__label">
                {/* eslint-disable-next-line */}
                <h2 className="element__name">{card.name}</h2>
                <div className="element__likes">
                    <button type="button" aria-label="Лайк" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
};

export default Card;