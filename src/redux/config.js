import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ecommerceReducer from './ecommerce/ecommerce';

const store = configureStore({
  reducer: ecommerceReducer,
  middleware: (getDefaultMiddleware) => (process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware()),
});

export default store;
