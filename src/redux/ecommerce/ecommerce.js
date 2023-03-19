import axios from 'axios';
// Actions
const CATEGORIES_FETCHED = 'my-app/ecommerce/categorie/index';
const CATEGORY_DELETED = 'my-app/ecommerce/categorie/delete';
const CATEGORY_CREATED = 'my-app/ecommerce/categorie/create';
const PRODUCTS_FETCHED = 'my-app/ecommerce/product/index';
const PRODUCT_DELETED = 'my-app/ecommerce/product/delete';
const PRODUCT_CREATED = 'my-app/ecommerce/product/create';
const CART_ADDED_ITEM = 'my-app/ecommerce/cart/add';
const CART_DELETED_ITEM = 'my-app/ecommerce/cart/delete';

// Reducer
const reducer = (
  state = { cart: [], categories: [], products: [] },
  action = {},
) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return { ...state, categories: action.payload };
    case CATEGORY_DELETED:
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (categorie) => categorie.id !== action.payload,
          ),
        ],
      };
    case CATEGORY_CREATED:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case PRODUCT_CREATED:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case PRODUCT_DELETED:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };
    case PRODUCTS_FETCHED:
      return { ...state, products: action.payload };
    case CART_ADDED_ITEM:
      if (state.cart.includes(action.payload)) return state;
      return { ...state, cart: [...state.cart, action.payload] };
    case CART_DELETED_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
};

// Action Creators
export const loadCategories = (categories) => ({
  type: CATEGORIES_FETCHED,
  payload: categories,
});
export const loadProducts = (products) => ({
  type: PRODUCTS_FETCHED,
  payload: products,
});
export const addToCart = (item) => ({ type: CART_ADDED_ITEM, payload: item });
export const deleteFromCart = (id) => ({
  type: CART_DELETED_ITEM,
  payload: id,
});
// DELETE
export const removeCategorie = (id) => ({
  type: CATEGORY_DELETED,
  payload: id,
});

export const removeItem = (id) => ({
  type: PRODUCT_DELETED,
  payload: id,
});
// CREATE
export const addCategorie = (categorie) => ({
  type: CATEGORY_CREATED,
  payload: categorie,
});

export const addProduct = (product) => ({
  type: PRODUCT_CREATED,
  payload: product,
});

// Thunks
export const fetchInitialData = () => async (dispatch) => {
  const categoriesResponse = await axios.get(
    'https://api.escuelajs.co/api/v1/categories',
  );
  dispatch(loadCategories(categoriesResponse.data));
  const productsResponse = await axios.get(
    'https://api.escuelajs.co/api/v1/products',
  );
  dispatch(loadProducts(productsResponse.data));
};

export const deleteCategorie = (id) => async (dispatch) => {
  const response = await axios.delete(
    `https://api.escuelajs.co/api/v1/categories/${id}`,
  );
  if (response.data) {
    dispatch(removeCategorie(id));
  }
};

export const deleteItem = (id) => async (dispatch) => {
  const response = await axios.delete(
    `https://api.escuelajs.co/api/v1/products/${id}`,
  );
  if (response.data) {
    dispatch(removeItem(id));
  }
};

export const createProduct = (title, price, description, img, categoryId) => async (dispatch) => {
  const data = {
    title,
    price,
    description,
    categoryId,
    images: [img],
  };

  const response = await axios.post('https://api.escuelajs.co/api/v1/products/', data);

  if (response) {
    dispatch(addProduct(response.data));
  }
};

export const createCategorie = (name, image) => async (dispatch) => {
  const data = {
    name,
    image,
  };
  const response = await axios.post(
    'https://api.escuelajs.co/api/v1/categories/',
    data,
  );
  if (response) {
    dispatch(addCategorie(response.data));
  }
};

export default reducer;
