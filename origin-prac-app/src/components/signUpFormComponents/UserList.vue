<template>
  <ul>
    <li v-for="(userInfo, id) in props.userInfos" :key="id">
      {{ id + 1 }}: {{ userInfo }}
    </li>
  </ul>
</template>

<script setup lang="ts">
interface UserListProps {
  userInfos: Array<string>
}

// const props = defineProps<{ userInfos: Array<string> }>()
const props = defineProps<UserListProps>()

</script>

<style scoped></style>
