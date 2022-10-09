import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Card from './Card';

function Main({ onMount, onEditProfile, onAddPlace, onEditAvatar, cards, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        onMount();
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <button
                    type="button"
                    aria-label="Изменить аватар"
                    className="button profile__change-avatar-button"
                    onClick={onEditAvatar} />
                <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} />
                <div className="profile__info">
                    <div className="profile__name-container">
                        {/* eslint-disable-next-line */}
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button
                            type="button"
                            aria-label="Изменить"
                            className="profile__edit-button button"
                            onClick={onEditProfile} />
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button
                    type="button"
                    aria-label="Добавить"
                    className="profile__add-button button"
                    onClick={onAddPlace} />
            </section>
            <section>
                <ul className="elements list">
                    {cards.map((element) => (
                        <Card
                            key={element._id}
                            card={element}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;