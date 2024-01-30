import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
  },
});
export default appStore;
