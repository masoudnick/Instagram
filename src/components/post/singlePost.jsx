import { Link } from "react-router-dom";
import { useState, useCallback, useEffect, memo } from "react";
import Comment from "./comment";
import Actions from "./actions";
import { putLikePost } from "../../API";

import "./style.scss";

const SinglePost = ({ post }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const postCaption = post.caption;
  const [postLike, setPostLike] = useState(post);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleLikePost = useCallback(() => {
    if (postLike.liked) {
      setPostLike((prev) => ({
        ...prev,
        liked: false,
        likes: prev.likes - 1,
      }));
    } else {
      setPostLike((prev) => ({
        ...prev,
        liked: true,
        likes: prev.likes + 1,
      }));
    }
    putLikePost(postLike.id, postLike)
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {});
  }, []);

  // useEffect(() => {
  //   console.log("like post");
  // }, []);

  return (
    <article className="post flex flex-col overflow-hidden bg-white mb-3">
      <div className="post-header pl-3 py-3 flex items-center justify-between">
        <div className="post-profile flex items-center gap-3">
          <Link className="post-avatar" to={`/${post.username}/`}>
            <img
              src={`/images/users/${post.username}.jpg`}
              alt={`${post.fullName}'s profile avatar`}
            />
          </Link>
          <div className="flex flex-col">
            <Link className="font-medium" to="">
              {post.username}
            </Link>
            {post.has_location && (
              <span className="post-location">{post.location}</span>
            )}
          </div>
        </div>
        <button className="post-options pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="1.5" fill="#262626"></circle>
            <circle cx="6" cy="12" r="1.5" fill="#262626"></circle>
            <circle cx="18" cy="12" r="1.5" fill="#262626"></circle>
          </svg>
        </button>
      </div>
      <div className="post-content">
        <img
          className="post-img"
          src={`/images/posts/${post.username}.jpg`}
          alt={post.media_alt}
        />
      </div>
      <div className="post-footer">
        <Actions isLiked={postLike.liked} handleLikePost={handleLikePost} />
        <div className="post-info px-4">
          <div className="likes-views font-xs font-medium mb-2">
            {postLike.likes.toLocaleString()} likes
          </div>
          <div className="post-desc">
            <span className="text-sm mb-2">
              <Link to="" className="hover:underline font-semibold ">
                {post.username}
              </Link>
              &nbsp;
              {isReadMore ? postCaption.slice(0, 70) : postCaption}
              {postCaption.length > 70 && isReadMore && (
                <span onClick={toggleReadMore}>
                  <span>... </span>
                  <span className="text-gray-300 cursor-pointer"> more</span>
                </span>
              )}
            </span>
          </div>
          <div className="post-date mb-4 mt-1 uppercase">
            <time title={post.date}>{post.time}</time>
          </div>
        </div>
        <Comment />
      </div>
    </article>
  );
};

export default memo(SinglePost);
