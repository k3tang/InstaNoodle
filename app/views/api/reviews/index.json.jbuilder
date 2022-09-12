json.reviews({})

json.reviews do 
    @reviews.each do |review|
        json.set! review.product_id do 
            json.partial! 'api/reviews/review', review: review
        end 
    end 
end 
