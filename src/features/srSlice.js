import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const srAdd = createAsyncThunk(
  "rating/srAdd",
  async (value, dispatch, getState) => {
    return await axios
      .post(`http://127.0.0.1:8000/upload/data/`, value)
      .then((res) => res.data);
  }
);

const srSlice = createSlice({
  name: "sr",
  initialState: { srList: [] },
  extraReducers: {
    [srAdd.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [srAdd.fulfilled]: (state, action) => {
      state.status = "success";
      state.srList=[action.payload];
    },
    [srAdd.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const showSR = (state) => state.sr;
export default srSlice.reducer;
