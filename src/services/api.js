import axios from "axios";
import dotenv from "dotenv";
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

async function listUserPosts(token, userId) {
  const config = createConfig(token);

  const promise = await axios.get(`${BASE_URL}/user/${userId}`, config);
  return promise;
}

async function logout(token) {
  const config = createConfig(token);

  const promise = await axios.delete(`${BASE_URL}/logout`, config);
  return promise;
}

async function searchUser(userName, token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/users?name=${userName}`, config);

  return promise;
}

async function toggleLike(body, token) {
  const config = createConfig(token);

  const promise = await axios.post(`${BASE_URL}/likes/toggle`, body, config);
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

async function hashtagPost(hashtag, token) {
  const config = createConfig(token);

  const promise = await axios.get(
    `${BASE_URL}/posts/hashtag/${hashtag}`,
    config
  );
  return promise;
}

async function getTwoNames(postId, token) {
  const config = createConfig(token);

  const promise = await axios.get(
    `${BASE_URL}/likes/${postId}/two-names`,
    config
  );
  return promise;
}

async function editPost(postId, body, token) {
  const config = createConfig(token);

  const promise = await axios.put(`${BASE_URL}/posts/${postId}`, body, config);
  return promise;
}

async function deletePost(postId, token){
  const config = createConfig(token);

  const promise = await axios.delete(`${BASE_URL}/posts/${postId}`, config)
  return promise
}

const api = {
  createUser,
  login,
  createPost,
  listAllPosts,
  logout,
  toggleLike,
  totalLikes,
  checkLikeUser,
  searchUser,
  hashtagPost,
  editPost,
  listUserPosts,
  getTwoNames,
  deletePost
};

export default api;
