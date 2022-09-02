import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ecommerceReducer from './ecommerce/ecommerce';

const store = configureStore({
  reducer: ecommerceReducer,
  middleware: [logger, thunk],
});

export default store;
