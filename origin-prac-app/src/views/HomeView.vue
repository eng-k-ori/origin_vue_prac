<script setup lang="ts">
import {ref, computed, watchEffect} from 'vue'

let word = ref<string>("momo")
const timeWord = ref<string>("")
// let word = "momo"
console.log(word)

let num = ref<number>(1)
const gnews = "https://news.google.com/home?hl=ja&gl=JP&ceid=JP:ja"

const userInput = ref<string>("wowo")
const changeNumWord = ref("soso")

let ok = ref<boolean>(true)

const fruits = ref<{id:number, name:string}[]>([
  {id:1, name:'apple'},
  {id:2, name:'banana'},
  {id:3, name:'grape'},
])

// ------------------------------------------------------------------------------------------------
const okChange = ():boolean =>{
  return ok.value =!ok.value
}

const evaluation = computed(()=>{
  console.log("computedが呼ばれた")
  return num.value > 5 ? changeNumWord : "popo"
})
console.log(`ealuationの値だよ:${evaluation.value}`)
function countUp() {
  num.value ++
  // console.log("ボタン押された")
  // console.log(num)
}

function wordChange(){
  word.value = "koko"
  console.log(word)
}

const onClickTime = () => {
  timeWord.value = new Date().toLocaleDateString()
}
const key = "click"

watchEffect(() => {
  // console.log(`watchEffectの参照しているnum:${num.value}`)
  setTimeout(() => {
    // console.log("after second")
  },2000)
})

</script>

<template>
  <main>
    <p>{{ word }}</p>
    <p>{{ num }}</p>
    <p>num同士を足した:{{ num + num }}</p>
    <div class="div1">
      <button class="ba" @click="countUp">ボタンだよ</button>
      <p>numが5以上でsosoに:{{  num > 5 ? changeNumWord : "popo" }}</p>
      <p>{{ evaluation }}</p>
    </div>
    <button class="ba" v-on:click="wordChange">wordChangeボタンだよ</button>
    <div>
      <button @[key]="onClickTime">時間を表示するボタン</button>
      <p>{{ timeWord }}</p>
    </div>
    <div>
      <a v-bind:href=gnews>gnewsに行きます</a>
    </div>
    <div>
      <input v-model="userInput" type="text"/>
      <p>inputとリンクしてます:{{ userInput }}</p>
    </div>
    <div class="div2">
      <p>この下はv-ifの練習</p>
      <button @click="okChange">true/false切り替えボタン</button>
      <h3 v-if="ok">okがtrue</h3>
      <h3 v-else>okがfalse</h3>
    </div>
    <div class="div3">
      <p>リストの練習</p>
      <!-- <li v-for="(fruit, index) in fruits" :key="fruit.id">{{ fruit.name }}と{{ fruit.id }}と{{ index }}</li> -->
      <!-- ↓分割代入 -->
      <li v-for="{id, name}, index in fruits" :key="id">{{ name }}と{{ id }}と{{ index }}</li>
    </div>

  </main>
</template>

<style scoped>
.ba{background-color: red;}
.div1{background-color: lightcyan;}
.div2{background-color: lightgreen;}
.div3{background-color: lightskyblue;}
</style>
