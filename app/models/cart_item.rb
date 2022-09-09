class CartItem < ApplicationRecord
    validates :product_id, :user_id, :quantity, presence: true
    validates :product_id, uniqueness: {scope: :user_id}
    has_one_attached :photo
    belongs_to :user
    belongs_to :product

end
