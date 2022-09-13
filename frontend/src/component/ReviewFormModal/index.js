import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import "./index.css"

const ReviewFormModal = () => {
    const {productId} = useParams();
    const user = sessionStorage.getItem("currentUser");
    const [rating, setRating] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    const review = {
        userId: JSON.parse(user).id,
        productId: productId,
        rating: rating,
        body: body
    }


    return (
        <>
        <div>review form</div>
        <div id="review-modal">
            <div id="review-rating">
                <input type="radio" id="review-stars" value={rating} onChange={(e) => {setRating(e.target.value)}}/>
                <input type="text" id="review-body" value={body} onChange={(e) => {setBody(e.target.value)}}/>
            </div> 
            <div id="review-button" onClick={()=> dispatch(createReview(review))}>Submit Review</div>           
        </div>
        </>

    )
}

export default ReviewFormModal;
