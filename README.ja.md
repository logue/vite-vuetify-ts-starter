# Vue 3 + Vuetify + TypeScript + Vite スターター

[English](README.md)

[![TypeScript](https://img.shields.io/badge/TypeScript-7-%230074c1.svg)](http://www.typescriptlang.org/)
[![Node.js Version](https://img.shields.io/badge/node-%5E20.19.0%20%7C%7C%20%3E%3D22.12.0-brightgreen.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11-pink.svg)](https://pnpm.io/)
[![Vite](https://img.shields.io/badge/vite-8-purple.svg)](https://vite.dev/)
[![X Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://x.com/logue256)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/logue?label=Sponsor&logo=github&color=ea4aaa)](https://github.com/sponsors/logue)

このテンプレートは、Vue 3 と TypeScript を使用して Vite で開発を始めるのに役立ちます。Vue 3 の `<script setup vapor>` SFC を使用しており、[script setup ドキュメント](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) を参照して詳細を確認してください。

[vue-router](https://router.vuejs.org/) と [Pinia](https://pinia.vuejs.org/) [^1] が含まれています。

さらに、[ESLint](https://eslint.org/)、[Stylelint](https://stylelint.io/)、[Prettier](https://prettier.io/) が含まれており、実行時とコミット時に自動で実行されるように設定されています。（これらの設定は厳しく設定されているので、必要に応じて緩和してください。）

開発サーバーの実行時には、[vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker) によってリアルタイムでチェックされます。

`.env` ファイルで `VITE_APP_TITLE` を定義してください。

## AI エージェント向けガイド

このリポジトリには、GitHub Copilot / Claude / Cursor などのコーディングエージェント向けガイドラインとして [AGENTS.md](AGENTS.md) が含まれています。

## 🚀 クイックスタート

### インストール

```bash
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開いてください。

### ビルド

```bash
pnpm build
```

### テスト

```bash
pnpm test:unit
pnpm test:e2e
```

## ✨ 特徴

- **Vue 3** + **TypeScript** + **Vite** の組み合わせ
- **vue-router** と **Pinia** によるルーティングと状態管理
- **ESLint**、**Stylelint**、**Prettier** によるコード品質管理
- **Vitest** によるユニットテスト
- **Playwright** による E2E テスト
- **vite-plugin-checker** によるリアルタイム型チェック
- 厳格なリンター設定で高品質なコードを維持

## 🛠️ 推奨 IDE 設定

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（Vetur は無効化してください）。

## 🌐 推奨ブラウザ設定

- Chromium ベースのブラウザ（Chrome, Edge, Brave など）:
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Chrome DevTools で Custom Object Formatter をオンにする](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Firefox DevTools で Custom Object Formatter をオンにする](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📋 コマンド一覧

このテンプレートは [create-vue](https://github.com/vuejs/create-vue-templates/tree/main/typescript-router-pinia-vitest-playwright-eslint) のコマンドに近づけて設計されています。

| コマンド        | 説明                                     |
| --------------- | ---------------------------------------- |
| `dev`           | 開発サーバーを起動                       |
| `clean`         |                                          |
| `lint`          | すべてのリンターを実行                   |
| `lint:oxlint`   | oxlint を実行                            |
| `lint:eslint`   | ESLint を実行                            |
| `lint:style`    | Stylelint を実行                         |
| `test`          | Vitest を実行                            |
| `test:unit`     | ユニットテストを実行                     |
| `test:coverage` | カバレッジレポートを出力                 |
| `test:e2e`      | E2E テストを実行                         |
| `build`         | 本番用ビルド                             |
| `build:analyze` | Bundle Analyzer を実行                   |
| `build:clean`   | 本番ビルドファイルをクリア               |
| `build-only`    | チェックなしで本番ビルド（デプロイ用）   |
| `clean`         | 成果物をクリア                           |
| `clean:hard`    | 成果物と開発サーバーのキャッシュをクリア |
| `type-check`    | Vue マークアップをチェック               |
| `preview`       | 本番ビルドで生成されたプログラムを実行   |

## 🔧 TypeScript での `.vue` インポートサポート

TypeScript はデフォルトで `.vue` インポートの型情報を扱えないため、一般的な Vue コンポーネント型として shim されています。ほとんどの場合、これで問題ありませんが、手動の `h(...)` 呼び出しで props の検証を取得したい場合、VSCode のコマンドパレットから `Volar: Switch TS Plugin on/off` を実行して Volar の `.vue` 型サポートプラグインを有効にできます。

[^1]: [Pinia](https://pinia.vuejs.org/) は、Vuex を置き換える推奨の状態管理ライブラリです。詳細は <https://github.com/vuejs/rfcs/discussions/270#discussioncomment-2066856> を参照してください。

## 🐛 トラブルシューティング

ファイルを追加または削除するとエラーが発生し、修正しても開発サーバーに反映されない場合があります。その場合は、開発サーバーを停止し、`node_modules/.vite` ディレクトリ内のすべてのファイルを削除してください。`clean` コマンドでも実行できます。

Node v21.0.0 を使用している場合、正しく動作しません。21.1.0 以降にアップグレードしてください。

## 📝 チェックリスト

このテンプレートを使用する際は、以下のチェックリストに従って情報を適切に更新してください。

- [ ] `LICENSE` の作者名を変更
- [ ] `public` のファビコンを変更
- [ ] ファンディング情報が含まれる `.github` フォルダを削除
- [ ] プロジェクトの方針に合わせて `AGENT.md` を見直す
- [ ] README をクリーンアップし、不要なルートを削除

## 🔗 関連プロジェクト

- [vite-vue3-ts-starter](https://github.com/logue/vite-vue3-ts-starter)
- [vite-vuetify-ts-starter](https://github.com/logue/vite-vuetify-ts-starter) - Vuetify 3 を使用
  - [tauri-vuetify-starter](https://github.com/logue/tauri-vuetify-starter) - クロスプラットフォームのディスクトップアプリ向け
- [rsbuild-vue-starter](https://github.com/logue/rsbuild-vue-starter) - Vite の代わりに Rsbuild スタックを使用したもの。
