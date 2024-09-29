<template>
  <div class="dev4">
    <h1>ここはTestChildModelTextArea.vue</h1>
    <textarea class="ta4" type="text" :value="props.modelValue" @input="childModelModelTextAreaTextEmit" placeholder="子のmodelで実装したtextareaの初期値"></textarea>
    <p>親からmodelで渡って来たtextareaタグの値:{{ props.modelValue }}</p>
    <!-- <input class="ta" type="text" :value="props.modelValue" @input="childInputText" placeholder="子のinputの初期値"/>
    <p>子のinputタグの入力値:{{ props.modelValue }}</p> -->
  </div>
</template>
<!-- ------------------------------------------ -->
<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function childModelModelTextAreaTextEmit(event:Event){
  const emitValue = (event.target as HTMLInputElement).value;
  emit('update:modelValue', emitValue);
}
</script>
<style scoped>
.dev4 {
  background-color: lightgreen;
  margin-left: 20px;
  margin-right: 20px;
}
.ta4 {width: 100%;}
</style>
<!-- /*

*/ -->