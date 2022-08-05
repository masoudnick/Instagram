import { Outlet } from "react-router-dom";
import Header from "./header";
const HeaderLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default HeaderLayout;
