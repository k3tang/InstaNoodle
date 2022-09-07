import { useDispatch } from "react-redux";
import csrfFetch from "./csrf";

const dispatch = useDispatch();

const SET_PRODUCTS = 'products/SET_PRODUCTS';
const SET_PRODUCT = 'products/SET_PRODUCT'

const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
})

export const getProduct = productId => state => {
    if (!state) {
        return null
    } else if (!state.products) {
        return null
    } else {
        return state.products[productId]
    }
}

export const getProducts = state => {
    if (!state.products){
        return []
    } else {
        return Object.values(state.products)
    }
}

export const fetchProducts = () => async dispatch => {
    const res = await csrfFetch('api/products')
    const products = await res.json();
    dispatch({type: SET_PRODUCTS, products})
}

export const fetchProduct = (productId) => async dispatch => {
    const res = await csrfFetch(`api/products/${productId}`)
    const product = await res.json();
    dispatch({type: SET_PRODUCT, product})
}

function productsReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type){
        case SET_BENCHES:
            return nextState[action.product];
        case SET_PRODUCT:
            return nextState[action.product.id] = action.product;
        default:
            return state;
    }
}

export default productsReducer;