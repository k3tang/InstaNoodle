class Api::ReviewsController < ApplicationController

    def index 
        user_id = current_user[:id]
        @reviews = Review.where(user_id: user_id)
        render 'api/review/index'
    end 

    def create
        @review = Review.new(review_params)
        if @review.save 
            render 'api/review/show'
        else 
            render json: {errors: ["Unable to create review"]}, status: 422
        end 
    end 

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render 'api/review/show'
        else 
            render json: {errors: ["Unable to update review"]}, status: 422
        end 
    end 

    def destroy 
        @review = Review.find(params[:id])
        if @review.destroy
            render json: { message: "Successfully removed from cart."}
        end 
    end 

    private 

    def review_params
        params.require(:review).permit(
            :review,
            :user_id,
            :product_id,
            :rating)
    end 
end
