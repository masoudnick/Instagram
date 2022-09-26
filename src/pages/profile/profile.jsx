import { useParams, Redirect, Link } from "react-router-dom";
import { Footer } from "../../components";
import appstore from "../../assets/images/app-store.png";
import googleplay from "../../assets/images/google-play.png";
import mediaUpSell from "../../assets/images/mediaUpsell.jpg";
import "./style.scss";
import { useState, useEffect } from "react";
import { getUserProfile } from "../../API";
import uuid from "react-uuid";

const Profile = () => {
  const [user, setUser] = useState([]);
  const { username } = useParams();

  const getUser = (username) => {
    getUserProfile()
      .then((res) => {
        setUser(res.data[username]);
      })
      .catch((error) => {
        setUser([]);
      });
  };
  const calc_followers = (followers) => {
    if ((10000 < followers) & (followers < 1000000)) {
      return parseFloat(followers / 1000).toFixed(2) + "K";
    } else if (1000000 <= followers) {
      return parseFloat(followers / 1000000).toFixed(2) + "M";
    } else {
      return Number(followers).toLocaleString();
    }
  };

  const handleMutualFollowers = () => {
    let account = user.edge_mutual_followed_by;
    console.log(account);
    // account.edges.map((account, index) => (
    //   <span key={uuid()}>
    //     <span className={"text-dark-" + index}>{account}</span>
    //     {index !== Array(user.edge_mutual_followed_by).length - 1
    //       ? " and "
    //       : ""}
    //   </span>
    // ));
  };
  useEffect(() => {
    getUser(username);
  }, []);
  return (
    <>
      <main>
        <section className="user-profile">
          <div className="content-container flex flex-col mx-auto">
            <header className="profile-header flex items-center mb-11">
              <div className="story-avatar flex flex-col justify-center items-center w-1/3">
                {!user.seen && <div className="unseen-story"></div>}

                <div className="avatar w-36 h-36 rounded-full overflow-hidden relative">
                  <img src={`/images/users/${user.username}.jpg`} alt="" />
                </div>
              </div>

              <div className="profile-info grow">
                <div className="flex flex-row mb-5">
                  <h2 className="text-3xl font-light overflow-hidden text-ellipsis whitespace-nowrap">
                    {user.username}
                  </h2>
                  <div className="flex items-center ml-2">
                    <span className="insta-icons is-verified"></span>
                  </div>
                  <div className="flex ml-5 items-center">
                    <div className="flex items-stretch">
                      <button className="btn border-gray ml-2 rounded">
                        Message
                      </button>
                      {user.is_followed ? (
                        <button className="btn border-gray ml-2 font-bold rounded">
                          <svg
                            className="mx-4"
                            color="#262626"
                            height="15"
                            width="20"
                            viewBox="0 0 95.28 70.03"
                          >
                            <path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0zm19-50.8A19 19 0 1164.32 0a19.05 19.05 0 0118.91 19.18zM14.76 50.01a5 5 0 01-3.37-1.31L.81 39.09a2.5 2.5 0 01-.16-3.52l3.39-3.7a2.49 2.49 0 013.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 013.52 0l3.53 3.58a2.49 2.49 0 010 3.52L18.23 48.57a5 5 0 01-3.47 1.44z"></path>
                          </svg>
                        </button>
                      ) : (
                        <button className="btn bg-primary rounded text-white ml-2 px-7 active:opacity-70">
                          Follow
                        </button>
                      )}
                      <button className="btn border-gray ml-2 font-bold rounded">
                        <span>
                          <svg
                            color="#262626"
                            height="12"
                            width="12"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <button className="btn ml-2">
                    <svg
                      color="#262626"
                      height="32"
                      viewBox="0 0 24 24"
                      width="32"
                    >
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </button>
                </div>
                <ul className="flex text-base mb-5">
                  <li className="mr-10">
                    <span className="font-semibold">
                      {Number(user.media_count).toLocaleString()}
                    </span>{" "}
                    posts
                  </li>
                  <li className="mr-10">
                    <span className="font-semibold">
                      {calc_followers(user.edge_followed_by)}
                    </span>{" "}
                    followers
                  </li>
                  <li>
                    <span className="font-semibold">{user.edge_follow}</span>{" "}
                    following
                  </li>
                </ul>
                <div className="text-base">
                  <p className="font-semibold">{user.full_name}</p>
                  <p className="whitespace-pre-line">{user.biography}</p>
                  {user.external_url && (
                    <a
                      className="font-semibold link-primary hover:underline"
                      href={user.external_url_linkshimmed}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {user.external_url}
                    </a>
                  )}
                </div>
                <div className="mt-3.5 text-xs font-medium">
                  <div className="text-gray">
                    Followed by {handleMutualFollowers()}
                  </div>
                </div>
              </div>
            </header>
            <div className="flex items-center justify-center border-t border-gray">
              <Link
                to=""
                className="mr-16 flex items-center h-14 font-semibold text-xs border-t border-slate-900"
              >
                <svg color="#262626" height="12" viewBox="0 0 24 24" width="12">
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
                <span className="ml-1 tracking-wide uppercase">Posts</span>
              </Link>

              <Link
                to=""
                className="mr-16 flex items-center h-14 text-gray font-semibold text-xs"
              >
                <svg color="#8e8e8e" height="12" viewBox="0 0 24 24" width="12">
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polygon>
                </svg>
                <span className="ml-1 tracking-wide uppercase">Saved</span>
              </Link>
              <Link
                to=""
                className="mr-16 flex items-center h-14 text-gray font-semibold text-xs"
              >
                <svg
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path
                    d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="12.072"
                    cy="11.075"
                    fill="none"
                    r="3.556"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <span className="ml-1 tracking-wide uppercase">Tagged</span>
              </Link>
            </div>
            <article className="flex">
              <div className="w-96 h-96">
                <img
                  className="rounded-l"
                  src={mediaUpSell}
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center grow flex-col px-5 bg-white rounded-r">
                <h2 className="text-lg font-semibold">
                  Start capturing and sharing your moments.
                </h2>
                <h3 className="text-base mt-1">
                  Get the app to share your first photo or video.
                </h3>
                <div className="flex mt-5">
                  <a
                    className="mr-2"
                    href="/"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    <img
                      className="h-10"
                      src={appstore}
                      alt="Download on the App Store"
                    />
                  </a>
                  <a href="/" rel="nofollow noopener" target="_blank">
                    <img
                      className="h-10"
                      src={googleplay}
                      alt="Get it on Google Play"
                    />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
