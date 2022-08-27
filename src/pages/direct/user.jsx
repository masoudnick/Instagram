import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDirectMessages } from "../../API";
import Loadingskeleton from "./loadingSkeleton";
import { LargeSpinnerLoading } from "../../components";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const User = ({ userList }) => {
  const [directs, setDirect] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  const getDirects = () => {
    getDirectMessages(page)
      .then((res) => {
        setDirect([...directs, ...res.data]);
        setPage((prev) => prev + 1);
      })
      .catch((error) => {
        setDirect([]);
      });
  };
  const handleInfiniteScroll = (e) => {
    let target = e.target;
    if (target.scrollTop + target.clientHeight < target.scrollHeight) return;
    setIsFetching(true);
  };
  useEffect(() => {
    setTimeout(() => {
      getDirects(page);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    setTimeout(() => {
      console.log(page);
      getDirects(page);
    }, 2000);
  }, [isFetching]);

  return (
    <>
      <div
        className="users-list flex flex-col py-2 h-full"
        onScroll={handleInfiniteScroll}
      >
        {directs.length == 0 ? (
          <Loadingskeleton />
        ) : (
          directs.map((user) => (
            <Link
              className="px-5 py-2 hover:bg-stone-50"
              to={user.link}
              key={user.id}
            >
              <div className="flex items-center">
                <div className="user-profile mr-3">
                  <img
                    src={`/images/users/${user.username}.jpg`}
                    alt={`${user.username}'s profile`}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="user-name overflow-hidden text-ellipsis whitespace-nowrap text-neutral-800">
                    {user.name}
                  </p>
                  <span className="message mt-0.5 flex text-neutral-400">
                    <span className="overflow-hidden text-ellipsis">
                      {user.message}
                    </span>
                    <span className="text-neutral-800 mx-1">·</span>
                    <time className="" title={user.datetime}>
                      {user.time}
                    </time>
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
        {isFetching && (
          <LargeSpinnerLoading
            width={32}
            height={32}
            classes="py-2"
            styles={{ height: "72px" }}
            isLoading={isFetching}
          />
        )}
      </div>
    </>
  );
};

export default User;
