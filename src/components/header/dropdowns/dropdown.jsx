import React from "react";

const Dropdown = (props) => {
  return (
    <div
      className={
        props.active
          ? "dropdown-box active " + props.class
          : "dropdown-box " + props.class
      }
      ref={props.dropdownRef}
    >
      <div className="dropdown-arrow"></div>
      <div className="dropdown-inner">{props.children}</div>
    </div>
  );
};

export { Dropdown };
