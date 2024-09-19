import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export const fetchapplied = createAsyncThunk(
  "applied/fetchapplied",
  async (dispatch, getState) => {
    return await axios
      .get(`${baseUrl}/applieds`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const addapplied = createAsyncThunk(
  "applied/addapplied",
  async (value, dispatch, getState) => {
    return await axios
      .post(`${baseUrl}/applieds`, value, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const deleteapplied = createAsyncThunk(
  "applied/deleteapplied",
  async (id, dispatch, getState) => {
    return await axios
      .delete(`${baseUrl}/applieds/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const updateapplied = createAsyncThunk(
  "applied/updateapplied",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/applieds/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
const appliedSlice = createSlice({
  name: "applied",
  initialState: {
    applied: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchapplied.pending]: (state, action) => {
      state.status = "Loadingfetch";
    },
    [fetchapplied.fulfilled]: (state, action) => {
      state.status = "success";
      state.applied = action.payload;
    },
    [fetchapplied.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addapplied.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [addapplied.fulfilled]: (state, action) => {
      state.status = "success";

      state.applied.push(action.payload);
    },
    [addapplied.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateapplied.pending]: (state, action) => {
      state.status = "LoadingUpdate";
    },
    [updateapplied.fulfilled]: (state, action) => {
      state.status = "success";
      state.applied = state.applied.filter(
        (item) => item._id !== action.payload._id
      );
      state.applied.push(action.payload);
    },
    [updateapplied.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deleteapplied.pending]: (state, action) => {
      state.status = "LoadingDelete";
    },
    [deleteapplied.fulfilled]: (state, action) => {
      state.status = "success";
      state.applied = state.applied.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [deleteapplied.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showList = (state) => state.applied;
export default appliedSlice.reducer;
