class AddColToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :title, :text, null: false 
  end
end
