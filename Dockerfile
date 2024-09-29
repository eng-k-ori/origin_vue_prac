# 1 1.1 Debian系(ubuntu等)のLinuxベースのNode.js環境が既にセットアップされた状態のイメージを使用。
FROM node:lts-alpine
# 作業ディレクトリの設定
WORKDIR /app



# @          @@          @@          @@          @@          @@          @@          @@          @
# 1
# node:ltsの軽量版
# ------------------------------------------------------------------------------------------------
# FROM ubuntu:20.04にすると、追加コマンドが必要
# ------------------------------------------------------------------------------------------------
# FROM node:ltsに変えた場合、apt-get update && apt-get install -y、
# curl -sL https://deb.nodesource.com/setup_16.x | bash -、
# apt-get install -y nodejsのようなコマンドは不要になる。
# なぜなら、node:ltsのイメージは、すでにNode.jsとnpmが含まれており、これらを手動でインストールする必要がないから。

################################################################################################
# 1.1 立ち上げ手順
# ================================================================================================
# docker compose run --rm vue npm create vue
# ------------------------------------------------------------------------------------------------
# ルート配下にnode_modules、アプリディレクトリ作成
# アプリディレクトリ配下にpackage.json作成
# ================================================================================================
# docker-compose.ymlに、
# volumes:
#     - ./<作成したアプリ名>:/app
# を作成
# ================================================================================================
# npm install
# package.jsonに書かれた内容のライブラリをインストール