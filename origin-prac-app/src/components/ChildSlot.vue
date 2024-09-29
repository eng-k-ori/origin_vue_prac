<script setup lang="ts">
</script>
<template>
  <div class="diva">
    <p>slotされ子コンポーネント</p>
    <div>
      <!-- この部分は親がデータを動的に渡すよ -->
    <slot name="first"></slot>
    </div>
    <slot name="second"></slot>
    <div>

    </div>
  </div>
</template>
<style scoped>
.diva{
  background-color: lightslategrey;
  box-shadow: 3px 3px 3px;
  padding: 4px;
  border: 3px;
}
.a {text:red}
</style>