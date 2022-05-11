import { Link } from "react-router-dom";
import MenuDropdown from "./menu-dropdown";
import ActivityDropdown from "./activity-dropdown";

import "./style.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header bg-white flex justify-center w-full fixed z-10 top-0 left-0">
      <nav className="navbar flex justify-between items-center px-5 w-full">
        <div className="flex-[0_0_auto] w-1/3">
          <Link to="/" className="block mt-1.5">
            <img src={logo} alt="Instagram" />
          </Link>
        </div>
        <div className="header-search flex-[0_0_auto] relative">
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
          <input className="search-input" type="text" placeholder="Search" />
          <div className="search-icon"></div>
        </div>
        <div className="flex-[0_0_auto] w-1/3">
          <div className="flex items-center justify-end pl-5">
            <Link to="/" className="action-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"
                  fill="#262626"
                ></path>
              </svg>
            </Link>
            <Link to="/" className="action-item">
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
            </Link>
            <Link to="/" className="action-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                ></path>
                <line
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
            </Link>
            <Link to="/" className="action-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#262626"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                ></polygon>
                <polygon
                  fillRule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                  fill="#262626"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                ></circle>
              </svg>
            </Link>
            <div className="action-item activity-feed relative">
              <ActivityDropdown />
            </div>
            <div className="action-item user-profile relative">
              <MenuDropdown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
