<script setup lang="ts">
import {onMounted, onUpdated, ref} from 'vue'
import BaseComponent from './BaseComponent.vue';
import ChildCountUp from './ChildCountUp.vue';
// @ts-ignore
import EmitPushButton from './EmitPushButton.vue';
// @ts-ignore
import ChildSlot from './ChildSlot.vue';
// ------------------------------------------------------------------------------------------------
let count = ref<number>(1)

// const str:string = "卍固め"
// ------------------------------------------------------------------------------------------------
const clickButton = () => {
  count.value += 1
  // count += 1
  console.log(count.value)
}

const onReset = (val:number) =>{
  count.value = val
}
// ------------------------------------------------------------------------------------------------
onMounted(() => {
  console.log("マウントされたよ！")
})
onUpdated(() => {
  console.log("再レンダリングされたよ！")
})
</script>
<template>
  <BaseComponent />
  <div class="div">
    <h1>ここは親</h1>
    <button @click="clickButton">カウントアップ</button>
  </div>
  <!-- :(v-bind)がないと、文字列として渡すのみ -->
  <ChildCountUp :foo="count" :bar="'卍固め'"/>
  <!-- resetは子からemitされるイベント -->
  <EmitPushButton @reset="onReset"/>
  <!-- slotはpropsと同じで子へデータを渡せるが、こちらはhtmlタグも渡せる -->
  <ChildSlot>
    <!-- 複数のslotを渡す場合はtemplateタグにv-slotを付ける -->
    <!-- #はv-slotの省略記号 -->
    <template v-slot:first>
      <h1>firstだよ</h1>
    </template>
    <template #second>
      <h1>secondだよ</h1>
    </template>
  </ChildSlot>


</template>
<style scoped>
.div{
  background-color: lightyellow;
}
</style>