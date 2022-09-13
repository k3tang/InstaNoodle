class Product < ApplicationRecord
    validates :name, :price, presence: true
    has_one_attached :photo

    has_many( 
    :carts,
    foreign_key: :product_id,
    class_name: 'CartItem',
    dependent: :destroy
    )

    has_many :reviews

#   def average_rating
#     average = reviews.average(:rating)
#     return average
#     # average && average.round(1)
#   end

end
