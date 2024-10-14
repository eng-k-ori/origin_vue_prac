<template>
  <!-- @update:userName="userName = $event -->
  <SignUpForm
    :userName="userName"
    :password="password"
    @update:userName="updateUserName"
    @update:password="updatePassword"
    @register="register"
    @clear="clear"
  />
  <UserList :userInfos="userInfos"/>
  <ComputedArea
    :firstInputNum="firstInputNum"
    :secondInputNum="secondInputNum"
    :sumNum="sumNum"
    @update:firstInputNum="updateFirstInputNum"
    @update:secondInputNum="updateSecondInputNum"
  />
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import SignUpForm from '@/components/signUpFormComponents/SignUpForm.vue';
import UserList from '@/components/signUpFormComponents/UserList.vue';
import ComputedArea from '@/components/signUpFormComponents/ComputedArea.vue';

const userName = ref<string>('')
const password = ref('')
const userInfos = ref<Array<string>>([])

const firstInputNum = ref<number>(0)
const secondInputNum = ref<number>(0)

// userNameを更新する関数
function updateUserName(emitValue: string) {
  userName.value = emitValue;
}
// passwordを更新する関数
function updatePassword(emitValue: string) {
  password.value = emitValue;
}

function updateFirstInputNum(emitValue: number) {
  firstInputNum.value = emitValue;
}

function updateSecondInputNum(emitValue: number) {
  secondInputNum.value = emitValue;
}
// ロジックの実装は親なので、親側で記載。
const sumNum = computed(() => {
  return firstInputNum.value + secondInputNum.value
})

function register(){
  userInfos.value.push(userName.value)
  console.log('親のregisterが発火')
}

function clear(){
  userName.value = ""
  password.value = ""
  console.log('親のclearが発火')
}

</script>
<style scoped>
form {background-color: limegreen;}
div {background-color:  lightpink;}

</style>