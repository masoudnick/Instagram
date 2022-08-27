import { memo } from "react";

const SearchIcon = () => {
  return (
    <div className="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#8e8e8e"
        height="16"
        viewBox="0 0 24 24"
        width="16"
      >
        <path
          d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
          fill="none"
          stroke="#8E8E8E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>
        <line
          fill="none"
          stroke="#8E8E8E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
          x1="16.511"
          x2="22"
          y1="16.511"
          y2="22"
        ></line>
      </svg>
    </div>
  );
};

export default memo(SearchIcon);
