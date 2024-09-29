<template>
  <button class="b" @click="handleClear">子の親からmodelで受け取ったtextareaの値のクリア</button>
</template>
<!-- ------------------------------------------ -->
<script setup lang="ts">
const emit = defineEmits(['clear'])
function handleClear(){
  emit('clear')
}

</script>
<style scoped>
.b{background-color: aqua;}

</style>
<!-- /*

*/ -->