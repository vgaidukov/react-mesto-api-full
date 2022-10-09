class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getInitialUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => this._checkServerResponse(res));
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => this._checkServerResponse(res));
    }

    patchUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => this._checkServerResponse(res));
    }

    postNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => this._checkServerResponse(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._checkServerResponse(res));
    }

    putLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(res => this._checkServerResponse(res));
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._checkServerResponse(res));
    }

    changeLikeCardStatus(cardId, newIsLiked) {
        return newIsLiked ? this.putLike(cardId) : this.deleteLike(cardId);
    }

    patchNewAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => this._checkServerResponse(res));
    }

    _checkServerResponse(result) {
        if (result.ok) {
            return result.json();
        }
        return Promise.reject(`Ошибка: ${result.status}`);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
        authorization: '34cb6bbb-dff7-49e7-b585-4fe4d4886a94',
        'Content-Type': 'application/json'
    }
});

export default api;
