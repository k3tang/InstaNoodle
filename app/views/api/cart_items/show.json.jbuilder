json.cartItem do 
    json.set! @cart_item.product_id do
        json.partial! 'api/cart_items/cart_item', cart_item: @cart_item
    end
end 