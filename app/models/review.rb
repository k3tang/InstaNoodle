class Review < ApplicationRecord
    validates :product_id, :user_id, :rating, :body, presence: true
    validates :product_id, uniqueness: { scope: :user_id}

    belongs_to :user
    belongs_to :product 
end
