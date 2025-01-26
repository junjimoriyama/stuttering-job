class ContactMailer < ApplicationMailer
  def contact_received(email, name, overview, content)
    @name = name
    @overview = overview
    @content = content
    mail(
      to: email,
      subject: "お問い合わせありがとうございます"
    )
  end
end