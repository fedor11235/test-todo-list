<template>
  <div class="info">
    <div class="data">
      <div>Имя: {{ userName }}</div>
      <div>email: {{ userEmail }}</div>
      <div>номер телефона: {{ userPhone }}</div>
    </div>
    <div class="buttons">
      <button class="button" @click="emit('show-modal-todo')">TODO лист</button>
      <button class="button" @click="emit('show-modal-edit')">Редактировать пользователя</button>
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

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin: 4px 16px;
  background-color: $color-main;
  color: white;
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
}
</style>
