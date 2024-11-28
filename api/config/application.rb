require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    config.load_defaults 8.0

    config.autoload_lib(ignore: %w[assets tasks])
    config.api_only = true

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3001' # フロントエンドのURL
        resource '*',                   # 全てのリソースに対して許可
          headers: :any,         # 全てのヘッダーを許可
          methods: %i[get post put patch delete options head], # 許可するHTTPメソッド
          credentials: true      # Cookieの使用を許可（必要なら）
      end
    end
  end
end
