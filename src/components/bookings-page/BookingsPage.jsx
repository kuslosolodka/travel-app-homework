import React from 'react';
import bookingslist from '../../local-json/bookinglist.json';
import '../../assets/css/style.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllBookings } from '../../features/BookingsSlice';
export const BookingsPage = () => { 
  const booking = useSelector(state => state.booking);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllBookings())
    }, [])
  // const [foundBookings] = React.useState(bookingslist);
return (
<main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
     {/* {[...foundBookings] */}
     {/* .sort((a,b) => new Date(a.date).getTime - new Date(b.date).getTime())
     .map(booking => { */}
      {booking.loading && <div>Loading...</div>}
      {!booking.loading && booking.error ? <div>Error: {booking.error}</div> : null}
      {!booking.loading && booking.bookings.length ? (
      <ul className="booking__list">
      {booking.bookings.map(booking=> (
           <li className="booking">
             <h3 className="booking__title">Country</h3>
             <span className="booking__guests">{booking.guests} guests</span>
             <span className="booking__date">{(booking.date)}</span>
             <span className="booking__total">{booking.totalPrice} $</span>
             <button className="booking__cancel" title="Cancel booking">
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
           </li>
           ))}
         </ul>
      ) : null}
    </main>
 );
}

export default BookingsPage;

