import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// Create Redux store
export default configureStore({
  reducer: {
    // Register user reducer
    user: userSlice,
  },
});