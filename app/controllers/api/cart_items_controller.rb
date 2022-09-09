class Api::CartItemsController < ApplicationController
# wrap_parameters include: CartItem.attribute_names + [:photo], format: :multipart_form

before_action :require_logged_in

    def index 
        user_id = current_user[:id]
        @cart_items = CartItem.where(user_id: user_id)
    end 


    def create 
        @cart_item = CartItem.new(cart_params)
        if @cart_item.save
            render 'api/cart_items/show'
        else
            render json: {errors: ['Unable to add to cart.']}, status: 422;
        end
    end 


    def update 
        set_cartItem
        if @cart_item.update(cart_params)
            render 'api/cart_items/show'
        else 
            render json: {errors: ['Unable to update cart.']}, status: 422;
        end
    end 

    def destroy
        set_cartItem
        if @cart_item.destroy
            render json: {message: 'Successfully removed from cart.'}
        end 
    end 

    private 

    def set_cartItem 
        @cart_item = CartItem.find(params[:id])
    end 

    def cart_params 
        params.require(:cart_item).permit(
            :product_id,
            :quantity,
            :user_id
        )
    end
end

