import { useState, useEffect, memo } from "react";
import { SmallSpinnerLoading } from "../index";
import "./sidebar.scss";
import User from "./user";
import SuggestedProfiles from "./suggestedProfiles";
import UsefulLinks from "./usefulLinks";
import CopyRight from "./copyright";

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <aside
      className={
        isLoading
          ? "sidebar flex flex-col is-loading"
          : "sidebar flex flex-col fixed"
      }
    >
      {isLoading ? (
        <SmallSpinnerLoading width={18} height={18} />
      ) : (
        <>
          <User />
          <SuggestedProfiles />
          <UsefulLinks />
          <CopyRight />
        </>
      )}
    </aside>
  );
};

export default memo(Sidebar);
