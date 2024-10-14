
<template>
  <div>
  <h3>ここは計算エリア</h3>
  <input type="number" :value="props.firstInputNum" @input="updateFirstInputNum"/>
  +
  <input type="number" :value="props.secondInputNum" @input="updateSecondInputNum"/>
  =
  <input type="number" :value="props.sumNum" readonly/>
</div>
</template>

<script setup lang="ts">
interface computedAreaProps {
  firstInputNum: number,
  secondInputNum: number,
  sumNum: number
}
interface computedAreaEmits {
  (e: 'update:firstInputNum', value: number):void;
  (e: 'update:secondInputNum', value: number):void;
}

const props = defineProps<computedAreaProps>()
const emit = defineEmits<computedAreaEmits>()

function updateFirstInputNum(e:Event){
  const emitValue = e.target as HTMLInputElement;
  emit('update:firstInputNum', Number(emitValue.value))
}

function updateSecondInputNum(e:Event){
  const emitValue = e.target as HTMLInputElement;
  emit('update:secondInputNum', Number(emitValue.value))
}

</script>

<style scoped></style>
