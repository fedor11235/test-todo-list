<template>
  <div class="task">
    <div class="text">Задача: {{ text }}</div>
    <div>
      <label for="checkbox">Выполненно:</label>
      <input
        type="checkbox"
        id="checkbox"
        class="checkbox"
        :checked="done"
        @click="usersStore.changeTaskStatus(userId, taskId)"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

defineProps<{
  text: string
  done: boolean
  userId: number
  taskId: number
}>()
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin: 4px 16px;
  background-color: $color-main;
  color: white;
  .text {
    margin-right: 16px;
  }
  .checkbox {
    display:inline-block;
    width:19px;
    height:19px;
    margin:-1px 4px 0 8px;
    vertical-align:middle;
    cursor:pointer;
  }
}
</style>
