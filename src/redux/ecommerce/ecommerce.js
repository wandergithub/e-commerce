import axios from 'axios';
// Actions
const CATEGORIES_FETCHED = 'my-app/ecommerce/CATEGORIES_FETCHED';

// Reducer
const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return { ...state, categories: action.payload };
    default: return state;
  }
};

// Action Creators
export const loadCategories = (categories) => ({ type: CATEGORIES_FETCHED, payload: categories });

// Thunks
export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
  dispatch(loadCategories(response.data));
};

export default reducer;
