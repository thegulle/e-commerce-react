import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import cartSlice from "./CartSlice";
import categorySlice from "./CategorySlice";

const store = configureStore({
  reducer: {
    productSlice,
    cartSlice,
    categorySlice
  }
})

export default store