import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getAllBookings = createAsyncThunk(
  "trip/getAllTrips",
  async (thunkAPI) => {
    try {
      const response = await fetch(
        "https://travel-app-api.glitch.me/api/v1/bookings",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    bookings: [{}],
    isError: false,
    isFetching: false,
    isSuccess: false,
    guests: "",
    date: "",
    totalPrice: "",
    id: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [getAllBookings.pending]: (state) => {
      state.isFetching = true;
    },
    [getAllBookings.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.level = payload.level;
      state.price = payload.price;
      state.title = payload.title;
      state.duration = payload.duration;
      state.image = payload.image;
      state.id = payload.id;
    },
    [getAllBookings.rejected]: (state) => {
      console.log("Rejected res status");
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { clearState } = bookingSlice.actions;

export const bookingSelector = (state) => state.booking;
