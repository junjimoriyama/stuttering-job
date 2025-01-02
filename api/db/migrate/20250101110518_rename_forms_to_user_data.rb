class RenameFormsToUserData < ActiveRecord::Migration[8.0]
  def change
    rename_table :forms, :user_data
  end
end
