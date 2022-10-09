const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then(res => checkServerResponse(res));
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then(res => checkServerResponse(res))
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data;
            }
        })
};

export const validateToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => checkServerResponse(res));
};

const checkServerResponse = (result) => {
    if (result.ok) {
        return result.json();
    }
    return Promise.reject(result.status);
}


