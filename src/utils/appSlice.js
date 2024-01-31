import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    collection: null,
  },
  reducers: {
    setCollection: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setCollection } = appSlice.actions;
