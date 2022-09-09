json.cart_item do 
    json.partial! 'api/cart_items/cart_item', cart_item: @cart_item
end 