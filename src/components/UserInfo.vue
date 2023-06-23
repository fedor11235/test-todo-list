<template>
  <div class="task">
    <div class="data">
      <div>Имя: {{ userName }}</div>
      <div>email: {{ userEmail }}</div>
      <div>номер телефона: {{ userPhone }}</div>
    </div>
    <div class="buttons">
      <button class="todo" @click="emit('show-modal-todo')">TODO лист</button>
      <button class="todo" @click="emit('show-modal-edit')">Редактировать пользователя</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  userName: string
  userEmail: string
  userPhone: string
}>()

const emit = defineEmits<{
  (e: 'show-modal-todo'): void
  (e: 'show-modal-edit'): void
}>()
</script>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin: 4px 16px;
  background-color: #59691D;
  color: white;
}
.data {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  justify-items: start;
  gap: 4px;
}
.buttons {
  display: flex;
  gap: 16px;
}
.todo {
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #D8EC89;
  color: #60693D;
  transition: scale .1s;
  font-size: 16px;
  font-weight: 500;
}
.todo:active {
  scale: 0.9;
}
</style>
