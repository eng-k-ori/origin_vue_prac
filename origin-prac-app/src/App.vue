
<!-- App.vueは最上位のルートコンポーネントで、すべての他のページやコンポーネントはこのコンポーネント内で表示される。
ビューのテンプレートや基本的なレイアウトを定義する。 -->

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/countUp">CountUp</RouterLink>
        <RouterLink to="/testTextArea">testTextArea</RouterLink>
        <RouterLink to="/signUp">Regist</RouterLink>
      </nav>
    </div>
  </header>
  <!-- <ParentCountUp></ParentCountUp> -->
  <!-- Vue Routerで指定されたルートに応じて表示されるコンポーネントがここに動的に挿入される。 -->
  <RouterView />
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ParentCountUp from './pages/ParentCountUp.vue';
</script>
<!-- ================================================================================================ -->
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: cadetblue;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* 画面幅が1024px以上の場合に適用されるCSSルールを定義 */
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
