class AddUniqueIndexToFormsEmail < ActiveRecord::Migration[8.0]
  def change
    add_index :forms, :email, unique: true
  end
end
