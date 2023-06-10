### 【買物時短君】

### 【Git 情報】

![GitHub repo size](https://img.shields.io/github/repo-size/SatoruKikuchi123/soro_project_dig_btc_kikuchi)
![GitHub last commit](https://img.shields.io/github/last-commit/SatoruKikuchi123/soro_project_dig_btc_kikuchi)
![GitHub top language](https://img.shields.io/github/languages/top/SatoruKikuchi123/soro_project_dig_btc_kikuchi)
![GitHub language count](https://img.shields.io/github/languages/count/SatoruKikuchi123/soro_project_dig_btc_kikuchi)

---

### 【使用システム】

<div>
<img src="https://img.shields.io/badge/-Git-F05032.svg?logo=git&style=plastic">
<img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
<img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=plastic">
<img src="https://img.shields.io/badge/-Css3-1572B6.svg?logo=css3&style=plastic">
<img src="https://img.shields.io/badge/-Html5-E34F26.svg?logo=html5&style=plastic">
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=plastic">
<img src="https://img.shields.io/badge/-Postman-FF6C37.svg?logo=postman&style=plastic">
<img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=plastic">
<img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=plastic">
<img src="https://img.shields.io/badge/-Nodemon-76D04B.svg?logo=nodemon&style=plastic">
<img src="https://img.shields.io/badge/-Npm-CB3837.svg?logo=npm&style=plastic">
</div>

<hr>

## システム概要

このシステムは買物時間の短縮をサポートします。

### 背景

- 【困りごと】買物に時間がかかる
-           理由 → スーパの売り場の配置が分かっていないため売り場間の行き来が多い
- 【欲しいシステム】 一筆書きのように買物するために買い物リストを売り場順に並び替えてほしい

### 使用 URL（デプロイ先）

- 実際のシステム[「買物時短君」](https://kjk.onrender.com/)はこちらになります。

## 機能

- 買うものを登録
- 買ったものを削除、チェック
- お店毎に買い物リストをソート
- お店の登録

## アーキテクチャー

![](img/arki.png)

## プログラム構成

![](img/kou.png)

## データベーススキーマ

![](img/sukima.png)

## 使用環境

- macOS
- node.js
- PostgreSQL

## 使い方(ローカル)

1. ライブラリを `npm i` でインストールしてください。
2. psql
3. CREATE DATABASE kj
4. npm run migrate
5. npm run seed
6. npm run server
7. npm start

## インストール

```
$ git clone https://github.com/〜〜
$ cd 〜〜
```

## テスト

server.js のテストを mocha&chai で実施

## 作者

菊地

## 今後の計画

- css でスタイルを整える
- お店の配置を図で見える化
