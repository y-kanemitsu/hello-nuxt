# Carendarアプリを作るにあたって
## WEB上のCalendar機能に求める要件

* まだアナログでのカレンダーやスケジュール帳を愛用する人はかなり多い。**WEBならでは**の求められてる要件とは？
* **Google-Carendarがなんだかんだで最強？** => 他のアプリ(Gmail等)や連絡先・スマホと連携・同期出来る
* スマホの標準アプリのカレンダーで事足りてしまってる
* 仕事とプライベートで分けたい時もある => 表示だったり、色分けだったり。
* アナログだと、自分好みのデザインのカレンダーを使える。付箋やシールを好きなように手軽に貼れる。=>カレンダーのBackGroundを画像アップロードして使えるようにする？予定の種別選択時、画像アイコンの様なユーザーがアップした画像があると色も相まってユーザーに視認しやすくて良いかも知れない。

***

Build Setup

```
# install node.js(10↑)
https://nodejs.org/ja/

# git clone
$ clone https://github.com/y-kanemitsu/hello-nuxt.git

# install dependencies
$ npm install

# npm（Node Package Manager）のバージョンの確認
$ npm -v 

// 以下は簡易APIにより、静的サイト生成時に上手く動作しない原因となる為、コメントアウトしております。
// # ターミナルを二窓用意します。

// $ cd 99-api-mock
// $ npm install

***

$ cd ~
$ npm install
$ npm start

# 静的サイトgenerate

$ npm run generate

```

バージョンについて
このリポジトリは、以下の環境で実装されています。
正常に動作しない場合は、バージョンを確認してください。

* node v12.4.0
* npm 6.9.0
* nuxt 2.3.4