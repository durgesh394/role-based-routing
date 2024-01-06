import { createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

const initialState = {
  post: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher(
    //   api.endpoints.getPostData?.matchFulfilled,
    //   (state, action) => {
    //     state.post = action.payload;
    //   }
    // );
  },
});

export const { getPost } = postSlice.actions;
export default postSlice.reducer;
