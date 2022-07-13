import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  trips: {},
  error: ''
}

export const getAllTrips = createAsyncThunk(
    "trip/getAllTrips",
    async (thunkAPI) => {
      try {
        const response = await fetch(
          "https://travel-app-api.glitch.me/api/v1/trips",
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

  export const tripSlice = createSlice({
    name:"trip",
    initialState,
    extraReducers: builder =>{
      builder.addCase(getAllTrips.pending, state => {
        state.loading = true
      })
      builder.addCase(getAllTrips.fulfilled, (state, action) => {
        state.loading = false
        state.trips = action.payload
        state.error = ''
      })
      builder.addCase(getAllTrips.rejected, (state, action) => {
        state.loading = false
        state.trips = []
        state.error = action.error.message
      })
    }
    

})


export default tripSlice.reducer;