import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    collection: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setCollection: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, setCollection } = appSlice.actions;
