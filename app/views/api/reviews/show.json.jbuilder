json.review do 
    json.set! @review.id do 
        json.partial! 'api/reviews/review',
        review: @review
        json.name @review.user.name 

    end
end 
