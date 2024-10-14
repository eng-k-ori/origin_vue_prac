<template>
  <h1>ここはAsyncぺージ</h1>
  <!-- ボタンを押してfetchをトリガー -->
  <button @click="fetchJson">データを取得</button>

  <!-- fetchされたデータを表示するエリア -->
  <div v-if="firstIdUser">
    <h2>取得したデータ:</h2>
    <p>ID: {{ firstIdUser.id }}</p>
    <p>名前: {{ firstIdUser.name }}</p>
    <p>email: {{ firstIdUser.email }}</p>
  </div>


</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from 'axios';

const firstIdUser = ref()

async function fetchJson(){
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // axiosではresponse.json()のような変換処理が不要です。axiosは内部で自動的にレスポンスデータをJSON形式からJSオブジェクト
    // に変換してくれます。
    const data = response.data;
    firstIdUser.value = data.find((user: any) => user.id === 1);
  } catch(error){
    alert(`データ取得エラー:${error}`)
  }
}

// fetchを使用
// async function fetchJson(){
//   try{
//     // jsonPlaceholderからresponse(JSON形式)をfetch
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // フェッチしたdataは配列（要素はオブジェクト、オブジェクトの中身はjson形式）
//     // json():json関数を実行。JSON形式の文字列をJavaScriptオブジェクトに変換。json()は非同期処理であるため、awaitが必要です。
//     const data = await response.json()
//     firstIdUser.value = data.find((user: any) => user.id === 1);
//   } catch(error){
//     alert(`データ取得エラー:${error}`)
//   }
// }

</script>
<style scoped>
/* form {background-color: limegreen;}
div {background-color:  lightpink;} */

</style>