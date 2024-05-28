import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/sliderSlice";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});
