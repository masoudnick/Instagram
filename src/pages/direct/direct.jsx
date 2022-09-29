import DirectIcon from "./direct-icon";
import User from "./user";
import "./style.scss";

const Direct = () => {
  return (
    <section className="direct-inbox flex p-5">
      <div className="content-container flex mx-auto w-full rounded">
        <aside className="users-box flex flex-col flex-[0_0_auto]">
          <div className="switch-account-box flex flex-row items-center justify-center w-full px-5">
            <button className="btn flex items-center justify-center grow">
              <span className="font-semibold text-neutral-800	text-base mr-2">
                m.nickparvar
              </span>
              <span className="inline-block rotate-180">
                <svg
                  color="#262626"
                  fill="#262626"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                </svg>
              </span>
            </button>
            <button>
              <svg
                color="#262626"
                fill="#262626"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </button>
          </div>
          <User />
        </aside>
        <section className="messages-box flex-[1_1_auto] w-1/3 p-6 flex flex-col items-center justify-center">
          <DirectIcon />
          <h2 className="title font-light mt-4">Your messages</h2>
          <p className="text-sm mt-4">
            Send private photos and messages to a friend or group.
          </p>
          <button className="btn rounded text-white mt-6" type="button">
            Send message
          </button>
        </section>
      </div>
    </section>
  );
};

export default Direct;
