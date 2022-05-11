import SinglePost from "./singlePost";
import { useState, useEffect } from "react";
import { getAllPostsAPI } from "../../API";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPostsAPI()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        setPosts([]);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <SinglePost post={post} key={post.id} />
      ))}
    </>
  );
};

export default Posts;
