<template>
  <SignUpForm
    :userName="userName"
    :password="password"
    @update:userName="userName = $event"
    @update:password="password = $event"
    @register="register"
    @clear="clear"
  />
  <UserList :userInfos="userInfos"/>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import SignUpForm from '@/components/signUpFormComponents/SignUpForm.vue';
import UserList from '@/components/signUpFormComponents/UserList.vue';

const userName = ref<string>('')
const password = ref('')
const userInfos = ref<Array<string>>([])

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

</style>