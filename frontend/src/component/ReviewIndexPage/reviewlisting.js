import { useDispatch, useSelector } from "react-redux";
import { deleteReview} from "../../store/reviews";
import "./index.css"

const ReviewListing = ({review, setSelectedReview, openReview}) => {
    const {body, rating, name, userId, id, title} = review;
    const dispatch = useDispatch();
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
                    <span className="fa-solid fa-star"></span>
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
                <div className="fa-solid fa-pencil" id="review-pencil" onClick={openReview}></div>
                <div className="fa-solid fa-trash" id="review-trash" onClick={handleDelete}></div>
            </>
        )}
    }

    return (
        <>
            <div className="review-listing-container">
                <div className="review-listing-text">
                    <div className="review-title">{title}</div>
                    <div className="review-body">{body}</div>
                </div>
                <div className="reviewer-content-container">
                    <div className="reviewer-content">
                        <div className="review-author">{name}</div> 
                        <div className="review-rating">{starRate()}</div>
                        <div className="review-edit-delete">{editReview()}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewListing;