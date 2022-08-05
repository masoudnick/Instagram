import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { SmallSpinnerLoading } from "../../components";
import { useAuth } from "../../contexts/Auth";
import { getUsers } from "../../API";
import "./style.scss";
import logo from "../../assets/images/logo-md.png";
import appstore from "../../assets/images/app-store.png";
import googleplay from "../../assets/images/google-play.png";

const Login = () => {
  const passwordInput = useRef();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toggleAuth, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login • Instagram";
  }, []);
  useEffect(() => {
    if (user.loggedIn) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleTogglePassword = (e) => {
    const input = passwordInput.current;
    const button = e.target;
    if (input.type === "password") {
      input.type = "text";
      button.innerHTML = "Hide";
    } else {
      input.type = "password";
      button.innerHTML = "Show";
    }
  };

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    getUsers(form.username)
      .then((res) => {
        setLoading(false);
        if (res.data.length === 0) {
          setError(
            "The username you entered doesn't belong to an account. Please check your username and try again."
          );
        } else {
          if (res.data.password == form.password) {
            toggleAuth();
            navigate("/", { replace: true });
          } else {
            setError(
              "Sorry, your password was incorrect. Please double-check your password."
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="login-page bg-neutral-50 flex items-center justify-center flex-col">
      <div className="container ">
        <div className="form-box text-neutral-800 bg-white flex items-center flex-col mt-8 mb-2.5 px-10">
          <div className="logo mb-3 mt-9">
            <img src={logo} alt="Instagram" />
          </div>
          <form
            className="login-form mt-6 w-full mb-2.5"
            onSubmit={handleLogin}
          >
            <div className="input-group">
              <div
                className={
                  form.username.length > 0
                    ? "form-floating active"
                    : "form-floating"
                }
              >
                <input
                  className="form-control text-xs"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  maxLength="75"
                  autoComplete="off"
                />
                <label>Phone number, username, or email</label>
              </div>
            </div>
            <div className="input-group">
              <div
                className={
                  form.password.length > 0
                    ? "form-floating flex active"
                    : "form-floating flex"
                }
              >
                {form.password.length > 0 && (
                  <button
                    className="toggle-password font-semibold"
                    type="button"
                    onClick={handleTogglePassword}
                  >
                    Show
                  </button>
                )}
                <input
                  type="password"
                  className="form-control text-xs"
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                  ref={passwordInput}
                />
                <label>Password</label>
              </div>
            </div>
            <div className="flex mt-3.5">
              <button
                className="btn bg-primary text-white rounded w-full relative h-8"
                type="submit"
                disabled={
                  form.username.length == 0 || form.password.length == 0
                    ? "disabled"
                    : ""
                }
              >
                {loading == false ? (
                  "Log In"
                ) : (
                  <div className="flex">
                    <SmallSpinnerLoading width="18" height="18" />
                  </div>
                )}
              </button>
            </div>
          </form>
          {error && (
            <div className="my-2.5 text-danger text-center">
              <p>{error}</p>
            </div>
          )}
          <Link
            className="block my-2.5 text-xs text-center"
            to="/accounts/password/reset/"
          >
            Forgot password?
          </Link>
        </div>
        <div className="my-2.5 bg-white w-full border border-gray py-2">
          <p className="my-3 text-center text-neutral-800">
            Don't have an account?{" "}
            <Link
              className="text-primary font-semibold"
              to="/accounts/emailsignup/"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="download-app">
          <p className="font-sm my-5 text-center">Get the app.</p>
          <div className="flex justify-center">
            <a href="">
              <img
                className="h-10 mr-2"
                src={appstore}
                alt="Download on the App Store"
              />
            </a>
            <a href="">
              <img
                className="h-10"
                src={googleplay}
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
