import { useState, useRef, useCallback, memo } from "react";
import SearchDropdown from "./searchDropdown";
import SearchIcon from "./searchIcon";
import "./style.scss";

const RecentSearches = () => {
  const [isFocused, setFocus] = useState(false);
  const searchInputRef = useRef(null);
  const handleFocusSearchInput = () => {
    setFocus(true);
  };
  const handleBlurSearchInput = () => {
    setFocus(false);
  };
  return (
    <>
      {!isFocused && <SearchIcon />}
      <input
        className={isFocused ? "search-input px-4" : "search-input"}
        type="text"
        placeholder="Search"
        onFocus={handleFocusSearchInput}
        // onBlur={handleBlurSearchInput}
        ref={searchInputRef}
      />
      {isFocused && (
        <button
          className="btn-clear insta-icons"
          type="button"
          onClick={handleBlurSearchInput}
        ></button>
      )}
      <SearchDropdown
        active={isFocused}
        setActive={setFocus}
        inputRef={searchInputRef}
      />
    </>
  );
};

export { RecentSearches };
