import { Link } from "react-router-dom";

import "./sidebar.scss";

const User = () => {
  return (
    <div className="flex items-center mt-4 mb-2.5">
      <div className="mr-4">
        <Link
          to=""
          className="block rounded-full border border-slate-200 overflow-hidden"
        >
          <img className="w-14 h-14" src="/images/users/default.png" alt="" />
        </Link>
      </div>
      <div className="flex flex-col grow">
        <Link to="" className="font-medium">
          m.nickparvar
        </Link>
        <span className="text-slate-400 mt-0.5">Masoud :)</span>
      </div>
      <div className="text-sky-500 text-xs font-medium">
        <button type="button">Switch</button>
      </div>
    </div>
  );
};

export default User;
