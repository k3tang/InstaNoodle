class DropShoppingSessions2 < ActiveRecord::Migration[7.0]
  def change
    drop_table :shopping_sessions
  end
end
