import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, updateReview } from "../../store/reviews";
import "./index.css"
import { closeReview } from "../ReviewIndexPage";
import { useEffect } from "react";

const ReviewFormModal = ({selectedReview, setSelectedReview}) => {
    console.log("selectedReview", selectedReview)
    const {productId} = useParams();
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    let editedReview = selectedReview ? true : false;
    let review;
    if (editedReview) {
        review = { ...selectedReview };
    } else {
        review = { rating: 0, title: "", body: "" };
        console.log(review, "I am inside the conditional")
    }
    console.log(selectedReview, "selected review")

    const [rating, setRating] = useState(review.rating);
    const [hover, setHover] = useState(null);
    const [title, setTitle] = useState(review.title);
    const [body, setBody] = useState(review.body);
    
    useEffect(() => {
        setTitle(review.title);
        setRating(review.rating);
        setBody(review.body);
        setHover(review.hover)
    }, [selectedReview])

    
    const handleSubmit = () => {
        const newReview = {
            review: {
                ...review,
                userId: user.id,
                productId: productId,
                rating: rating,
                body: body,
                title: title
            }
        }

        if (editedReview) {
            dispatch(updateReview(newReview))

        } else {
        dispatch(createReview(newReview))
            .catch(async(res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            })
        } 
        closeReview();
            setBody("");
            setErrors([]);
            setTitle("");
            setRating(0);
            setHover(0);
            setSelectedReview(null)
    }


    const starReview = () => {
       return [...Array(5)].map((star, idx) => {
            const ratingNum = idx + 1 

            return (
                <div 
                    key={ratingNum}
                    value={ratingNum}
                    className={ratingNum <= (hover || rating) ? "starOn" : "starOff"}
                    onClick={() => setRating(ratingNum)}
                    onMouseEnter={() => setHover(ratingNum)}
                    onMouseOut={() => setHover(rating)}
                    >
                    <span className="star">&#9733;</span>
                </div>
            )
        })
    }


    return (
        <>
        <div id="review-modal">
            <div id="review-x" className="fa-solid fa-x" onClick={closeReview}></div>
            <ul id="review-errors">
                {errors.map((error) =>
                    <li key={error}>{error}</li>)}
            </ul>
            <div id="review-rating">
                    <label id="star-label">Rating:
                        <div id="star-buttons">
                            {starReview()}  
                        </div>
                    </label>
                    <label id="star-title">Title:
                        <input type="text" value={title} id="star-title-text" onChange={(e) => {setTitle(e.target.value)}}/>
                    </label>
                    <label id="review-body-label">Review:
                        <textarea id="review-body" value={body} rows="4" cols="20" onChange={(e) => {setBody(e.target.value)}}/>
                    </label>
            </div> 
            <div id="review-button" onClick={handleSubmit}>Submit Review</div>           
        </div>
        </>

    )
}

export default ReviewFormModal;
