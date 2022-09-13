import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import "./index.css"

const ReviewFormModal = () => {
    const {productId} = useParams();
    const user = sessionStorage.getItem("currentUser");
    const [rating, setRating] = useState("");
    const [hover, setHover] = useState(0);
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();


    const handleSubmit = () => {
        const review = {
            review: {
                userId: JSON.parse(user).id,
                productId: productId,
                rating: rating,
                body: body,
                title: title
            }
        }
        dispatch(createReview(review))
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

        setRating(0);
        setHover(0);
        setBody("");
        setTitle("");
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
        <div id="review-modal-background"></div>
        <div id="review-modal">
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
