<template>
  <div class="edit">
    <div class="data">
      <div>Имя:</div>
      <input v-model="userNameInput">
      <div>email:</div>
      <input v-model="userEmailInput">
      <div>номер телефона:</div>
      <input v-model="userPhoneInput">
    </div>

    <button class="save" @click="handlerSaveData">Сохранить изменения</button>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const props = defineProps<{
  userName: string
  userEmail: string
  userPhone: string
}>()

const userNameInput = ref(props.userName)
const userEmailInput = ref(props.userEmail)
const userPhoneInput = ref(props.userPhone)

function handlerSaveData () {
  console.log('save')
}

</script>

<style scoped>
.edit {
  padding: 16px;
  background-color: #59691D;
  color: white;
}
.data {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  gap: 8px;
}
.save {
  margin-top: 8px;
  width: 100%;
  cursor: pointer;
}
</style>
