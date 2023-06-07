
[マークダウンの基本的使い方①](https://qiita.com/tbpgr/items/989c6badefff69377da7)  
[マークダウンの基本的使い方②](https://backlog.com/ja/blog/how-to-write-markdown/)

## Git

- `git branch` コマンドを実行して、ローカルに "morisaki" ブランチが作成されているかどうか確認。  
もし存在しない場合は、`git checkout -b morisaki` コマンドを使用して新しいブランチを作成。  

- **新しいブランチを作成し、それに切り替える**  
`git checkout -b morisaki`  
これにより、"morisaki" ブランチが作成され、現在のブランチが "morisaki" に切り替わる。  

- **変更をコミットする**  
`git commit -m "Commit message"`  
必要な変更をステージングし、コミットメッセージと共にコミットする。  

- **リモートリポジトリにブランチをプッシュする**  
`git push origin morisaki`  
これにより、"morisaki" ブランチがリモートリポジトリの "origin" にプッシュされる。  

## 環境設定（一から設定する方法）

1. Node.jsのインストール  

> ReactとExpressを使用する場合、通常はpackage.jsonを分けることが推奨される。  
> これにより、それぞれのパッケージの依存関係とスクリプトを独立して管理できる。  

1. Expressのセットアップ: コマンドラインでプロジェクトディレクトリに移動し、  
以下のコマンドを実行してExpressをインストール  
`npm install express`  

1. Expressアプリケーションのファイル（例: server.js）を作成し、`package.json` に以下を追加。  
```
"scripts": {
  "start": "node server.js"
}
```

[express のインストール方法](https://expressjs.com/ja/starter/installing.html)

1. Reactのセットアップ: プロジェクトディレクトリで以下のコマンドを実行  
`npx create-react-app client`  
これにより、新しい"client"ディレクトリが作成され、Reactプロジェクトがセットアップされる。  

[React のインストール方法](https://react.dev/learn/start-a-new-react-project)

1. Knexのセットアップ: コマンドラインでプロジェクトディレクトリに戻り、  
以下のコマンドを実行してKnexをインストール  
`npm install knex`  

1. プロジェクトディレクトリ内にknexfile.jsを生成  
`npx knex init`  

1. knexfile.jsをテキストエディタで開き、データベースの接続設定を編集  
```
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'greenfield',
      user: 'user',
      password: 'user'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'greenfield',
      user: 'user',
      password: 'user'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'greenfield',
      user: 'user',
      password: 'user'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
```
- `development`：開発環境の設定。（"production"や"staging"も追加できる）  
- `client`：使用するデータベースのクライアントを指定。この例ではPostgreSQLを使用しているが、他のデータベースに切り替える場合は適切なクライアントを指定。
- `connection`：データベースの接続情報を指定。
- `migrations`：マイグレーションファイルのディレクトリを指定。マイグレーションはデータベースのスキーマを変更するためのファイル。
- `seeds`：シーディングファイルのディレクトリを指定。シーディングはデータベースに初期データを挿入するためのファイル。
- `pool.min`：プール内に維持される最小の接続数を指定。アプリケーションがアイドル状態の場合でも、常にこの数の接続がプール内に存在する。デフォルト2。
- `pool.max`：プール内に許可される最大の接続数を指定。アプリケーションがアクティブな状態である場合、同時にこの数の接続がプールから提供される。デフォルト10。
> プーリングを使用することで、アプリケーションがデータベースへの接続を必要とするたびに接続を確立するのではなく、プール内の接続を再利用することができる。  
> これにより、接続のオーバーヘッドを削減し、パフォーマンスを向上させることができる。

1. データベースのマイグレーションファイルとシーディングファイルを保存するため  
"migrations"と"seeds"ディレクトリを作成  

[knex のインストール方法](https://knexjs.org/guide/#node-js)

1. PostgreSQLのNode.js用ドライバであるpgパッケージをインストールするためのコマンド  
`npm install pg`  
Knexと連携してPostgreSQLデータベースを使用する場合には、pgパッケージもインストールする必要がある。  

1. `package.json` の `scripts` セクションで、いくつかの `npm` スクリプトを定義  
```
"scripts": {
  "migrate": "knex migrate:latest",
  "seed": "knex seed:run --specific=my_products.js",
  "makeSeed": "knex seed:make"
}
```
- `migrate`：データベースのマイグレーションを実行する `knex migrate:latest` コマンドを実行。  
これにより、Knexが指定されたデータベース接続設定に基づいて最新のマイグレーションを実行。  

- `seed`：データベースのシードを実行する `knex seed:run --specific=my_products.js` コマンドを実行。  
ここでは特定のシーディングファイル `my_products.js` を実行。  

- `makeSeed`：新しいシーディングファイルを作成する `knex seed:make` コマンドを実行。  
これにより、Knexが新しいシーディングファイルのテンプレートを作成。  
`npm run makeSeed -- my_products` で `my_products.js` が  
`knexfile.js` に記載した以下に作成される。  
```
seeds: {
  directory: './db/seeds'
}
```
