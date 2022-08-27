import Axios from "axios";

export const getAllPostsAPI = async () =>
  await Axios.get("http://127.0.0.1:8000/posts/");

export const getAllRecomendedAPI = async () =>
  await Axios.get("http://127.0.0.1:8000/recomended/");

export const getUsersStoryAPI = async () =>
  await Axios.get("http://127.0.0.1:8000/stories/");

export const putLikePost = async (podtId, post) => {
  await Axios.put(`http://localhost:8000/posts/${podtId}`, post);
};
export const getPost = async (podtId) =>
  await Axios.get(`http://127.0.0.1:8000/posts/${podtId}`);

export const getDirectMessages = async (page) =>
  await Axios.get(`http://127.0.0.1:8000/direct?_page=${page}&_limit=7`);

export const getUsers = async ({ username }) =>
  await Axios.get(`http://127.0.0.1:8000/users?username=${username}`);

export const saveUser = async ({ user }) =>
  await Axios.post(`http://127.0.0.1:8000/users`, user);

export const getRecentSearchesApi = async () =>
  await Axios.get(`http://127.0.0.1:8000/recent_searches`);
