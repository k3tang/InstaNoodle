import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import "./index.css"
import { closeReview } from "../ReviewIndexPage";
import { useEffect } from "react";

const ReviewFormModal = ({selectedReview}) => {
    // console.log("selectedReview", selectedReview)
    const {productId} = useParams();
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [rating, setRating] = useState("");
    const [hover, setHover] = useState(0);
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);

    if (!selectedReview) {
        selectedReview = {
            title: "",
            body: "",
            rating: 0
        }
    }
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(selectedReview.title)
    }, [selectedReview])

    const handleSubmit = () => {
        const testReview = {
            review: {
                userId: user.id,
                productId: productId,
                rating: rating,
                body: body,
                title: title
            }
        }
        dispatch(createReview(testReview))
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
        closeReview();

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

    // const getTitle = () => {
    //     if (currentReview) {
    //         return currentReview.title;
    //     } else {
    //         return "";
    //     }
    // }


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
