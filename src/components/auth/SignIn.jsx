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
    e.preventDefault();

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
              type="email"
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
              type="password"
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
              <div className="loader"></div>
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
