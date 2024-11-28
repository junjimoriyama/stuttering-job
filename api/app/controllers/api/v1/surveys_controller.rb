class Api::V1::SurveysController < ApplicationController
  before_action :set_survey, only: [:show, :update, :destroy]

  def index
    @surveys = Survey.all
    render json: @surveys
  end

  def show
    render json: @survey
  end

  def create
    @survey = Survey.new(survey_params)
    if @survey.save
      render json: @survey, status: :created
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  def update
    if @survey.update(survey_params)
      render json: @survey
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @survey.destroy
    head :no_content
  end

  private

  def set_survey
    @survey = Survey.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Survey not found" }, status: :not_found
  end

  def survey_params
    params.require(:survey).permit(
      :age, :gender, :industry, :job_details, :reason,
      :employment, :years, :job_difficulty, :job_struggles,
      :job_hunt_difficulty, :job_hunt_struggles, :notebook,
      :free, :username, :email
    )
  end
end
