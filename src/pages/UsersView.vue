<template>
  <TaskUser
    v-for="{id, name, email, phone} in usersStore.users"
    :key="id"
    :userName="name"
    :userEmail="email"
    :userPhone="phone"
  />
</template>

<script lang="ts" setup>
import TaskUser from '@/components/TaskUser.vue'
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

</script>

<style>
</style>
