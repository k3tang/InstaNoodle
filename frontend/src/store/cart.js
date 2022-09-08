
const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';

export const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
    };
};

export const updateCount = (itemId, count) => {
    if (count > 1) return REMOVE_ITEM(itemId);
    return {
        type: UPDATE_COUNT,
        itemId,
        count
    };
};

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    };
};

export const reset 