class RenameContactsToContactData < ActiveRecord::Migration[8.0]
  def change
    rename_table :contacts, :contact_data
  end
end
