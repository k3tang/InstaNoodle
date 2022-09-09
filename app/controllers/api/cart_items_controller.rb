class Api::CartItemsController < ApplicationController
end

def index 
    @cart_items = CartItem.find_by(params: user_id)
end 


def create 

end 


def update 
end 

def destroy
end 