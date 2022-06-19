import { useState, useRef, memo } from "react";
import useClickOutside from "../../hooks/useOutsideClick";

import "./style.scss";

const mostPopularemoji = [
  "😂",
  "😮",
  "😍",
  "😢",
  "👏",
  "🔥",
  "🎉",
  "💯",
  "❤️",
  "🤣",
  "🥰",
  "😘",
  "😭",
  "😊",
];
const smileys = [
  "😀",
  "🤣",
  "😅",
  "😊",
  "😍",
  "😗",
  "☺",
  "🤩",
  "😐",
  "🙄",
  "😥",
  "😯",
  "😪",
  "😮",
  "😏",
  "😑",
  "🤔",
  "🙂",
  "😙",
  "😘",
  "😋",
  "😆",
  "😃",
  "😁",
  "😂",
  "😄",
  "😉",
  "😎",
  "🥰",
  "😚",
  "🤗",
  "🤨",
  "😶",
  "😣",
  "🤐",
  "😫",
];

const Emoji = ({ commentTextareaRef, handleChangeComment }) => {
  const [isEmojiDropdownActive, setEmojiDropdownActive] = useState(false);
  const openEmojiDropdownButton = useRef(null);
  const openEmojiDropdown = useRef(null);
  const handleActiveEmojiDropdown = () => {
    setEmojiDropdownActive((prev) => !prev);
    commentTextareaRef.current.focus();
  };
  const handleClickEmojiButton = (e) => {
    let emoji = e.target.innerHTML;
    commentTextareaRef.current.value += emoji;
    handleChangeComment();
  };
  useClickOutside(
    openEmojiDropdownButton,
    openEmojiDropdown,
    setEmojiDropdownActive
  );
  return (
    <>
      <button
        type="button"
        onClick={handleActiveEmojiDropdown}
        ref={openEmojiDropdownButton}
      >
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
      <div
        className={
          isEmojiDropdownActive
            ? "emoji-dropdown dropdown dropdown-top active"
            : "emoji-dropdown dropdown dropdown-top"
        }
        ref={openEmojiDropdown}
      >
        <div className="dropdown-arrow"></div>
        <div className="dropdown-inner">
          <div className="emoji-group">
            <p className="emoji-type">Most Popular</p>
            <div className="flex flex-row flex-wrap items-stretch">
              {mostPopularemoji.map((emoji, index) => {
                return (
                  <button
                    key={index}
                    className="emoji flex items-center justify-center"
                    type="button"
                    onClick={handleClickEmojiButton}
                  >
                    {emoji}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="emoji-group">
            <p className="emoji-type">Smileys & People</p>
            <div className="flex flex-row flex-wrap items-stretch">
              {smileys.map((emoji, index) => {
                return (
                  <button
                    key={index}
                    className="emoji flex items-center justify-center"
                    type="button"
                    onClick={handleClickEmojiButton}
                  >
                    {emoji}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bottom-shadow"></div>
      </div>
    </>
  );
};

export default memo(Emoji);
