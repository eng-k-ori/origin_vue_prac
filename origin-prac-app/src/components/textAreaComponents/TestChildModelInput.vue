<template>
  <div class="dev3">
    <h1>ここはTestChildModelInput.vue</h1>
    <input class="ta3" type="text" :value="props.modelValue" @input="childModelInputTextEmit" placeholder="子のmodelで実装したinputの初期値"/>
    <p>親からpropsで渡って来たinputタグの値:{{ props.modelValue }}</p>
    <!-- <input class="ta" type="text" :value="props.modelValue" @input="childInputText" placeholder="子のinputの初期値"/>
    <p>子のinputタグの入力値:{{ props.modelValue }}</p> -->
  </div>
</template>
<!-- ------------------------------------------ -->
<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function childModelInputTextEmit(event:Event){
  const emitValue = (event.target as HTMLInputElement).value;
  emit('update:modelValue', emitValue);
}
</script>
<style scoped>
.dev3 {
  background-color: lightsalmon;
  margin-left: 20px;
  margin-right: 20px;
}
.ta3 {width: 100%;}
</style>
<!-- /*

*/ -->