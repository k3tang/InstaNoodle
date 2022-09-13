const ReviewListing = ({review}) => {
    const {body, rating} = review;
    // console.log("review listing", review)
    // console.log(review.user.name, "user")

    return (
        <>
        <div>review here</div>
            <div className="review-listing-container">
                <div className="review-author">Name Placeholder</div>
                <div className="review-text">
                    <div className="review-rating">{rating}</div>
                    <div className="review-body">{body}</div>
                </div>
            </div>
        </>
    )
}

export default ReviewListing;