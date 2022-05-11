/* This example requires Tailwind CSS v2.0+ */
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useOutsideClick";

const MenuDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const handleActiveDropdown = () => {
    setIsActive((prev) => !prev);
  };
  useClickOutside(ref, setIsActive);
  return (
    <>
      {isActive && <div className="active-border"></div>}

      <button
        className="h-6 w-6 rounded-full border border-slate-200 overflow-hidden"
        onClick={handleActiveDropdown}
        ref={ref}
      >
        <img className="" src="/images/users/default.png" alt={``} />
      </button>
      <div className={isActive ? "dropdown-box active" : "dropdown-box"}>
        <nav className="dropdown-inner" style={{ width: "230px" }}>
          <ul>
            <li className="menu-item hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex py-2.5 px-4">
                <svg height="16" viewBox="0 0 24 24" width="16">
                  <circle
                    cx="12.004"
                    cy="12.004"
                    fill="none"
                    r="10.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="12.006"
                    cy="9.718"
                    fill="none"
                    r="4.109"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li className="menu-item flex hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex py-2.5 px-4">
                <svg height="16" viewBox="0 0 24 24" width="16">
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polygon>
                </svg>
                <span className="ml-3">Saved</span>
              </Link>
            </li>
            <li className="menu-item flex hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex py-2.5 px-4">
                <svg height="16" viewBox="0 0 24 24" width="16">
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="ml-3">Settings</span>
              </Link>
            </li>
            <li className="menu-item flex mb-1 hover:bg-gray-50 active:bg-gray-100">
              <Link to="" className="flex  py-2.5 px-4">
                <svg height="16" viewBox="0 0 24 24" width="16">
                  <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
                </svg>
                <span className="ml-3">Switch Accounts</span>
              </Link>
            </li>
            <li className="menu-item flex border-t hover:bg-gray-50 active:bg-gray-100">
              <form method="post" className="flex">
                <button className="py-2.5 px-4 mb-1" type="submit">
                  Log Out
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuDropdown;
