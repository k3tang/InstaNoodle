json.review do 
    json.set! @review.product_id do 
        json.partial! 'api/reviews/review',
        review: @review
    end
end 
