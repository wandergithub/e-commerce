import { configureStore } from '@reduxjs/toolkit';
import ecommerceReducer from './ecommerce/ecommerce';

const store = configureStore({
  reducer: ecommerceReducer,
});

export default store;
