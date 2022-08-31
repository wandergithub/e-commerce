import { configureStore } from '@reduxjs/toolkit';
import reducer from './ecommerce/ecommerce';

const middlewares = [];

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;
