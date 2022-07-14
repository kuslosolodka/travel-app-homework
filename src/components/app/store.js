import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../../features/UserSlice";
import { tripSlice } from "../../features/TripSlice";
import { bookingSlice } from "../../features/BookingsSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    trip: tripSlice.reducer,
    booking: bookingSlice.reducer,
  },
});
