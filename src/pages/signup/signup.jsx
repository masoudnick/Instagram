import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { SmallSpinnerLoading } from "../../components";
import { useAuth } from "../../contexts/Auth";
import { getUsers, saveUser } from "../../API";

import "./style.scss";

import logo from "../../assets/images/logo-md.png";
import appstore from "../../assets/images/app-store.png";
import googleplay from "../../assets/images/google-play.png";

const Signup = () => {
  const passwordInput = useRef();
  const [form, setForm] = useState({
    emailOrPhone: "",
    fullName: "",
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

  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();
    toggleAuth();
  };
  return (
    <section className="signup-page bg-neutral-50 flex items-center justify-center flex-col">
      <div className="container ">
        <div className="form-box text-neutral-800 bg-white flex items-center flex-col mt-8 mb-2.5 px-10">
          <div className="logo mb-3 mt-9">
            <img src={logo} alt="Instagram" />
          </div>
          <form className="login-form w-full mb-5" onSubmit={handleSignUp}>
            <h2 className="text-gray font-semibold text-center text-lg mb-5">
              Sign up to see photos and videos from your friends.
            </h2>

            <div className="input-group">
              <div
                className={
                  form.emailOrPhone.length > 0
                    ? "form-floating active"
                    : "form-floating"
                }
              >
                <input
                  className="form-control text-xs"
                  name="emailOrPhone"
                  type="text"
                  onChange={handleChange}
                  maxLength="75"
                  autoComplete="off"
                />
                <label>Mobile number or email address</label>
              </div>
            </div>
            <div className="input-group">
              <div
                className={
                  form.fullName.length > 0
                    ? "form-floating active"
                    : "form-floating"
                }
              >
                <input
                  className="form-control text-xs"
                  name="fullName"
                  type="text"
                  onChange={handleChange}
                  maxLength="75"
                  autoCapitalize="sentences"
                  autoCorrect="off"
                />
                <label>Full Name</label>
              </div>
            </div>
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
                  autoCapitalize="off"
                  autoCorrect="off"
                />
                <label>Username</label>
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
                  autoComplete="on"
                  ref={passwordInput}
                />
                <label>Password</label>
              </div>
            </div>
            <div className="text-center text-gray text-xs my-3">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.
                <Link className="font-semibold" to="" target="_blank">
                  Learn more
                </Link>
                <br />
                <br />
                By signing up, you agree to our
                <Link className="font-semibold" to="" target="_blank">
                  Terms
                </Link>
                ,
                <Link className="font-semibold" to="" target="_blank">
                  Privacy Policy
                </Link>
                and
                <Link className="font-semibold" to="" target="_blank">
                  Cookies Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex mt-3.5">
              <button
                className="btn bg-primary text-white rounded w-full relative h-8"
                type="submit"
                disabled={
                  Object.values(form).some((value) => value.length === 0)
                    ? "disabled"
                    : ""
                }
              >
                {loading == false ? (
                  "Sign Up"
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
        </div>
        <div className="my-2.5 bg-white w-full border border-gray py-3">
          <p className="my-3 text-center text-neutral-800">
            Don't have an account?{" "}
            <Link className="text-primary font-semibold" to="/accounts/login/">
              Log in
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

export default Signup;
