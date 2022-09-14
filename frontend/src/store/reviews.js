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

 export const fetchReviews = (productId) => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}/reviews`)
    const reviews = await res.json()
    dispatch(receiveReviews(reviews))
 }

 export const createReview = (reviewData) => 
 async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    })
    const review = await res.json();
    dispatch(receiveReview(review))
 }

 export const updateReview = 
 (reviewData) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewData.review.id}`, {
        method: "PATCH",
        body: JSON.stringify(reviewData),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const review = await res.json();
    dispatch(receiveReview(review))
 }

 export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    dispatch(removeReview(reviewId))
 }

 //reducer 

 function reviewsReducer( state = {}, action) {
    Object.freeze(state);
    const nextState = {...state};

    switch(action.type) {
        case RECEIVE_REVIEWS: 
            return action.payload.reviews;
        case RECEIVE_REVIEW:
            return {...nextState, ...action.payload.review}
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
 }

 export default reviewsReducer;