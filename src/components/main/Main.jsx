import React from "react";
import { useEffect } from "react";
import "../../assets/css/style.css";
import { getAllTrips } from "../../features/TripSlice";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { tripSelector } from "../../features/TripSlice";
import { useNavigate } from "react-router-dom";
import { clearState } from "../../features/TripSlice";
function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(tripSelector);

  useEffect(() => {
    dispatch(getAllTrips({ token: localStorage.getItem("token") }));
  }, []);

  const { level, price, title, duration, image } = useSelector(tripSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      navigate("/sign-in");
    }
  }, [isError]);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input type="search" placeholder="search by title" />
          </label>

          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration">
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select name="level">
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        {isFetching ? (
          <div className="loader"></div>
        ) : (
          <ul className="trip-list">
            <li className="trip-card">
              <img src={image} alt="trip image" />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration">
                      <strong>{duration}</strong>
                    </span>
                    <span className="trip-info__level">{level}</span>
                  </div>
                </div>
                <div className="trip-price">
                  <span className="trip-price__value">
                    {" "}
                    <strong className="trip-price__value"> {price}</strong>
                  </span>
                </div>
              </div>
              <a href="/trip/:tripId" className="button">
                Discover a trip
              </a>
            </li>

            <li className="trip-card">
              <img src={image} alt="trip image" />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration">
                      <strong>{duration}</strong>
                    </span>
                    <span className="trip-info__level">{level}</span>
                  </div>
                </div>
                <div className="trip-price">
                  <span className="trip-price__value">
                    {" "}
                    <strong className="trip-price__value"> {price}</strong>
                  </span>
                </div>
              </div>
              <a href="/trip/:tripId" className="button">
                Discover a trip
              </a>
            </li>
            <li className="trip-card">
              <img src={image} alt="trip image" />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration">
                      <strong>{duration}</strong>
                    </span>
                    <span className="trip-info__level">{level}</span>
                  </div>
                </div>
                <div className="trip-price">
                  <span className="trip-price__value">
                    {" "}
                    <strong className="trip-price__value"> {price}</strong>
                  </span>
                </div>
              </div>
              <a href="/trip/:tripId" className="button">
                Discover a trip
              </a>
            </li>
            <li className="trip-card">
              <img src={image} alt="trip image" />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration">
                      <strong>{duration}</strong>
                    </span>
                    <span className="trip-info__level">{level}</span>
                  </div>
                </div>
                <div className="trip-price">
                  <span className="trip-price__value">
                    {" "}
                    <strong className="trip-price__value"> {price}</strong>
                  </span>
                </div>
              </div>
              <a href="/trip/:tripId" className="button">
                Discover a trip
              </a>
            </li>
            <li className="trip-card">
              <img src={image} alt="trip image" />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration">
                      <strong>{duration}</strong>
                    </span>
                    <span className="trip-info__level">{level}</span>
                  </div>
                </div>
                <div className="trip-price">
                  <span className="trip-price__value">
                    {" "}
                    <strong className="trip-price__value"> {price}</strong>
                  </span>
                </div>
              </div>
              <a href="/trip/:tripId" className="button">
                Discover a trip
              </a>
            </li>
            <li className="trip-card">
              <img src={image} alt="trip image" />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration">
                      <strong>{duration}</strong>
                    </span>
                    <span className="trip-info__level">{level}</span>
                  </div>
                </div>
                <div className="trip-price">
                  <span className="trip-price__value">
                    {" "}
                    <strong className="trip-price__value"> {price}</strong>
                  </span>
                </div>
              </div>
              <a href="/trip/:tripId" className="button">
                Discover a trip
              </a>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
}
export default Main;
