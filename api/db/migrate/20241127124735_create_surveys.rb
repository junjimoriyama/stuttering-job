class CreateSurveys < ActiveRecord::Migration[8.0]
  def change
    create_table :surveys do |t|
      t.integer :age
      t.string :gender
      t.string :industry
      t.text :job_details
      t.text :reason
      t.string :employment
      t.integer :years
      t.integer :job_difficulty
      t.text :job_struggles
      t.integer :job_hunt_difficulty
      t.text :job_hunt_struggles
      t.string :notebook
      t.text :free
      t.string :username
      t.string :email

      t.timestamps
    end
  end
end
