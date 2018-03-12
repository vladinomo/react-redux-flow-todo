## これはなに

react+redux プロジェクトのボイラープレート。create-react-app で生成されたコードがベース

## 使い方

このレポジトリをローカルにクローンしてディレクトリに移動し`npm install`

* `npm start`で開発用サーバー起動`localhost:3000`でページにアクセス
* `npm test`でテスト実行
* `npm build`でプロダクション用ビルドを生成

## Stack

* React
* Redux
* prettier
* eslint
* flow

## Todo

-[] 以下を導入して動作確認

* styled-component
* fix => babel-eslint と　 eslint-plugin-jsx-a11y が peer dependencies に含まれないって怒られるのでなんとかする

* react-router

-[] Mock 実装

-[] ディレクトリ構成分ける

-[] reducer 回りのテスト環境整える

-[] 使い方 readme に書く(vscode で prettier 動かすのにそっちに入れとくものとかその辺)
