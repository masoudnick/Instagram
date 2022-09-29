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

  const handlePostComment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="post-comments relative flex px-4 py-1">
      <form className="flex items-center w-full h-10" method="POST">
        <div className="comment-emoji flex items-center pr-3">
          <Emoji
            commentTextareaRef={commentTextareaRef}
            handleChangeComment={handleChangeComment}
          />
        </div>
        <div className="flex items-center grow relative h-full">
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
          {isLoading && (
            <LargeSpinnerLoading
              width={32}
              height={32}
              classes={"absolute items-center inset-y-0.5 left-0"}
              styles={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              isLoading={setIsLoading}
            />
          )}
        </div>
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
