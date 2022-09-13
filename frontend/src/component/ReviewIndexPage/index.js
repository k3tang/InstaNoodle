import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewListing from "./reviewlisting";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewFormModal from "../ReviewFormModal";

export const closeReview = () => {
    let reviewModal = document.getElementById("review-modal")
    let modalBackground = document.getElementById("review-background-modal");
    modalBackground.style.display = "none";
    reviewModal.style.display = "none";

}

const ReviewIndexPage = () => {
    const {productId} = useParams();
    console.log("oroduct id", {productId})
    const reviews = useSelector(getReviews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews(productId))
    }, [productId])


    const mapReviews = () => {
        if (reviews.length === 0) {
            return "No reviews yet."
        } else {
            return reviews.map(review => (
                <ReviewListing key={review.id} review={review} />
            ))
        }
    }

    window.onclick = function(e) {
        let reviewModal = document.getElementById("review-modal")
        let modalBackground = document.getElementById("review-background-modal");
        if (e.target == modalBackground) {
            modalBackground.style.display = "none";
            reviewModal.style.display = "none";
        }
    }

    const openReviews = (e) => {
        e.preventDefault();
        let reviewModal = document.getElementById("review-modal");
        console.log("review Modal", reviewModal)
        reviewModal.style.display = "flex";
        let modalBackground = document.getElementById("review-background-modal");
        modalBackground.style.display = "block";
        console.log("background", modalBackground)
    }

    return (
        <>
            <div id="review-background-modal" className="background-modal"></div>
            <div className="reviews-mapped">
                {mapReviews()}
            </div>
            <button onClick={openReviews}>
            Write a Review</button>
            <ReviewFormModal/>
        </>
    )
}

export default ReviewIndexPage;