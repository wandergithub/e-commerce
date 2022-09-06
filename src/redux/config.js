import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ecommerceReducer from './ecommerce/ecommerce';

const store = configureStore({
  reducer: ecommerceReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
