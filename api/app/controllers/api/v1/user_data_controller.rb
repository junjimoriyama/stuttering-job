class Api::V1::UserDataController < ApplicationController
  before_action :set_user_data, only: [:show, :update, :destroy]

  def index
    @user_data = UserData.all
    render json: @user_data
  end

  def show
    @user_data = UserData.find(params[:id])
    render json: @user_data
  end

  def create
    @user_data = UserData.new(user_data_params)
    if @user_data.save
      # 自動メール送信
      RegisterMailer.register_story(@user_data.email, @user_data.username).deliver_now
      render json: @user_data, status: :created
    else
      render json: { errors: @user_data.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @user_data.update(user_data_params)
      render json: @user_data
    else
      render json: { errors: @user_data.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user_data.destroy
    head :no_content
  end

  private

  def set_user_data
    @user_data = UserData.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "User data not found" }, status: :not_found
  end

  def user_data_params
    params.require(:user_data).permit(
      :age, :gender, :industry, :job_details, :reason,
      :employment, :years, :job_difficulty, :job_struggles,
      :job_hunt_difficulty, :job_hunt_struggles, :notebook,
      :free, :username, :email
    )
  end
end
