<template>
  <div class="task">
    <div class="data">
      <div>Имя <input v-model="userNameInput" ></div>
      <div>email <input v-model="userEmailInput" ></div>
      <div>номер телефона <input v-model="userPhoneInput" ></div>
    </div>
    <button class="todo" @click="emit('show-modal')">TODO лист</button>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const props = defineProps<{
  userName: string
  userEmail: string
  userPhone: string
}>()

const emit = defineEmits<{
  (e: 'show-modal'): void
}>()

const userNameInput = ref(props.userName)
const userEmailInput = ref(props.userEmail)
const userPhoneInput = ref(props.userPhone)

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
}
.todo:active {
  scale: 0.9;
}
</style>
