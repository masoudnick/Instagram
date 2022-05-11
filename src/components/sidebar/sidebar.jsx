import "./sidebar.scss";
import User from "./user";
import SuggestedProfiles from "./suggestedProfiles";
import UsefulLinks from "./usefulLinks";
import CopyRight from "./copyright";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar flex flex-col fixed">
        <User />
        <SuggestedProfiles />
        <UsefulLinks />
        <CopyRight />
      </aside>
    </>
  );
};

export default Sidebar;
