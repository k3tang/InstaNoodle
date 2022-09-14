import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewListing from "./reviewlisting";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewFormModal from "../ReviewFormModal";
import { useState } from "react";

export const closeReview = () => {
    let reviewModal = document.getElementById("review-modal-container")
    let modalBackground = document.getElementById("review-bg-modal");
    modalBackground.style.display = "none";
    reviewModal.style.display = "none";

}

export const openReviews = () => {
    let reviewModal = document.getElementById("review-modal-container");
    reviewModal.style.display = "flex";
    let modalBackground = document.getElementById("review-bg-modal");
    modalBackground.style.display = "block";
}


const ReviewIndexPage = () => {
    const {productId} = useParams();
    const reviews = useSelector(getReviews);
    const dispatch = useDispatch();
    const [selectedReview, setSelectedReview] = useState(null);

    useEffect(() => {
        dispatch(fetchReviews(productId))
    }, [productId])


    const mapReviews = () => {
        if (reviews.length === 0) {
            return "No reviews yet."
        } else {
            return reviews.map(review => (
                <ReviewListing key={review.id} review={review} setSelectedReview={setSelectedReview} />
            ))
        }
    }


    return (
        <>
            <div className="review-index-container">
                <h1 className="review-index-header">The Reviews are in</h1>
                <h2 className="review-index-average">Average Review placeholder</h2>
            </div>
                <div onClick={openReviews}>Write a Review</div>
                <div id="review-bg-modal" onClick={closeReview}></div>
                <div className="reviews-mapped">
                    {mapReviews()}
                </div>
                <div id="review-modal-container">
                    <ReviewFormModal reviews={reviews} selectedReview={selectedReview}/>
                </div>
        </>
    )
}

export default ReviewIndexPage;

// every listing on an onclick on edit review, will setSelectedReview to review.id
// review form modal => match reviews to setselectedreview id