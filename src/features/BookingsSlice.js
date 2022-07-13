import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  bookings: [],
  error: ''
}

export const getAllBookings = createAsyncThunk(
    "trip/getAllBookings",
    async (thunkAPI) => {
      try {
        const response = await fetch(
          "https://travel-app-api.glitch.me/api/v1/bookings",
          {
            method: "GET",
            headers:{
              Accept: "application/json",
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
          }
        );
        let data = await response.json();
        console.log("data", data, response.status);
  
        if (response.status === 201) {
          return {...data};
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
    name:"booking",
    initialState,
    extraReducers: builder =>{
      builder.addCase(getAllBookings.pending, state => {
        state.loading = true
      })
      builder.addCase(getAllBookings.fulfilled, (state, action) => {
        state.loading = false
        state.trips = action.payload
        state.error = ''
      })
      builder.addCase(getAllBookings.rejected, (state, action) => {
        state.loading = false
        state.trips = []
        state.error = action.error.message
      })
    }
    

})


export default bookingSlice.reducer;