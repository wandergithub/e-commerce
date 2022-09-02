import axios from 'axios';
// Actions
const CATEGORIES_FETCHED = 'my-app/ecommerce/CATEGORIES_FETCHED';
const PRODUCTS_FETCHED = 'my-app/ecommerce/PRODUCTS_FETCHED';

// Reducer
const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return { ...state, categories: action.payload };
    case PRODUCTS_FETCHED:
      return { ...state, products: action.payload };
    default: return state;
  }
};

// Action Creators
export const loadCategories = (categories) => ({ type: CATEGORIES_FETCHED, payload: categories });
export const loadProducts = (products) => ({ type: PRODUCTS_FETCHED, payload: products });

// Thunks
export const fetchInitialData = () => async (dispatch) => {
  const categoriesResponse = await axios.get('https://api.escuelajs.co/api/v1/categories');
  dispatch(loadCategories(categoriesResponse.data));
  const productsResponse = await axios.get('https://api.escuelajs.co/api/v1/products');
  dispatch(loadProducts(productsResponse.data));
};

export default reducer;
