import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Main from '../main/Main.jsx';
import SignUp from '../auth/SignUp.jsx';
import SignIn from '../auth/SignIn.jsx';
import TripPage from '../trip-page/TripPage.jsx';
import BookingsPage from '../bookings-page/BookingsPage.jsx';
import '../../assets/css/style.css';
import { Route, Routes} from "react-router-dom";
import { PrivateRoute } from '../../helpers/PrivateRoute.js';
import Dashboard from './Dashboard.jsx';
const App = () => (
  <>
    <Header />
      <Routes>
         <Route path='/sign-up' element={<SignUp />} />
         <Route path='/sign-in' element={<SignIn />} />
         <Route path='/main' element={<Main />} />
         <Route path='/trip/:tripId' element={<TripPage />} />
         <Route path='/bookings' element={<BookingsPage />} />
         <Route path='*' element={<Main />} />
         <Route
          	path='/dashboard'
          	element={
          		<PrivateRoute>
          			<Dashboard />
          		</PrivateRoute>
          	}
          />
       </Routes>
    <Footer />
  </>
      
);

export default App;
