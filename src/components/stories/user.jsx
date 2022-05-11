const User = ({ username, fullName, seen }) => {
  return (
    <button className="flex flex-col items-center w-full">
      <div className="story-avatar mt-1 mb-2">
        {seen === true ? (
          <div className="seen-story"></div>
        ) : (
          <div className="unseen-story"></div>
        )}
        <div className="avatar w-14 h-14 rounded-full overflow-hidden relative">
          <img
            src={`/images/users/${username}.jpg`}
            alt={`${fullName}'s profile avatar`}
            loading="lazy"
          />
        </div>
      </div>
      <p className="username overflow-hidden text-ellipsis whitespace-nowrap tracking-widest text-xs">
        {username}
      </p>
    </button>
  );
};
export default User;
