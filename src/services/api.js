import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

async function createPost(body, token) {
    const config = createConfig(token);

    const promise = await axios.post(`${BASE_URL}/posts`, body, config);
    return promise;
}

async function listAllPosts(token) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/posts`, config);
    return promise;
}

async function logout(token) {
    const config = createConfig(token);

    const promise = await axios.delete(`${BASE_URL}/logout`, config);
    return promise;
}

async function toogleLike(body, token) {
  const config = createConfig(token);

  const promise = await axios.post(`${BASE_URL}/likes/toogle`, body, config);
  return promise;
}

async function totalLikes(postId, token) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/likes/${postId}/total`, config);
    return promise;
}

async function checkLikeUser(postId, token) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/likes/${postId}`, config);
    return promise;
}

const api = {
  createUser,
  login,
  createPost,
  listAllPosts,
  logout,
  toogleLike,
  totalLikes,
  checkLikeUser,
};

export default api;
