import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, updateReview } from "../../store/reviews";
import "./index.css"
import { openReviews } from ".";
import ReviewFormModal from "../ReviewFormModal";

const ReviewListing = ({review, setSelectedReview}) => {
    const {body, rating, name, userId, id} = review;
    const dispatch = useDispatch();
    const sessionUserId = useSelector(state => state.session.user.id)

    // setSelectedReview(review)

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

    const changeReview = () => {
        openReviews();
    }

    const editReview = () => {
        if (userId === sessionUserId) {
            setSelectedReview(review)
            return (
            <>
                <div className="fa-solid fa-trash" id="review-trash" onClick={() => dispatch(deleteReview(id))}></div>
                <div className="fa-solid fa-pencil" id="review-pencil" onClick={changeReview}></div>
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