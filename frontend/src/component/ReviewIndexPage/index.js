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

export const openReview = () => {
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
    const user = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(fetchReviews(productId))
    }, [productId])


    const mapReviews = () => {
        if (reviews.length === 0) {
            return "Oh no, there are no reviews yet..."
        } else {
            return reviews.map(review => (
                <ReviewListing key={review.id} review={review} setSelectedReview={setSelectedReview} selectedReview={selectedReview} openReview ={openReview} />
                ))
            }
        }
        
        const writeReview = () => {
            setSelectedReview(null)
            openReview()
        }

    return (
        <>
            <div className="review-index-container">
                <div className="review-text">
                    <h1 className="review-index-header">The Reviews are in ...</h1>
                    <h2 className="review-index-average">Average Review placeholder</h2>
                </div>
                <div className="review-button-container">
                    {user ? <div onClick={writeReview} className="review-button">Write a Review</div> : ""}
                    <div id="review-bg-modal" onClick={closeReview}></div>
                </div>
                <div className="reviews-mapped">
                    {mapReviews()}
                </div>
                <div id="review-modal-container">
                    <ReviewFormModal selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>
                </div>
            </div>
        </>
    )
}

export default ReviewIndexPage;

