import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllRecomendedAPI } from "../../API";

const SuggestedProfiles = () => {
  const [users, setUsers] = useState([]);

  const getRecomended = () => {
    getAllRecomendedAPI()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        setUsers([]);
      });
  };
  useEffect(() => {
    getRecomended();
  }, []);
  return (
    <>
      <div className="flex mt-3">
        <span className="font-semibold text-sm text-slate-400 grow">
          Suggestions For You
        </span>
        <Link to="/explore/people" className="font-semibold text-xs">
          See All
        </Link>
      </div>
      <div className="suggestion-list py-2">
        {users.map((user) => (
          <div className="suggestion-item flex py-2" key={user.id}>
            <Link to={`/${user.username}/`} className="suggestion-avatar mr-3">
              <img
                src={`/images/users/${user.username}.jpg`}
                alt={`${user.fullName}'s profile avatar`}
              />
            </Link>
            <div className="suggestion-info flex flex-col items-start grow">
              <Link
                to={`/${user.username}/`}
                className="font-semibold hover:underline"
              >
                {user.username}
              </Link>
              <span className="text-xs text-gray overflow-hidden text-ellipsis whitespace-nowrap mt-0.5">
                {user.social_context}
              </span>
            </div>
            <button
              type="button"
              className="font-semibold text-xs text-sky-500 "
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SuggestedProfiles;
