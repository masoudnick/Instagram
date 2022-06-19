import { memo } from "react";
import "./style.scss";
import splashLogo from "../../assets/images/splash-logo.png";
import metaLogo from "../../assets/images/meta-logo.png";

const Preloading = () => {
  return (
    <div className="splash-screen w-full h-full">
      <img
        className="splash-logo w-20 h-20 absolute top-2/4 left-2/4"
        src={splashLogo}
        alt="Instagram"
      />
      <span className="meta-logo absolute bottom-0 left-2/4">
        <img src={metaLogo} width={72} height={37} alt="Meta" />
      </span>
    </div>
  );
};

export default memo(Preloading);
