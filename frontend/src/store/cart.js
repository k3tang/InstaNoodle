import csrfFetch from "./csrf";

const RECEIVE_ITEMS = 'cartItem/RECEIVE_ITEMS'
const RECEIVE_ITEM = 'cartItem/RECEIVE_ITEM';
const REMOVE_ITEM = 'cartItem/REMOVE_ITEM';
const RESET = 'cartItem/RESET';

export const receiveItems = (payload) => {
    return {
        type: RECEIVE_ITEMS,
        payload
    }
}

export const receiveItem = (payload) => {
    return {
        type: RECEIVE_ITEM,
        payload
    };
};


export const removeItem = (cartItemId) => {
    return {
        type: REMOVE_ITEM,
        cartItemId
    };
};


// selectors

export const getCartItems = state => { 
    if (!state.cartItems) {
        return []
    } else {
        return Object.values(state.cartItems)
    }
}

export const getCartItem = productId => state => {
    if (!state.cartItems) {
        return null
    } else {
         return state.cartItems[productId]
    }
}

// thunk action creators 

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch('/api/cart_items')
    const cartItems = await res.json();
    dispatch(receiveItems(cartItems))
}


export const createCartItem = (cartData) => async dispatch => {
    const res = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const cartItem = await res.json();
    dispatch(receiveItem(cartItem))
}

export const updateCartItem = (cartData) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartData.cartItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify(cartData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const cartItem = await res.json();
    dispatch(receiveItem(cartItem))
}

export const deleteCartItem = (cartItem) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'DELETE'
    })
    dispatch(removeItem(cartItem.productId))
}

// reducer - populates the view 

function cartReducer(state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type) {
        case RECEIVE_ITEMS: 
            return action.payload.cartItems;
        case RECEIVE_ITEM:
           return {...nextState, ...action.payload.cartItem}
        case REMOVE_ITEM: 
            delete nextState[action.cartItemId];
            return nextState;
        default:
            return state;
    }
}

export default cartReducer;




