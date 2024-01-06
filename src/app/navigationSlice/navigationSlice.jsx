import { createSlice } from "@reduxjs/toolkit";

const initialState = { navdata: [{ title: Home, url: "", auth: ["admin"] }] };
const navigatioSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.navdata = action.payload;
    },
    resetNavigation: (state, action) => {
      state.navdata = initialState.navdata;
    },
  },
});
const { setNavigation, resetNavigation } = navigatioSlice.actions;
export default navigatioSlice.reducer;
