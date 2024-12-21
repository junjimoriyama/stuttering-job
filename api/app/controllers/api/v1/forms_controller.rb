class Api::V1::FormsController < ApplicationController
  before_action :set_form, only: [:show, :update, :destroy]

  def index
    @forms = Form.all
    render json: @forms
  end

  def show
    render json: @form
  end

  def create
    @form = Form.new(form_params)
    if @form.save
      #　自動メール送信
      RegisterMailer.register_story(@form.email, @form.username).deliver_now
      render json: @form, status: :created
    else
      render json: {errors: @form.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @form.update(form_params)
      render json: @form
    else
      render json: @form.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @form.destroy
    head :no_content
  end

  private

  def set_form
    @form = form.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "form not found" }, status: :not_found
  end

  def form_params
    params.require(:form).permit(
      :age, :gender, :industry, :job_details, :reason,
      :employment, :years, :job_difficulty, :job_struggles,
      :job_hunt_difficulty, :job_hunt_struggles, :notebook,
      :free, :username, :email
    )
  end
end
