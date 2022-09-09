class RemoveColFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :cart_items, :session_id
    add_column :cart_items, :user_id, :bigint, null: false
    add_foreign_key :cart_items, :users, column: :user_id
    add_index :cart_items, [:user_id, :product_id], unique: true
  end
end
