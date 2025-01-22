1, railsにcontactテーブル増やす


2, herokuに結びついているgit更新
　- git add .
  - git commit -m""
  - git subtree push --prefix api/ heroku main の順で実行


3, heroku run rails db:migrate:status -a stuttering-job実行

Status   Migration ID    Migration Name
--------------------------------------------------
   up     20241127124735  Create surveys
   up     20241130002021  Rename surveys to forms
   up     20241130104827  Change years type in forms
   up     20241203011600  Add uniaue index to forms email
   up     20250101110518  Rename forms to user data
  down    20250122105200  Create contacts
  down    20250122105840  Rename contacts to contact data


4, heroku run rails db:migrate -a stuttering-job実行
Railsアプリケーションがデータベースに接続しようとした際に、指定されたソケット (/var/run/postgresql/.s.PGSQL.5432) を通じてPostgreSQLデータベースに接続できない