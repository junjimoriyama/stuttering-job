class Form < ApplicationRecord

  # バリデーション: 必須項目
  validates :age, :gender, :industry, :employment, :years, 
            :job_difficulty, :job_hunt_difficulty, :notebook, presence: true

  # バリデーション: 文字列の長さ
  validates :username, :email, length: { maximum: 255 }, presence: true
  validates :job_details, length: { maximum: 300 }
  validates :reason, :job_struggles, :job_hunt_struggles, :free, length: { maximum: 1000 }

  # バリデーション: email形式
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true

  # バリデーション: 数値
  validates :job_difficulty, :job_hunt_difficulty, numericality: { only_integer: true }

end
