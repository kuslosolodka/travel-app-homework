import React from 'react';
import bookingslist from '../../local-json/bookinglist.json';
import '../../assets/css/style.css';

function BookingsPage () { 
  const [foundBookings] = React.useState(bookingslist);
return(
<main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
     {[...foundBookings]
     .sort((a,b) => new Date(a.date).getTime - new Date(b.date).getTime())
     .map(booking => {
       return(
         <ul className="booking__list">
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
         </ul>
       );
     })
}
    </main>
);
}

export default BookingsPage;

