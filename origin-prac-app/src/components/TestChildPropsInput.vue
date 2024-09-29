<template>
  <div class="dev2">
    <h1>ここはTestChildPropsInput.vue</h1>
    <input class="ta" type="text" :value="props.foo" @input="childPropsInputTextEmit" placeholder="子のpropsで実装したinputの初期値"/>
    <p>親からpropsで渡って来たinputタグの値:{{ props.foo }}</p>
    <!-- <input class="ta" type="text" :value="props.modelValue" @input="childInputText" placeholder="子のinputの初期値"/>
    <p>子のinputタグの入力値:{{ props.modelValue }}</p> -->
  </div>
</template>
<!-- ------------------------------------------ -->
<script setup lang="ts">
// const props = defineProps(['modelValue'])
const props = defineProps(['foo'])
const emit = defineEmits(['input'])

function childPropsInputTextEmit(event:Event){
  const emitValue = (event.target as HTMLInputElement).value;
  emit('input', emitValue);
}
</script>
<style scoped>
.dev2 {
  background-color: lightblue;
  margin-left: 20px;
  margin-right: 20px;
}
.ta {width: 100%;}
</style>
<!-- /*

*/ -->