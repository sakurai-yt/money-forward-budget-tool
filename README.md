# Money Forward 予算計算ツール

## 概要

このリポジトリは、簡単な予算計算ツールを提供します。
予算と口座残高を揃えるように管理しているため、現在の予算、未分類残高、および銀行口座の残高を入力すると、予算残とGAPを自動的に計算するツールを作成しました。
また、リセットボタンを使用して入力をクリアし、計算を再スタートすることができます。
このツールはHTML、CSS、JavaScriptを使用して構築されています。
実際の動作を確認するには、以下のURLにアクセスしてください: https://tools.skri.gr.jp/mf-budget/index.html

## ファイル構成

- `index.html` - ツールのHTML構造を定義したファイル。
- `styles.css` - ツールのスタイル（デザイン）を定義したCSSファイル。
- `script.js` - ツールの機能（予算計算）を実現するためのJavaScriptファイル。

## 使用方法

1. リポジトリをクローンまたはダウンロードします。
   ```bash
   git clone https://github.com/sakurai-yt/money-forward-budget-tool.git
   ```
2. 任意のブラウザで`index.html`を開きます。

3. 以下の項目を入力します。
   - 予算残高
   - 未分類残
   - 銀行口座残高

4. 実予算残とGAPが自動的に計算され、表示されます。

5. **リセットボタン**をクリックすると、すべての入力フィールドがクリアされ、計算結果が初期値に戻ります。

## セキュリティ対策

このツールでは、以下のセキュリティ対策を実施しています。

- **Content Security Policy (CSP)**: 不正なスクリプトやスタイルの読み込みを防ぐために、CSPを設定しています。
- **入力バリデーション**: ユーザーが入力したデータが有効な数値であることを確認しています。無効な入力は拒否され、エラーメッセージがコンソールに出力されます。
- **エラーハンドリング**: 計算中に予期しないエラーが発生した場合でも、アプリケーションがクラッシュしないようにエラーハンドリングを実装しています。
- **リセット機能**: リセットボタンを追加し、簡単にフォームを初期状態に戻せるようにしています。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細は`LICENSE`ファイルを参照してください。

## 貢献

このプロジェクトへの貢献は大歓迎です。バグの報告、新機能の提案、プルリクエストは随時受け付けています。