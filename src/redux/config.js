import { configureStore } from '@reduxjs/toolkit';
import ecommerceReducer from './ecommerce/ecommerce';

const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
  },
});

export default store;
