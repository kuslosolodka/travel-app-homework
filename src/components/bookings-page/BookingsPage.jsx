import React from "react";
import "../../assets/css/style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBookings } from "../../features/BookingsSlice";
import { bookingSelector } from "../../features/BookingsSlice";
import { clearState } from "../../features/BookingsSlice";
import { useNavigate } from "react-router-dom";
import { tripSelector } from "../../features/TripSlice";

export const BookingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(tripSelector);

  useEffect(() => {
    dispatch(getAllBookings({ token: localStorage.getItem("token") }));
  }, []);
  
  const { guests, date, totalPrice } = useSelector(bookingSelector);
  
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      navigate("/sign-in");
    }
  }, [isError]);
  
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        <ul className="booking__list">
          <li className="booking">
            <h3 className="booking__title">Country</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{date}</span>
            <span className="booking__total">{totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
        </ul>
      )}
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        <ul className="booking__list">
          <li className="booking">
            <h3 className="booking__title">Country</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{date}</span>
            <span className="booking__total">{totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
        </ul>
      )}
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        <ul className="booking__list">
          <li className="booking">
            <h3 className="booking__title">Country</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{date}</span>
            <span className="booking__total">{totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
        </ul>
      )}
      {isFetching ? (
        <div className="loader"></div>
      ) : (
        <ul className="booking__list">
          <li className="booking">
            <h3 className="booking__title">Country</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{date}</span>
            <span className="booking__total">{totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking">
              <span className="visually-hidden">Cancel booking</span>×
            </button>
          </li>
        </ul>
      )}
    </main>
  );
};

export default BookingsPage;
