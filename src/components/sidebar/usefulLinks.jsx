import { Link } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <>
      <ul className="useful-links mb-4">
        <li>
          <Link to="https://about.instagram.com/">About</Link>
        </li>
        <li>
          <Link to="https://help.instagram.com/">Help</Link>
        </li>
        <li>
          <Link to="https://about.instagram.com/blog/">Press</Link>
        </li>
        <li>
          <Link to="https://about.instagram.com/">API</Link>
        </li>
        <li>
          <Link to="https://about.instagram.com/">Jobs</Link>
        </li>
        <li>
          <Link to="https://about.instagram.com/">Privacy</Link>
        </li>
        <li>
          <Link to="https://about.instagram.com/">
            Terms
          </Link>
        </li>
        <li>
          <Link to="/explore/locations/">Locations</Link>
        </li>
        <li>
          <Link to="https://about.instagram.com/">Language</Link>
        </li>
      </ul>
    </>
  );
};
export default UsefulLinks;
