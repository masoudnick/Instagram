import { Link } from "react-router-dom";
import { useState } from "react";

import "./style.scss";

const SinglePost = ({ post }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [disableCommentButton, setDisableCommentButton] = useState(true);
  const postCaption = post.caption;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const handleChangeComment = (event) => {
    event.target.value.length
      ? setDisableCommentButton(false)
      : setDisableCommentButton(true);
  };

  return (
    <article className="post flex flex-col rounded overflow-hidden bg-white mb-6">
      <div className="post-header pl-4 py-3 flex items-center justify-between">
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
        <div className="post-actions px-2 flex mt-2 pt-1.5 pb-2">
          <div className="grow">
            <button className="like-action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="#262626"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </button>
            <button className="comment-action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="none"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  stroke="#262626"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                ></path>
              </svg>
            </button>
            <button className="share-action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="#262626"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="#262626"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                ></polygon>
              </svg>
            </button>
          </div>
          <button className="bookmark-action">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="#262626"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2px"
              ></polygon>
            </svg>
          </button>
        </div>
        <div className="post-info px-4">
          <div className="likes-views font-xs font-medium mb-2">
            {Number(post.likes).toLocaleString()} likes
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
        <div className="post-comments flex px-4 py-2">
          <form action="" className="flex items-center py-1 w-full">
            <div className="emojis pr-4">
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"
                    fill="#262626"
                  ></path>
                </svg>
              </button>
            </div>
            <textarea
              className="comment-text grow"
              name="comment"
              rows="1"
              placeholder="Add a comment…"
              autoComplete="off"
              autoCorrect="off"
              onChange={handleChangeComment}
            ></textarea>
            <button
              className="font-sm font-medium text-sky-500 disabled:opacity-30"
              type="submit"
              disabled={disableCommentButton}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
