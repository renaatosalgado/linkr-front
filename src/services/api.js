import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

async function createUser(user) {
    await axios.post(`${BASE_URL}/sign-up`, user);
}

async function login(data) {
    const token = await axios.post(`${BASE_URL}/`, data);
    return token;
}

const api = {
    createUser,
    login,
};

export default api;
