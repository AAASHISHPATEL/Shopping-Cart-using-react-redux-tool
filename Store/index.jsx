import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cart_slice"

const store= configureStore({
  reducer :{
    cart: cartReducer,

  }
})

export default store
