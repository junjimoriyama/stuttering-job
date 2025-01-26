class Api::V1::ContactDataController < ApplicationController

  def create
    Rails.logger.info "Received parameters: #{params.inspect}"

    # 受信したお問い合わせデータを変数化
    @contact_data = ContactData.new(contact_params)

    if @contact_data.save
      # 自動メール送信
      ContactMailer.contact_received(@contact_data.email, @contact_data.name, @contact_data.overview, @contact_data.content).deliver_later
      render json: { message: "問い合わせデータ保存成功" }, status: :created
    else
      render json: { errors: @contact_data.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
  
  def contact_params
    params.require(:contact_data).permit(:name, :email, :overview, :content)
  end
end

