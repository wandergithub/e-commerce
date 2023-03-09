/* Important:
  Product and Item are interchangable names but both refer to the final selling object.
*/
/* To improve:
  Concistency of naming:
  Unconcistency on some(Components, Actions constants using nouns-verb and verb-nouns,
                        and avoid Item/product situation )
*/
import axios from "axios";
// Actions
const CATEGORIES_FETCHED = "my-app/ecommerce/categories/index";
const DELETED_CATEGORIE = "my-app/ecommerce/categories/delete";
const CREATED_CATEGORIE = "my-app/ecommerce/categories/create";
const PRODUCTS_FETCHED = "my-app/ecommerce/products/index";
const PRODUCT_DELETED = "my-app/ecommerce/products/delete";
const ADDED_TO_CART = "my-app/ecommerce/cart/add";
const DELETED_ITEM_CART = "my-app/ecommerce/cart/delete";

// Reducer
const reducer = (
  state = { cart: [], categories: [], products: [] },
  action = {}
) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return { ...state, categories: action.payload };
    case DELETED_CATEGORIE:
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (categorie) => categorie.id !== action.payload
          ),
        ],
      };
    case CREATED_CATEGORIE:
      return {
        ...state,
        categories: [...state.categories, action.payload],
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
    case ADDED_TO_CART:
      if (state.cart.includes(action.payload)) return state;
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETED_ITEM_CART:
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
export const addToCart = (item) => ({ type: ADDED_TO_CART, payload: item });
export const deleteFromCart = (id) => ({
  type: DELETED_ITEM_CART,
  payload: id,
});
// DELETE
export const removeCategorie = (id) => ({
  type: DELETED_CATEGORIE,
  payload: id,
});

export const removeItem = (id) => ({
  type: PRODUCT_DELETED,
  payload: id,
});

// Thunks
export const fetchInitialData = () => async (dispatch) => {
  const categoriesResponse = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  dispatch(loadCategories(categoriesResponse.data));
  const productsResponse = await axios.get(
    "https://api.escuelajs.co/api/v1/products"
  );
  dispatch(loadProducts(productsResponse.data));
};

export const deleteCategorie = (id) => async (dispatch) => {
  const response = await axios.delete(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  if (response.data) {
    dispatch(removeCategorie(id));
  }
};

export const deleteItem = (id) => async (dispatch) => {
  const response = await axios.delete(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (response.data) {
    dispatch(removeItem(id));
  }
};

// export const createProduct = (title, price, description, img, categorieId) => async (dispatch) => {

// };

export const createCategorie = (name, image) => async (dispatch) => {
  const data = {
    name,
    image,
  };
  const response = await axios.post(
    "https://api.escuelajs.co/api/v1/categories/",
    data
  );
  if (response.status === 201) {
    dispatch(addCategorie(response.data));
  }
};

export default reducer;
