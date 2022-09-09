class Product < ApplicationRecord
    validates :name, :price, presence: true
    has_one_attached :photo
    has_many :carts

#   def average_rating
#     average = reviews.average(:rating)
#     return average
#     # average && average.round(1)
#   end

end
