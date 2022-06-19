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
