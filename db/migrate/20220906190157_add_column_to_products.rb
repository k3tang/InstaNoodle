class AddColumnToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :image, :text, null: false
  end
end
