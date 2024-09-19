import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl='http://localhost:5000';


export const fetchbulk = createAsyncThunk(
  "bulk/fetchbulk",
  async (dispatch, getState) => {
    return await axios.get(`${baseUrl}/bulk`).then((res) => res.data );
  }
);
export const addbulk = createAsyncThunk(
  "bulk/addbulk",
  async (value, dispatch, getState) => {
    return await axios
      .post(`${baseUrl}/bulk`, value)
      .then((res) => res.data);
  }
);
export const deletebulk = createAsyncThunk(
  "bulk/deletebulk",
  async (id, dispatch, getState) => {
    return await axios
      .delete(`${baseUrl}/bulk/${id}`)
      .then((res) => res.data);
  }
);
export const updatebulk = createAsyncThunk(
  "bulk/updatebulk",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/bulk/${id}`)
      .then((res) => res.data);
  }
);
const bulkSlice = createSlice({
  name: "bulk",
  initialState: {
    bulk: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchbulk.pending]: (state, action) => {
      state.status = "Loadingfetch";
    },
    [fetchbulk.fulfilled]: (state, action) => {
      state.status = "success";
      state.bulk = action.payload;
    },
    [fetchbulk.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addbulk.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [addbulk.fulfilled]: (state, action) => {
      state.status = "success";
    
      state.bulk.push(action.payload);
    
    },
    [addbulk.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updatebulk.pending]: (state, action) => {
      state.status = "LoadingUpdate";
    },
    [updatebulk.fulfilled]: (state, action) => {
      state.status = "success";
      state.bulk = state.bulk.filter(
        (item) => item._id !== action.payload._id
      );
      state.bulk.push(action.payload);
    },
    [updatebulk.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deletebulk.pending]: (state, action) => {
      state.status = "LoadingDelete";
    },
    [deletebulk.fulfilled]: (state, action) => {
      state.status = "success";
      state.bulk = state.bulk.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [deletebulk.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showList = (state) => state.bulk;
export default bulkSlice.reducer;
