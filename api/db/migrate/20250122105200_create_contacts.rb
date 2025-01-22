class CreateContacts < ActiveRecord::Migration[8.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :overview
      t.text :content

      t.timestamps
    end
  end
end
