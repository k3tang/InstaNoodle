import csrfFetch from "./csrf";

const SET_PRODUCTS = 'products/SET_PRODUCTS';
const SET_PRODUCT = 'products/SET_PRODUCT'

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

export const setProduct = payload => ({
    type: SET_PRODUCT,
    payload
})

// selectors

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

// thunk action creators

export const fetchProducts = () => async dispatch => {
    const res = await csrfFetch('/api/products')
    const products = await res.json();
    dispatch(setProducts(products))
}

export const fetchProduct = (productId) => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}`)
    const product = await res.json();
    dispatch(setProduct(product))
}


export const searchProducts = (query) => async dispatch => {
    const res = await csrfFetch(`/api/products/search/${query}`)
    if (res.status >= 400) throw res;

    if (res.ok){
        const data = await res.json();
        dispatch(setProducts(data));
    }
}

//reducer 

function productsReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type){
        case SET_PRODUCTS:
            return action.payload.products;
        case SET_PRODUCT:
            return {...nextState, ...action.payload.product };
        default:
            return state;
    }
}

export default productsReducer;