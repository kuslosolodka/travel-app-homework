import React from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../features/UserSlice";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../features/UserSlice";
import { useEffect } from "react";
import { clearState } from "../../features/UserSlice";
import { useState } from "react";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { register, errors } = useForm();

  const navigate = useNavigate();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      signupUser({
        fullName: fullName,
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
    if (isSuccess) {
      dispatch(clearState());
      navigate("/main");
    }

    if (isError) {
      console.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);
  // console.log(errors);
  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        className="sign-up-form"
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
      >
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input
            className="full-name"
            type="text"
            {...register("Full name", { required: true, maxLength: 80 })}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input
            className="email"
            type="email"
            {...register("Email", {
              required: true,
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
            className="password"
            type="password"
            {...register("Password", {
              required: true,
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
          Sign up
        </button>
      </form>
      <span>
        Already have an account?
        <a href="/sign-in" className="sign-up-form__link">
          Sign In
        </a>
      </span>
    </main>
  );
}

export default SignUp;
