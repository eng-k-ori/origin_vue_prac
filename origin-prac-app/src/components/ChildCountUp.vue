<script setup lang="ts">
// import {ref} from 'vue'
// ------------------------------------------------------------------------------------------------
// 親から値を受け取るために子側でdefineProps()の記述が必要。definePropsの戻り値はリアクティブobj
// propsはreadOnlyで、データの流れは一方通行
const props = defineProps({
  foo: {
    type: Number,
    required: true
  },
  bar:{
    type: String,
  }
})
console.log(props.foo)



</script>
<template>

  <div class="div1">
    <h1>ここは子</h1>
    <p>{{ foo }}</p>
    <p>{{ bar }}</p>

    <!-- <p>{{ count }}</p> -->
  </div>
</template>
<style scoped>
.div1{
  background-color: lightcoral;
}
</style>