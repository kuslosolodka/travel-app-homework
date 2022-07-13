import React, { useRef } from "react";
import Iceland from '../../assets/images/iceland.jpg';
import travellist from '../../local-json/travellist.json';
import { useState, useEffect } from "react";
import "../../assets/css/style.css";
import { getAllTrips } from "../../features/TripSlice";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";


function Main () { 
    // const [name, setName] = useState('');
    // const [foundTravels, setFoundTravels] = React.useState(travellist);
    
    // const { isFetching, isSuccess, isError, errorMessage } =
    // useSelector(userSelector);
    
    const trip = useSelector(state => state.trip);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllTrips())
    }, [])
     
    // const searchByTitle = (e) => {
    //     const keyword = e.target.value;
      
    
    //     if (keyword !== '') {
    //       const results = travellist.filter((travel) => {
    //         return travel.title.toLowerCase().includes(keyword.toLowerCase());
    //       });
    //       setFoundTravels(results);
    //     } else {
    //       setFoundTravels(travellist);
    //     }
    
    //     setName(keyword);
    //   };
    return (
    <main>
    <h1 className="visually-hidden">Travel App</h1>
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form"
      >
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input  
          type="search"
          // value={name}
          // onChange={searchByTitle} 
          placeholder="search by title" />
          </label>
        
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select 
          name="duration"
         >
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
   
    {trip.loading && <div>Loading...</div>}
      {!trip.loading && trip.error ? <div>Error: {trip.error}</div> : null}
      {!trip.loading && trip.trips.length ? (
         <ul className="trip-list">
      {trip.trips.map(trip=> (
                          <li className="trip-card" key={trip.id}>
                          <img  alt="trip image" />
                          <div className="trip-card__content">
                           <div className="trip-info">
                            <h3 className="trip-info__title">{trip.title}</h3>
                            <div className="trip-info__content">
                          <span className="trip-info__duration"><strong>{trip.duration}</strong></span>
                          <span className="trip-info__level">{trip.level}</span>
                          </div>
                          </div>
                          <div className="trip-price">
                          <span className="trip-price__value"> <strong className="trip-price__value"> {trip.price}</strong></span>
                          </div>
                          </div>
                          <a href="/trip/:tripId" className="button">Discover a trip</a>
                          </li>
      ))}
      
                          
              </ul>
              ): null}
      
              </section>
    </main>
);
}
export default Main;
