Café NEST 会員・管理者サイト（練習用の見本）

■ 使い方
index.html をブラウザで開いてください（ダブルクリックでOK）。

■ 練習用アカウント
  会員：member1 / 1111
  管理者：admin / admin

■ 最初の状態に戻したいとき
データはブラウザの localStorage に保存されています。
開発者ツール（F12）→「Application」タブ →「Local storage」→ 中身を削除してください。

■ 注意
ログインは見た目だけの仕組みで、安全ではありません。
本物の個人情報やパスワードは入力しないでください。

■ ファイル構成
  index.html / login.html / member.html / admin.html
  css/style.css   … 元のスタイルの後ろに、追加分をまとめています
  js/data.js      … 最初のデータ（アカウント・メニュー・お知らせ）
  js/common.js    … 全ページ共通（データの読み書き・ページの保護・ログアウト）
  js/index.js / login.js / member.js / admin.js … 各ページの処理
JSのコメントに【Lv1】〜【Lv4】の目印を付けています。
