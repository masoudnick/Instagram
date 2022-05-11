import Axios from "axios";

export const getAllPostsAPI = () => Axios.get("http://127.0.0.1:8000/posts/");

export const getAllRecomendedAPI = () =>
  Axios.get("http://127.0.0.1:8000/recomended/");

export const getUsersStoryAPI = () =>
  Axios.get("http://127.0.0.1:8000/stories/");
