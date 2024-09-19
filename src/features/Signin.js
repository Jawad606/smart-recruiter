import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export const login = createAsyncThunk(
  "Signin/login",
  (value, dispatch, getState) => {
    return axios.post(baseUrl + "/users/login", value).then((res) => res.data);
  }
);

export const logout = createAsyncThunk(
  "Signin/logout",
  async (dispatch, getState) => {
    return await axios.get(baseUrl + "/users/logout").then((res) => res.data);
  }
);

export const changepassword = createAsyncThunk(
  "Signin/changepassword",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .post(`${baseUrl}/users/changepassword/${id}`, value)
      .then((res) => res.data);
  }
);

export const updateCandidate = createAsyncThunk(
  "Signin/updateCandidate",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/users/${id}`, value)
      .then((res) => res.data);
  }
);


export const reset = createAsyncThunk(
  "Signin/reset",
  async (value, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/users/reset`, value)
      .then((res) => res.data);
  }
);

export const adduser = createAsyncThunk(
  "Signin/adduser",
  async (value, dispatch, getState) => {
    return await axios
      .post(`${baseUrl}/users/signup`, value)
      .then((res) => res.data);
  }
);

const Signin = createSlice({
  name: "Signin",
  initialState: {
    JobAvertizeList: [],
    isLoading: false,
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "LoadingLogin";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "Loginsuccess";
      state.userList = action.payload;
      console.log(state.status);
      localStorage.setItem("User", action.payload.username);
      localStorage.setItem("Data", JSON.stringify(action.payload.user));
      localStorage.setItem("token", "Bearer " + action.payload.token);
      localStorage.setItem("auth", true);
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateCandidate.pending]: (state, action) => {
      state.status = "Loadingupdate";
    },
    [updateCandidate.fulfilled]: (state, action) => {
      state.status = "Updatesuccess";
      state.userList = action.payload;
      console.log(action.payload);
      localStorage.setItem("User", action.payload.username);
      localStorage.setItem("Data", JSON.stringify(action.payload.user));
      localStorage.setItem("auth", true);
    },
    [updateCandidate.rejected]: (state, action) => {
      state.status = "failed";
    },

    [logout.pending]: (state, action) => {
      state.status = "LoadingLogout";
    },
    [logout.fulfilled]: (state, action) => {
      state.status = "success";
      localStorage.clear();
      state.userList = action.payload;
    },
    [logout.rejected]: (state, action) => {
      state.status = "failed";
    },

    [changepassword.pending]: (state, action) => {
      state.status = "LoadingChangePassword";
    },
    [changepassword.fulfilled]: (state, action) => {
      state.status = "success";
      state.userList = action.payload;
    },
    [changepassword.rejected]: (state, action) => {
      state.status = "failed";
    },

    [adduser.pending]: (state, action) => {
      state.status = "LoadingAddUser";
    },
    [adduser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [adduser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showUser = (state) => state.Signin;
export default Signin.reducer;
