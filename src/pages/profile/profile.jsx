import { useParams, Redirect } from "react-router-dom";

import "./style.scss";

const Profile = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <section className="user-profile">
      <div className="content-container flex mx-auto">
        <div className="profile-pic flex flex-col justify-center mr-8">
          <div className="avatar w-36 h-36 rounded-full overflow-hidden relative">
            <img src="/images/users/leomessi.jpg" alt="" />
          </div>
        </div>
        <header className="profile-header flex items-center">
          <div className="profile-info">
            <div className="flex flex-row">
              <h2 className="text-3xl font-light overflow-hidden text-ellipsis whitespace-nowrap">
                naseri_ir
              </h2>
              <div className="flex ml-5">
                <button className="btn border-gray ml-2 font-bold rounded">
                  Message
                </button>
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
          </div>
        </header>
      </div>
    </section>
  );
};

export default Profile;
