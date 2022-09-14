json.cartItems({})

json.cartItems do 
    @cart_items.each do |cart_item|
        json.set! cart_item.product_id do 
            json.partial! 'api/cart_items/cart_item', cart_item: cart_item
            # json.price cart_item.product.price
        end 
    end 
end 