import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = 'review/RECEIVE_REVIEWS'
const RECEIVE_REVIEW = 'review/RECEIVE_REVIEW'
const REMOVE_REVIEW = 'review/REMOVE_REVIEW'

export const receiveReviews = (payload) => {
    return {
        type: RECEIVE_REVIEWS,
        payload
    };
};

export const receiveReview = (payload) => {
    return {
        type: RECEIVE_REVIEW,
        payload
    };
};

export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    };
};

//selectors 

export const getReviews = state => { 
    if (!state.reviews) {
        return []
    } else {
        return Object.values(state.reviews)
    }
 }

 export const getReview = productId => state => {
    if (!state.reviews) {
        return null
    } else {
        return state.reviews[productId]
    }
 }

 //thunk action creators 

 export const fetchReviews = () => async dispatch => {
    const res = csrfFetch('/api/reviews')
    const reviews = (await res).json()
 }