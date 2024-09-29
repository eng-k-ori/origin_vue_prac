<template>
  <div class="dev1">
    <h1>ここはTestParentTextArea.vue</h1>
    <input v-model="parentInputText" class='inputp' type="text" placeholder="親のv-modelのinputの初期値" @input="updateInputText"/>
    <p>親のv-modelのinputタグの入力値:{{ parentInputText }}</p>
    <button @click="parentInputTextButton">ボタン</button>
    <!-- 1 -->
    <input class='inputp' type="text" placeholder="親のref()のみのinputの初期値" @input="updateInputTRefText"/>
    <p>親のref()のみのinputタグの入力値:{{ parentRefInputText }}</p>
    <button @click="parentInputTRefTextButton">ボタン</button>
    <!-- ======== ここから子の練習エリア ========== -->
    <!-- :fooo:propsの親から渡すprops名はなんでも良い -->
    <div>
      <TestChildPropsInput :foo="childPropsInputText" @input="updateChildPropsInputText"/>
      <button @click="clearChildPropsInputTextButton">子の親からpropsで受け取ったinputの値のクリア</button>
    </div>
    <div>
      <TestChildModelInput :modelValue="childModelInputText" @update:modelValue="updateChildModelInputText"/>
      <button @click="clearChildModelInputTextButton">子の親からmodelで受け取ったinputのの値のクリア</button>
    </div>
    <div>
      <TestChildModelTextArea :modelValue="childModelTextAreaText" @update:modelValue="updateChildModelTextAreaText"/>
      <button @click="clearChildModelTextAreaTextButton">子の親からmodelで受け取ったtextareaの値のクリア</button>
      <ClearChildModelTextAreaTextButton @clear="clearChildModelTextAreaTextButton"/>
    </div>
  </div>
</template>
<!-- ------------------------------------------ -->
<script setup lang="ts">
import TestChildPropsInput from '@/components/TestChildPropsInput.vue';
import TestChildModelInput from '@/components/TestChildModelInput.vue';
import TestChildModelTextArea from '@/components/TestChildModelTextArea.vue';
import ClearChildModelTextAreaTextButton from '@/components/atoms/ClearChildModelTextAreaTextButton.vue';
import {ref} from 'vue'

// 親のv-modelの練習用の変数
const parentInputText = ref<string>('')
// 親のref変数の練習用の変数
const parentRefInputText = ref<string>('')

// 子の親からpropsで受け取る練習用の変数
const childPropsInputText = ref<string>('')
// 子の親からmodelで受け取る練習用の変数
const childModelInputText = ref<string>('')
const childModelTextAreaText = ref<string>('')

// const childInputText = ref<string>('')
// const textLength = ref<number>(0)

// function Counttext() {
// }

// 親のv-modelのinputのボタン
function parentInputTextButton() {
  parentInputText.value = "v-modelこんにちは"
}

// 親のref()のみのinputのボタン
function parentInputTRefTextButton() {
  parentRefInputText.value = "refこんにちは"
}

// 親のv-modelのinput
const updateInputText = (event:Event) => {
  parentInputText.value = (event.target as HTMLInputElement).value
}

// 親のref()のみのinput
const updateInputTRefText = (event:Event) => {
  parentRefInputText.value = (event.target as HTMLInputElement).value
}

// 子の親からpropsで受け取った変数に値をセットして親から子に返す変数
function updateChildPropsInputText(valueFromChild:string) {
  childPropsInputText.value = valueFromChild
}
// 子の親からmodelで受け取った変数に値をセットして親から子に返す変数
function updateChildModelInputText(valueFromChild:string) {
  childModelInputText.value = valueFromChild
}
// 子の親からmodelで受け取った変数に値をセットして親から子に返す変数
function updateChildModelTextAreaText(valueFromChild:string) {
  childModelTextAreaText.value = valueFromChild
}
// function updateChildInputText(valueFromChild) {
//   childInputText.value = valueFromChild
// }
// 子の親からpropsで受け取った変数に空文字をセットして親から子に返す変数
function clearChildPropsInputTextButton(){
  childPropsInputText.value = ""
}
// 子の親からmodelで受け取った変数に空文字をセットして親から子に返す変数
function clearChildModelInputTextButton(){
  childModelInputText.value = ""
}
// 子の親からmodelで受け取った変数に空文字をセットして親から子に返す変数
function clearChildModelTextAreaTextButton(){
  childModelTextAreaText.value = ""
  console.log("clearChildModelTextAreaTextButtonが発火")
}

</script>
<style scoped>
.dev1 {
  background-color: antiquewhite;
}
.inputp {
  background-color: lawngreen;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
}
</style>

<!-- /*
@          @@          @@          @@          @@          @@          @@          @@          @
1
現象の要約
<input v-model="parentInputText"> は、v-modelを使っているため、ボタンを押すとparentInputText.valueの値
が変わり、その変更が自動的に入力欄に反映されている。
------------------------------------------------------------------------------------------------
<input class='inputp' type="text" @input="updateRefMessage"/> は、v-modelを使わずにrefだけでデータを
扱っているため、ボタンを押しても入力欄の表示に変更が反映されない。
================================================================================================
問題の根本原因
v-modelを使っている場合、双方向データバインディングが自動的に機能する。
つまり、parentInputText.valueが変更されると、それに応じて入力欄の値も自動的に更新される。これがv-modelの大きな
利点。
------------------------------------------------------------------------------------------------
一方、refだけを使っている場合は、明示的にデータを反映させるための仕組みが必要になる。
現在のコードでは、parentRefInputText.valueをボタンを押すと変更しているが、input要素にその変更が自動的に反映さ
れるようにバインディングが行われていない。
v-modelを使っていない場合、手動で@inputイベントをキャッチして値を更新しているだけで、双方向のデータバインディング
がないため、parentRefInputTextの値が変わっても、その変更が自動的に入力フィールドに反映されない。
================================================================================================
解決方法
refだけを使った場合にも、入力欄に反映されるようにするには、明示的にvalue属性とイベントハンドラの組み合わせでデータ
バインディングを行う必要がある。
v-modelを使わずに手動で双方向バインディングを実現するためには、次のようにコードを修正する
------------------------------------------------------------------------------------------------
<input :value="parentRefInputText" class='inputp' type="text" placeholder="親のref()のみのinputの初期値" @input="updateRefMessage"/>
================================================================================================
<input :value="parentRefInputText"> という形で、value属性に手動でrefの値をバインド。
@input="updateRefMessage" で、入力の変化をキャッチして、parentRefInputText.valueを更新するようにしている。
これにより、手動で双方向データバインディングを実現している。
------------------------------------------------------------------------------------------------
v-modelを使う場合
v-model="parentInputText" で、フォーム要素とparentInputTextが双方向で自動的に同期するため、イベント処理や手
動でのvalueの設定は不要。
*/ -->