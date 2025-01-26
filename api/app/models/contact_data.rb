class ContactData < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :overview, presence: true
  validates :content, presence: true
end
