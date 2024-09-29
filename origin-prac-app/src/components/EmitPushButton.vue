<script setup lang="ts">

</script>
<template>
  <div class="div">
    <p>ここはemit</p>
    <!-- resetというイベントを発生させる,emitは子で設定、イベントの内容は親で設定、でもemitの第二引数から親へデータを渡せる。このデータは親の関数の引数にもなる -->
    <button @click="$emit('reset', 100)">emitプッシュボタン</button>
  </div>

</template>
<style scoped>
.div{background-color: lightsalmon;}
</style>