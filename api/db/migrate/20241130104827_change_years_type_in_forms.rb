class ChangeYearsTypeInForms < ActiveRecord::Migration[8.0]
  def up
    change_column :forms, :years, :string
  end

  def down
    change_column :forms, :years, :integer
  end
end
