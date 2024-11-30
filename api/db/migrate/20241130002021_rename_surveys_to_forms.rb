class RenameSurveysToForms < ActiveRecord::Migration[8.0]
  def change
    rename_table :surveys, :forms
  end
end
