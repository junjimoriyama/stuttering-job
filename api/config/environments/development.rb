require "active_support/core_ext/integer/time"

Rails.application.configure do
  # ここで指定した設定は config/application.rb の設定よりも優先されます。

  # コードの変更を即座に反映させるため、サーバーの再起動を不要にします。
  config.enable_reloading = true

  # 起動時にコードを積極的にロードしません。
  config.eager_load = false

  # 完全なエラーレポートを表示します。
  config.consider_all_requests_local = true

  # サーバータイミングを有効にします。
  config.server_timing = true

  # Action Controller のキャッシュを有効/無効にします。デフォルトでは無効になっています。
  # キャッシュを切り替えるには、`rails dev:cache` を実行してください。
  if Rails.root.join("tmp/caching-dev.txt").exist?
    # 公開ファイルのキャッシュ制御ヘッダーを設定します。
    config.public_file_server.headers = { "cache-control" => "public, max-age=#{2.days.to_i}" }
  else
    # キャッシュを無効にします。
    config.action_controller.perform_caching = false
  end

  # キャッシュストアをメモリストアに設定します。キャッシュを回避するには :null_store を使用してください。
  config.cache_store = :memory_store

  # アップロードされたファイルをローカルファイルシステムに保存します（config/storage.yml を参照してください）。
  config.active_storage.service = :local

  # メーラーが送信できなくてもエラーを無視します。
  config.action_mailer.raise_delivery_errors = false

  # テンプレートの変更を即座に反映させます。
  config.action_mailer.perform_caching = false

  # メールテンプレート内で生成されるリンクに使用する localhost を設定します。
  config.action_mailer.default_url_options = { host: "localhost", port: 3000 }

  # 非推奨の機能に関する通知を Rails ログに出力します。
  config.active_support.deprecation = :log

  # 保留中のマイグレーションがある場合、ページの読み込み時にエラーを発生させます。
  config.active_record.migration_error = :page_load

  # データベースクエリをトリガーしたコードをログで強調表示します。
  config.active_record.verbose_query_logs = true

  # ログ内の SQL クエリに実行時間情報タグを追加します。
  config.active_record.query_log_tags_enabled = true

  # バックグラウンドジョブをキューに入れたコードをログで強調表示します。
  config.active_job.verbose_enqueue_logs = true

  # 翻訳が見つからない場合にエラーを発生させます。
  # config.i18n.raise_on_missing_translations = true

  # レンダリングされたビューにファイル名を注釈として追加します。
  config.action_view.annotate_rendered_view_with_filenames = true

  # Action Cable のアクセスを任意のオリジンから許可する場合はコメントを解除してください。
  # config.action_cable.disable_request_forgery_protection = true

  # before_action の only/except オプションで存在しないアクションが指定された場合にエラーを発生させます。
  config.action_controller.raise_on_missing_callback_actions = true

  # メーラー
  config.action_mailer.delivery_method = :letter_opener_web
  config.action_mailer.perform_deliveries = true

  # Gmail設定
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
  address:              'smtp.gmail.com',
  port:                  587,
  domain:               'gmail.com',
  user_name:            '@gmail.com',
  password:             'pocv nioq dzan saoo',
  authentication:       'plain',
  enable_starttls_auto:  true
  }
end

