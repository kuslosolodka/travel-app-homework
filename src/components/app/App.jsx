import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Main from "../main/Main.jsx";
import SignUp from "../auth/SignUp.jsx";
import SignIn from "../auth/SignIn.jsx";
import TripPage from "../trip-page/TripPage.jsx";
import BookingsPage from "../bookings-page/BookingsPage.jsx";
import "../../assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import { AnonymousRoute } from "../../helpers/ProtectedRoute.js";
const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/sign-in"
        element={
          <AnonymousRoute>
            <SignIn />
          </AnonymousRoute>
        }
      />
      <Route path="/main" element={<Main />} />
      <Route
        path="/trip/:tripId"
        element={
          <AnonymousRoute>
            <TripPage />
          </AnonymousRoute>
        }
      />
      <Route
        path="/bookings"
        element={
          <AnonymousRoute>
            <BookingsPage />
          </AnonymousRoute>
        }
      />
      <Route path="*" element={<Main />} />
    </Routes>
    <Footer />
  </>
);

export default App;
