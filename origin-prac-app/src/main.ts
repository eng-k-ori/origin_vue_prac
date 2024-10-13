import './assets/main.css' // スタイルシートの読み込み
import { createApp } from 'vue' // Vueアプリの作成に必要な関数をインポート
import App from './App.vue' // メインのAppルートコンポーネントをインポート
import BaseComponent from './components/countUpComponents/BaseComponent.vue'
import router from './router' // ルーティングを管理するVue Routerのインポート

// main.tsはアプリケーションのエントリーポイントで、Vueアプリケーションの初期化や、Vueインスタンスの作成とコンポーネントの登録を行う。

// App.vueは最上位のルートコンポーネントで、ビューのテンプレートや基本的なレイアウトを定義する。
const app = createApp(App)
// 1 Vue Routerをアプリケーションに追加
app.use(router)
// 2 BaseComponentをグローバルコンポーネントとして登録
app.component('BaseComponent', BaseComponent)
// app.use(vuetify).mount("#app");
// 3 VueインスタンスをDOMの#app要素にマウント
app.mount('#app')

/*
@          @@          @@          @@          @@          @@          @@          @@          @
1
app.use(router)
routerオブジェクトをuseメソッドを使ってアプリケーションに組み込むことで、URLのパスに応じたコンポーネントの表示を
制御できるようになる。
これにより、<RouterLink>や<RouterView>などのVue Router固有の機能が使えるようになり、URLに応じて異なるページ
コンポーネントを表示することができる。

================================================================================================
2
BaseComponent.vue
グローバルコンポーネントとして登録するための処理。
グローバルに登録されたコンポーネントは、アプリ内のどのテンプレートでも直接利用できるようになる。
------------------------------------------------------------------------------------------------
この処理により、他のコンポーネントやページで、BaseComponentをわざわざインポートすることなく直接使用できるようにな
る。たとえば、<BaseComponent />というタグでどこでも使用可能。
------------------------------------------------------------------------------------------------
具体的な利用シーンの例
レイアウト全体での再利用: ナビゲーションバー、フッター、またはサイドメニューのような、複数のページで共通して使われ
るコンポーネントをグローバルに登録することで、コードを簡潔に保つことができる。

<template>
  <div>
    <HeaderComponent /> <!-- グローバルコンポーネントとして使用 -->
    <router-view /> <!-- ページのコンテンツがここに入る -->
    <FooterComponent /> <!-- グローバルコンポーネントとして使用 -->
  </div>
</template>

*/