import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export const fetchJobAvertize = createAsyncThunk(
  "JobAvertize/fetchJobAvertize",
  async (dispatch, getState) => {
    return await axios
      .get(baseUrl + "/jobadvertize", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

export const addJobAvertize = createAsyncThunk(
  "JobAvertize/addJobAvertize",
  async (value, dispatch, getState) => {
    return await axios
      .post(baseUrl + "/jobadvertize", value, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

export const deleteJobAvertize = createAsyncThunk(
  "JobAvertize/deleteJobAvertize",
  async (id, dispatch, getState) => {
    return await axios
      .delete(`${baseUrl}/jobadvertize/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

export const updateJobAvertize = createAsyncThunk(
  "JobAvertize/updateJobAvertize",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/jobadvertize/${id}`, value, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

const JobAvertizeSlice = createSlice({
  name: "JobAvertize",
  initialState: {
    JobAvertizeList: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchJobAvertize.pending]: (state, action) => {
      state.status = "Loadingfetch";
    },
    [fetchJobAvertize.fulfilled]: (state, action) => {
      state.status = "success";
      state.JobAvertizeList = action.payload;
    },
    [fetchJobAvertize.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addJobAvertize.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [addJobAvertize.fulfilled]: (state, action) => {
      state.status = "success";
      state.JobAvertizeList.push(action.payload);
    },
    [addJobAvertize.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateJobAvertize.pending]: (state, action) => {
      state.status = "LoadingUpdate";
    },
    [updateJobAvertize.fulfilled]: (state, action) => {
      state.status = "success";
      state.JobAvertizeList = state.JobAvertizeList.filter(
        (item) => item._id !== action.payload._id
      );
      state.JobAvertizeList.push(action.payload);
    },
    [updateJobAvertize.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deleteJobAvertize.pending]: (state, action) => {
      state.status = "LoadingDelete";
    },
    [deleteJobAvertize.fulfilled]: (state, action) => {
      state.status = "success";
      state.JobAvertizeList = state.JobAvertizeList.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [deleteJobAvertize.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showJobAvertize = (state) => state.JobAvertize;
export default JobAvertizeSlice.reducer;
