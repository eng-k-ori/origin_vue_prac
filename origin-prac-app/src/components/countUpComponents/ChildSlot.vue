<template>
  <div class="diva">
    <p>slotされ子コンポーネント</p>
    <div>
      <!-- この部分は親がデータを動的に渡すよ -->
      <slot name="first"></slot>
    </div>
    <div>
      <slot name="second"></slot>
    </div>
  </div>
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
</script>
<!-- ================================================================================================ -->
<style scoped>
.diva{
  background-color: lightslategrey;
  box-shadow: 3px 3px 3px;
  padding: 4px;
  border: 3px;
}
.a {text:red}
</style>