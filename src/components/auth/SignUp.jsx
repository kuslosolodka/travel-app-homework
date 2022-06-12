import React from 'react';
import { useForm } from "react-hook-form";
import '../../assets/css/style.css';

function SignUp () {  
    const {register, handleSubmit} = useForm();
   const onSubmit = (data) => {
     console.log("RESULT", data);
   };
return (
 <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input className="full-name" type="text"
          {...register("Full name", {required: true, maxLength: 80})}
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input className="email" type="text"
          {...register("Email",{
             required: true,
             pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input className="password" type="password" 
          {...register('Password', {
          required: true,
          maxLength: 20,
          minLength: 3
        })}
           />
        </label>
        <button className="button" type="submit">Sign Up</button>
      </form>
      <span>
        If you have no account
        <a href="/sign-in" className="sign-up-form__link">Sign In</a>
      </span>
    </main>

);
}

export default SignUp;