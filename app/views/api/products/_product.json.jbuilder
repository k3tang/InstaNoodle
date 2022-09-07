json.extract! product,
    :id,
    :name,
    :desc,
    :price
    
    json.photo_url url_for(product.photo)



