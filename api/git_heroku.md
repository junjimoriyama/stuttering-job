
※rails3000ポートには保存できている。
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


<!-- DATABASE_URL の設定 -->
moriyamajunji@moriyamajunjiMacBook-Pro stuttering_job % heroku config:get 

→ DATABASE_URL -a stuttering-job

postgres://u5m874ia7ldpik:p538242011e595676217b96b146a66107a8fe41df888811bb4627f0226f12532e@cc0gj7hsrh0ht8.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d55vofsr3fe123

<!-- Heroku Postgresアドオンが有効か確認 -->
moriyamajunji@moriyamajunjiMacBook-Pro stuttering_job % heroku addons -a stuttering-job


 Add-on                                           Plan        Price        Max price State   
 ──────────────────────────────────────────────── ─────────── ──────────── ───────── ─────── 
 heroku-postgresql (postgresql-dimensional-29741) essential-0 ~$0.007/hour $5/month  created 
  └─ as DATABASE                                                                             

The table above shows add-ons and the attachments to the current app (stuttering-job) or other apps.

<!-- HerokuのPostgreSQLデータベースに接続できるか確認 -->

heroku pg:psql -a stuttering-job
\dt

      Name          |     Owner     |               Location                
------------------------+---------------+---------------------------------------
 aurora_temp_tablespace | rds_superuser | /rdsdbdata/tmp/aurora_temp_tablespace
 pg_default             | rdsadmin      | 
 pg_global              | rdsadmin      | 
(3 rows)




<!-- heroku run rails db:migrate:primary  -->








<!-- git subtree push --prefix api/ heroku main  -->