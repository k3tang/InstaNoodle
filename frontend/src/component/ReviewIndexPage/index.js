import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/reviews";
import ReviewListing from "./reviewlisting";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewFormModal from "../ReviewFormModal";

const ReviewIndexPage = () => {
    const {productId} = useParams();
    console.log("oroduct id", {productId})
    const reviews = useSelector(getReviews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews(productId))
    }, [productId])

    // console.log("reviews", reviews)

    const mapReviews = () => {
        if (reviews.length === 0) {
            return "No reviews yet."
        } else {
            return reviews.map(review => (
                <ReviewListing key={review.id} review={review} />
            ))
        }
    }

    const handleReviews = () => {
        const reviewButton = document.getElementsById("review-form");
        reviewButton.style.display = "block";
    }
    return (
        <>
            <div className="reviews-mapped">
                <div>hello world</div>
                {mapReviews()}
            </div>
            <div onClick={handleReviews}>
            Write a Review</div>
            <div id="review-form">
                <ReviewFormModal/>
            </div>
        </>
    )
}

export default ReviewIndexPage;