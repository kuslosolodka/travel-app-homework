import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../../features/UserSlice';
import tripReducer from '../../features/TripSlice';
import bookingReducer from "../../features/BookingsSlice"

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    trip: tripReducer,
    booking: bookingReducer
  },
});