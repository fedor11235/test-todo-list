<template>
  <TaskUser v-for="{id, name} in usersStore.users" :key="id" :userName="name" />
</template>

<script lang="ts" setup>
import TaskUser from '@/components/TaskUser.vue'
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

</script>

<style>
</style>
