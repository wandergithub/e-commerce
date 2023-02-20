import { configureStore } from '@reduxjs/toolkit';
import ecommerceReducer from '../redux/ecommerce/ecommerce';

const store = configureStore({
  reducer: ecommerceReducer,
  preloadedState: {
    categories: [
      {
        name: 'categorie 1',
        image: 'image sample 1',
      },
      {
        name: 'categorie 2',
        image: 'image sample 2',
      },
    ],
  },
});

export default store;
