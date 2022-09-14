import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, fetchReviews, updateReview } from "../../store/reviews";
import "./index.css"
// import { openReviews } from ".";
import ReviewFormModal from "../ReviewFormModal";
import { useHistory, useParams } from "react-router-dom";

const ReviewListing = ({review, setSelectedReview,  openReviews}) => {
    const {body, rating, name, userId, id} = review;
    const dispatch = useDispatch();
    const { productId } = useParams();
    const sessionUser = useSelector(state => state.session.user);


    const starRate = () => {
        return [...Array(5)].map((star, idx) => {
            const ratingNum = idx + 1

            return (
                <div 
                    key={ratingNum}
                    value={ratingNum}
                    className={ratingNum <= rating ? "starOn" : "starOff"}
                    >
                    <span className="star">&#9733;</span>
                </div>
            )
        })
    }

    function handleDelete() {
        return dispatch(deleteReview(id));
    }
 

    const editReview = () => {
        if (!sessionUser) {
            return null
        } else if (userId === sessionUser.id) {
            setSelectedReview(review)
            return (
            <>
                <div className="fa-solid fa-trash" id="review-trash" onClick={handleDelete}></div>
                <div className="fa-solid fa-pencil" id="review-pencil" onClick={openReviews}></div>
            </>
        )}
    }

    return (
        <>
        <div>Reviews</div>
            <div className="review-listing-container">
                <div className="review-author">{name}</div>
                <div className="review-text">
                    <div className="review-rating">{starRate()}</div>
                    <div className="review-body">{body}</div>
                </div>
                <div className="review-edit-delete">{editReview()}</div>
            </div>
        </>
    )
}

export default ReviewListing;