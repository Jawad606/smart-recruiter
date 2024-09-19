import { configureStore } from "@reduxjs/toolkit";
import srReducer from "../features/srSlice";
import SigninReducer from "../features/Signin";
import JobAvertizeReducer from "../features/JobAdvertize";
import bulkReducer from "../features/bulkSlice";
import resumeReducer from "../features/resumeSlice";
import appliedReducer from "../features/appliedSlice";

export const store = configureStore({
  reducer: {
    sr: srReducer,
    Signin: SigninReducer,
    JobAvertize: JobAvertizeReducer,
    bulk: bulkReducer,
    resume: resumeReducer,
    applied: appliedReducer,
  },
});
