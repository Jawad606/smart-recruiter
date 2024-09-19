import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export const fetchResume = createAsyncThunk(
  "resume/fetchResume",
  async (dispatch, getState) => {
    return await axios
      .get("http://localhost:5000/resumes", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data)
      .catch(res=>console.log('erer',res))
  }
);

export const addresume = createAsyncThunk(
  "resume/addresume",
  async (value, dispatch, getState) => {
    return await axios
      .post(baseUrl + "/resumes", value, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

export const deleteresume = createAsyncThunk(
  "resume/deleteresume",
  async (id, dispatch, getState) => {
    return await axios
      .delete(`${baseUrl}/resumes/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

export const updateresume = createAsyncThunk(
  "resume/updateresume",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/resumes/${id}`, value, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resumeList: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchResume.pending]: (state, action) => {
      state.status = "Loadingfetch";
    },
    [fetchResume.fulfilled]: (state, action) => {
      state.status = "success";
      state.resumeList = action.payload;
    },
    [fetchResume.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addresume.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [addresume.fulfilled]: (state, action) => {
      state.status = "success";
      state.resumeList.push(action.payload);
    },
    [addresume.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateresume.pending]: (state, action) => {
      state.status = "LoadingUpdate";
    },
    [updateresume.fulfilled]: (state, action) => {
      state.status = "success";
      state.resumeList = state.resumeList.filter(
        (item) => item._id !== action.payload._id
      );
      state.resumeList.push(action.payload);
    },
    [updateresume.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deleteresume.pending]: (state, action) => {
      state.status = "LoadingDelete";
    },
    [deleteresume.fulfilled]: (state, action) => {
      state.status = "success";
      state.resumeList = state.resumeList.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [deleteresume.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showResume = (state) => state.resume;
export default resumeSlice.reducer;
