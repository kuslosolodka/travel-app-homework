import React from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/UserSlice";
import { useEffect } from "react";
import { userSelector } from "../../features/UserSlice";
import { clearState } from "../../features/UserSlice";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { register, errors } = useForm();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const handleSubmit = (e) => {
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      console.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate("/main");
    }
  }, [isError, isSuccess]);

  console.log(errors);
  return (
    <>
      <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form
          className="sign-in-form"
          onSubmit={(e) => handleSubmit(e)}
          method="POST"
        >
          <h2 className="sign-in-form__title">Sign In</h2>
          <label className="trip-popup__input input">
            <span className="input__heading">Email</span>
            <input
              className="email"
              type="text"
              {...register("Email", {
                required: "Email is required",
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Password</span>
            <input
              name="password"
              type="text"
              {...register("Password", {
                required: "Password is required.",
                maxLength: 20,
                minLength: 3,
              })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="button" type="submit">
            {isFetching ? (
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
            Sign in
          </button>
        </form>
        <span>
          Don't have an account?
          <a href="/sign-up" className="sign-in-form__link">
            Sign Up
          </a>
        </span>
      </main>
    </>
  );
}
export default SignIn;
