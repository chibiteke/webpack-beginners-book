// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js'),
  },
  // module: {
  //   rules: [
  //     {
  //       // ローダーの処理対象ファイル
  //       test: /\.js$/,
  //       // ローダーの処理対象となるディレクトリ
  //       include: path.resolve(__dirname, 'src/js'),
  //       use: [
  //         {
  //           // 利用するローダー
  //           loader: 'babel-loader',
  //           // ローダーのオプション
  //           options: {
  //             presets: [['@babel/preset-env', { modules: false }]],
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  //
  // 別の書き方1<==うまくいかない
  // module: {
  //   rules: [
  //     {
  //       test: /\.js $/,
  //       exclude: /node_ modules/,
  //       use: [
  //         {
  //           loader: 'babel-loader?{ "presets":[["@babel/env", {"modules": false}]] }',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // 別の書き方2
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: [['@babel/preset-env', { modules: false }]],
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // 利用するローダーが１つだけであれば、useを省略できる
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { modules: false }]],
        },
      },
    ],
  },
  //
  //複数のローダーを指定するときはuseを使う
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: [['@babel/preset-env', { modules: false }]],
  //           },
  //         },
  //         {
  //           loader: 'jshint-loader',
  //         },
  //       ],
  //     },
  //   ],
  // },
};
