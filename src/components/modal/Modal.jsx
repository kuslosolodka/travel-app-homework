import React from "react";
import "../../assets/css/style.css";
import {useForm} from "react-hook-form";
import '../../assets/css/style.css';


function Modal({ setOpenModal }) {
const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
  };

  return (
    <div className="modal">
    <div className="trip-popup">
      <button className="trip-popup__close" onClick={()=>{setOpenModal(false)}}>×</button>
      <form className="trip-popup__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="trip-info">
          <h3 className="trip-info__title">Iceland</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration"><strong>15</strong> days</span>
            <span className="trip-info__level">easy</span>
          </div>
        </div>
        <label className="trip-popup__input input">
          <span className="input__heading">Date</span>
          <input name="date" type="date"
          {...register("Date", {
            valueAsDate: true,
            required: true
          })}
          />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Number of guests</span>
          <input name="guests" type="number"
          {...register("MinMaxValue", {
          min:1,
          max:10,
          required: true
          })}
          />
        </label>
        <span className="trip-popup__total">
          Total: <output className="trip-popup__total-value">4000$</output>
        </span>
        <button className="button" >Book a trip</button>
      </form>
    </div>
  </div>
  );
}

export default Modal;