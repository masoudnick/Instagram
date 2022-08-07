import { useState, useRef, useCallback, memo } from "react";
import { LargeSpinnerLoading } from "../index";
import Emoji from "../emoji/emoji";

const Comment = () => {
  const [disableCommentButton, setDisableCommentButton] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const commentTextareaRef = useRef(null);

  const handleChangeComment = useCallback(() => {
    let commentText = commentTextareaRef.current.value;
    commentText.length
      ? setDisableCommentButton(false)
      : setDisableCommentButton(true);
    setCommentText(commentText);
    commentTextareaRef.current.style.height =
      commentTextareaRef.current.scrollHeight + "px";
  }, []);

  const handlePostComment = () => {
    setTimeout(() => {
      // setIsLoading(true);
    }, 4000);
  };

  return (
    <div className="post-comments relative flex px-4 py-2">
      <form className="flex items-center py-1 w-full">
        <div className="comment-emoji flex items-center pr-3">
          <Emoji
            commentTextareaRef={commentTextareaRef}
            handleChangeComment={handleChangeComment}
          />
        </div>
        {isLoading === false ? (
          <div className="grow">
            <textarea
              className="comment-text w-full"
              name="comment"
              rows="1"
              placeholder="Add a comment…"
              autoComplete="off"
              autoCorrect="off"
              onChange={handleChangeComment}
              ref={commentTextareaRef}
            ></textarea>
          </div>
        ) : (
          <LargeSpinnerLoading
            width={32}
            height={32}
            isLoading={setIsLoading}
          />
        )}
        <button
          className="font-sm font-medium bg-transparent text-primary disabled:opacity-30"
          type="submit"
          disabled={disableCommentButton}
          onClick={handlePostComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default memo(Comment);
