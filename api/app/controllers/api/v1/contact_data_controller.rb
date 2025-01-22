class Api::V1::ContactDataController < ApplicationController

  def create
    Rails.logger.info "Received parameters: #{params.inspect}"

    @contact = ContactData.new(contact_params)

    if @contact.save
      render json: { message: "問い合わせデータ保存成功" }, status: :created
    else
      render json: { errors: @contact.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
  
  def contact_params
    params.require(:contact).permit(:name, :email, :overview, :content)
  end
end

