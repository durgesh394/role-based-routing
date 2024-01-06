import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  role: "admin",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
