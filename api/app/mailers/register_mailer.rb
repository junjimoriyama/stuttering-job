class RegisterMailer < ApplicationMailer
  def register_story(email, username)
    @username = username
    mail(
    to: email,
    subject: "体験談の投稿ありがとうございます。"
    )
  end
end
