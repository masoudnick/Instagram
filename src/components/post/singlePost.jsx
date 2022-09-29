import { Link } from "react-router-dom";
import { useState, useEffect, memo } from "react";
import Comment from "./comment";
import Actions from "./actions";
import { putLikePost } from "../../API";

import "./style.scss";

const SinglePost = ({ post }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const postCaption = post.caption;
  const [postObj, setPostObj] = useState(post);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleLikePost = () => {
    if (postObj.liked) {
      console.log("unliked");
      setPostObj((prev) => ({
        ...prev,
        liked: false,
        likes: prev.likes - 1,
      }));
    } else {
      console.log("liked");
      setPostObj((prev) => ({
        ...prev,
        liked: true,
        likes: prev.likes + 1,
      }));
    }
  };

  useEffect(() => {
    putLikePost(postObj.id, postObj);
  }, [postObj]);

  return (
    <article className="post flex flex-col overflow-hidden bg-white mb-3">
      <div className="post-header pl-3 py-3 flex items-center justify-between">
        <div className="post-profile story-avatar flex items-center gap-3">
          {!post.seen && <div className="unseen-story"></div>}
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
        <Actions isLiked={postObj.liked} handleLikePost={handleLikePost} />
        <div className="post-info px-4">
          <div className="likes-views font-xs font-bold mb-2">
            {postObj.likes.toLocaleString()} likes
          </div>
          <div className="post-desc">
            <div className="text-sm mb-2">
              <Link to={post.username} className="hover:underline font-bold">
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
            </div>
            <div className="mb-2">
              <div className="flex flex-row">
                <div className="grow">
                  <Link to="" className="hover:underline font-bold">
                    neymarjr
                  </Link>
                  &nbsp; Awesome
                </div>
                <button type="button">
                  <svg
                    color="#262626"
                    fill="#262626"
                    height="12"
                    viewBox="0 0 24 24"
                    width="12"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                </button>
              </div>
            </div>
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
