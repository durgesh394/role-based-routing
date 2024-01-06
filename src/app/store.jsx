import { configureStore } from "@reduxjs/toolkit";
import api from "./services/api";
import authSlice from "./authSlice/authSlice";
import postSlice from "./postSlice/postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
