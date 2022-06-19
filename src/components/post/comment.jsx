import { useState, useRef, useCallback, memo } from "react";
import Emoji from "../emoji/emoji";

const Comment = () => {
  const [disableCommentButton, setDisableCommentButton] = useState(true);
  const [commentText, setCommentText] = useState("");
  const commentTextareaRef = useRef(null);

  const handleChangeComment = useCallback(() => {
    let commentText = commentTextareaRef.current.value;
    commentText.length
      ? setDisableCommentButton(false)
      : setDisableCommentButton(true);
    setCommentText(commentText);
  }, []);

  return (
    <div className="post-comments relative flex px-4 py-2">
      <form action="" className="flex items-center py-1 w-full">
        <div className="comment-emoji flex items-center pr-3">
          <Emoji
            commentTextareaRef={commentTextareaRef}
            handleChangeComment={handleChangeComment}
          />
        </div>
        <textarea
          className="comment-text grow"
          name="comment"
          rows="1"
          placeholder="Add a comment…"
          autoComplete="off"
          autoCorrect="off"
          onChange={handleChangeComment}
          ref={commentTextareaRef}
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
  );
};

export default memo(Comment);
