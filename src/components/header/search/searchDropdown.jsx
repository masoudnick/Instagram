import { useState, useEffect, useRef } from "react";
import { Dropdown } from "../dropdowns/dropdown";
import useClickOutside from "../../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { getRecentSearchesApi } from "../../../API";
import { SmallSpinnerLoading } from "../../loading/index";

const SearchDropdown = ({ active, setActive, inputRef }) => {
  const [searches, setSearches] = useState([]);
  const searchDropdown = useRef(null);
  const getRecentSearches = () => {
    getRecentSearchesApi()
      .then((res) => {
        setSearches(res.data);
      })
      .catch((error) => {
        setSearches([]);
      });
  };
  useEffect(() => {
    if (searches.length === 0 && active === true) {
      setTimeout(() => {
        getRecentSearches();
      }, [2000]);
    }
  }, [active]);

  const handleDelete = (key) => {
    let filtered = searches.filter((item, index) => {
      return index !== key;
    });
    setSearches(filtered);
    console.log(key);
  };

  useClickOutside(inputRef, searchDropdown, setActive);
  return (
    <Dropdown
      class="search-dropdown"
      active={active}
      dropdownRef={searchDropdown}
    >
      {searches.length === 0 && <SmallSpinnerLoading width={16} height={16} />}
      <div className="flex justify-between pt-4 px-4">
        <h4 className="font-bold text-base">Recent</h4>
        <button className="text-primary font-semibold">Clear All</button>
      </div>
      <ul className="search-results my-2">
        {searches.map((search, index) => (
          <li className="flex py-2 px-4" key={index}>
            {Object.keys(search)[0] === "user" ? (
              <>
                <Link className="flex grow" to={"/" + search.user.username}>
                  <div className="story-avatar mr-4">
                    {search.user.seen ? (
                      <div className="seen-story"></div>
                    ) : (
                      <div className="unseen-story"></div>
                    )}
                    <div className="avatar w-11 h-11 rounded-full overflow-hidden relative">
                      <img
                        src={`/images/users/${search.user.username}.jpg`}
                        alt={`${search.user.full_name}'s profile avatar`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start grow">
                    <p className="font-semibold">{search.user.username}</p>
                    <p className="text-gray mt-1">{search.user.full_name}</p>
                  </div>
                </Link>
                <button
                  className="btn active:bg-transparent"
                  onClick={() => handleDelete(index)}
                >
                  <svg
                    color="#8e8e8e"
                    height="16"
                    width="16"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      points="20.643 3.357 12 12 3.353 20.647"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></polyline>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      x1="20.649"
                      x2="3.354"
                      y1="20.649"
                      y2="3.354"
                    ></line>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link
                  className="flex grow"
                  to={"/explore/tags/" + search.hashtag.name}
                >
                  <div className="story-avatar mr-4">
                    <div className="avatar w-11 h-11 rounded-full overflow-hidden relative flex items-center justify-center">
                      <svg
                        color="#262626"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="4.728"
                          x2="20.635"
                          y1="7.915"
                          y2="7.915"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="3.364"
                          x2="19.272"
                          y1="15.186"
                          y2="15.186"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="17.009"
                          x2="13.368"
                          y1="2"
                          y2="22"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="10.64"
                          x2="7"
                          y1="2"
                          y2="22"
                        ></line>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center grow">
                    <p className="font-bold">#{search.hashtag.name}</p>
                  </div>
                </Link>
                <button
                  className="btn active:bg-transparent"
                  onClick={() => handleDelete(index)}
                >
                  <svg
                    color="#8e8e8e"
                    height="16"
                    width="16"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      points="20.643 3.357 12 12 3.353 20.647"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    ></polyline>
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      x1="20.649"
                      x2="3.354"
                      y1="20.649"
                      y2="3.354"
                    ></line>
                  </svg>
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default SearchDropdown;
