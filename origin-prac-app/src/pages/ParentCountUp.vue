
<template>
  <h1>ここはParentCountUp</h1>
  <div class="div">
    <h1>ここは親</h1>
    <button @click="clickButton">カウントアップ</button>
  </div>
  <!-- :(v-bind)がないと、文字列として渡すのみ -->
  <ChildCountUp :foo="count" :bar="'卍固め'"/>
  <!-- resetは子からemitされるイベント -->
  <EmitPushButton @add="add100Count"/>
  <!-- slotはpropsと同じで子へデータを渡せるが、こちらはhtmlタグも渡せる -->
  <ChildSlot>
    <!-- 複数のslotを渡す場合はtemplateタグにv-slotを付ける -->
    <template v-slot:first>
      <h1>firstだよ</h1>
    </template>
    <!-- #はv-slotの省略記号 -->
    <template #second>
      <h1>secondだよ</h1>
    </template>
  </ChildSlot>
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
import {onMounted, onUpdated, ref} from 'vue'
import ChildCountUp from '@/components/countUpComponents/ChildCountUp.vue';
// @ts-ignore
import EmitPushButton from '@/components/countUpComponents/EmitPushButton.vue';
// @ts-ignore
import ChildSlot from '@/components/countUpComponents/ChildSlot.vue';
// ------------------------------------------------------------------------------------------------
let count = ref<number>(1)
// const str:string = "卍固め"
// ------------------------------------------------------------------------------------------------
const clickButton = () => {
  count.value += 1
  // count += 1
  console.log(count.value)
}

const add100Count = (val:number) =>{
  // 100を入れる
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
<!-- ================================================================================================ -->
<style scoped>
.div{
  background-color: lightyellow;
}
</style>