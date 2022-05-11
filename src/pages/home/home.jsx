import { Sidebar, Stories, Posts } from "../../components";
import "./style.scss";
const Home = () => {
  return (
    <section className="mt-14 bg-neutral-50">
      <div className="content-container flex mx-auto pt-7">
        <div className="flex-[0_0_auto] w-2/3 mr-5 pr-2">
          <Stories />
          <Posts />
        </div>
        <div className="flex-[0_0_auto] w-1/3">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Home;
