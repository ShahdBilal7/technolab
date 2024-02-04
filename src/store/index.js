import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export default store;
