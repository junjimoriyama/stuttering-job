Rails.application.routes.draw do
  get "up" => "rails/health#show"

  namespace :api do
    namespace :v1 do
      resources :surveys, only: [:index, :show, :create, :update, :destroy]
    end
  end
end

