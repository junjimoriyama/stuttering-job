# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2024_11_30_002021) do
  create_table "forms", force: :cascade do |t|
    t.integer "age"
    t.string "gender"
    t.string "industry"
    t.text "job_details"
    t.text "reason"
    t.string "employment"
    t.integer "years"
    t.integer "job_difficulty"
    t.text "job_struggles"
    t.integer "job_hunt_difficulty"
    t.text "job_hunt_struggles"
    t.string "notebook"
    t.text "free"
    t.string "username"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
