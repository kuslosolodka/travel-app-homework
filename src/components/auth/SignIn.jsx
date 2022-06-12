import React from 'react';
import { useForm } from "react-hook-form";
import '../../assets/css/style.css';

function SignIn () {
   const {register, errors, handleSubmit} = useForm();
   const onSubmit = (data) => {
     console.log("RESULT", data);
   };
console.log(errors);
return (
    <>
    <main className="sign-in-page">
    <h1 className="visually-hidden">Travel App</h1>
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="sign-in-form__title">Sign In</h2>
      <label className="trip-popup__input input">
        <span className="input__heading">Email</span>
        <input className="email" type="text" {...register('Email', {
          required: "Email is required",
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })} />
      </label>
      <label className="trip-popup__input input">
        <span className="input__heading">Password</span>
        <input name="password" type="text" {...register('Password', {
          required: "Password is required.",
          maxLength: 20,
          minLength: 3
        })} />
      </label>
      <button className="button" type="submit">Sign In</button>
  </form><span>
      Already have an account?
      <a href="/sign-up" className="sign-in-form__link">Sign Up</a>
    </span>
  </main>
  </>
);
}
export default SignIn;