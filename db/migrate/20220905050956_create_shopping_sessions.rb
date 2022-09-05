class CreateShoppingSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :shopping_sessions do |t|
      t.integer :user_id, null: false, foreign_key: true 
      t.decimal :total, null: false

      t.timestamps
    end
    add_index :shopping_sessions, [:user_id, :id], unique: true
  end
end
