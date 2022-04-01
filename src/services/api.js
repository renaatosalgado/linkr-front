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

async function listAllPosts(_, pageNumber, token) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/posts?pageNumber=${pageNumber}`, config);
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

    const promise = await axios.get(
        `${BASE_URL}/likes/${postId}/total`,
        config
    );
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

async function listTrending(token) {
    const config = createConfig(token);
    const promise = await axios.get(`${BASE_URL}/trends`, config);
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

    const promise = await axios.put(
        `${BASE_URL}/posts/${postId}`,
        body,
        config
    );
    return promise;
}

async function authToken(token) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/auth-token`, config);
    return promise;
}

async function deletePost(postId, token) {
    const config = createConfig(token);

    const promise = await axios.delete(`${BASE_URL}/posts/${postId}`, config);
    return promise;
}

async function rePost(postId, token) {
    const config = createConfig(token);

    const promise = await axios.post(
        `${BASE_URL}/posts/${postId}/repost`,
        null,
        config
    );
    return promise;
}

async function followUser(followId, token) {
    const config = createConfig(token);
    const promise = await axios.post(
        `${BASE_URL}/${followId}/follow`,
        {},
        config
    );
    return promise;
}

async function isFollow(followId, token) {
    const config = createConfig(token);
    const promise = await axios.get(
        `${BASE_URL}/is-follow/${followId}`,
        config
    );
    return promise;
}

async function getComments(postId, token) {
    const config = createConfig(token);

    const promise = await axios.get(
        `${BASE_URL}/posts/${postId}/comments`,
        config
    );
    return promise;
}

async function createComment(text, postId, token) {
    const config = createConfig(token);

    const promise = await axios.post(
        `${BASE_URL}/posts/${postId}/comments`,
        text,
        config
    );
    return promise;
}

async function updatePostsQuantity(lastPostDatetime, token) {
    const config = createConfig(token);

    const promise = await axios.get(
        `${BASE_URL}/posts/update/${lastPostDatetime}`,
        config
    );
    return promise;
}

async function getFollows(token) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/follows`, config);
    return promise;
}

async function isFollowUser(token, userId) {
    const config = createConfig(token);

    const promise = await axios.get(`${BASE_URL}/is-follow-user/${userId}`, config);
    return promise;
}

// async function loadMorePosts(pageNumber, token) {
//     const config = createConfig(token);

//     const promise = await axios.get(`${BASE_URL}/posts?page=${pageNumber}`);

//     return promise;
// }

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
    listTrending,
    deletePost,
    authToken,
    followUser,
    isFollow,
    getComments,
    createComment,
    updatePostsQuantity,
    getFollows,
    rePost,
    isFollowUser,
};

export default api;
