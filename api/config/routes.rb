Rails.application.routes.draw do
  # 動かしたい'コントローラー#アクション'
  root 'api/v1/user_data#index'
  get "up" => "rails/health#show"

  namespace :api do
    namespace :v1 do
      resources :user_data, only: [:index, :show, :create, :update, :destroy]
    end
  end

  # Letter Opener Webのルーティング (開発環境のみ)
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
