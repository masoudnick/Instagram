import { memo } from "react";
import "./style.scss";

const SmallSpinnerLoading = ({ width, height }) => {
  return (
    <div className="spinner-loading-container small-spinner">
      <svg
        className="spinner-loading"
        width={width}
        height={height}
        viewBox="0 0 100 100"
      >
        <rect
          fill="currentColor"
          height="10"
          opacity="0"
          rx="5"
          ry="5"
          transform="rotate(-90 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.125"
          rx="5"
          ry="5"
          transform="rotate(-45 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.25"
          rx="5"
          ry="5"
          transform="rotate(0 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.375"
          rx="5"
          ry="5"
          transform="rotate(45 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.5"
          rx="5"
          ry="5"
          transform="rotate(90 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.625"
          rx="5"
          ry="5"
          transform="rotate(135 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.75"
          rx="5"
          ry="5"
          transform="rotate(180 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
        <rect
          fill="currentColor"
          height="10"
          opacity="0.875"
          rx="5"
          ry="5"
          transform="rotate(225 50 50)"
          width="28"
          x="67"
          y="45"
        ></rect>
      </svg>
    </div>
  );
};

export default memo(SmallSpinnerLoading);
