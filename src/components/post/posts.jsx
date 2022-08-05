import SinglePost from "./singlePost";
import { useState, useEffect, useCallback } from "react";
import { getAllPostsAPI } from "../../API";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(
    () =>
      getAllPostsAPI()
        .then((res) => {
          setPosts(res.data);
        })
        .catch((error) => {
          setPosts([]);
        }),
    [posts]
  );
  useEffect(() => {
    console.log("get posts");
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
