<template>
  <div class="edit">
    <div class="data">
      <div>Имя:</div>
      <input :value="userNameInput" @input="handlerInputName">
      <div>email:</div>
      <input :value="userEmailInput" @input="handlerInputEmail">
      <div>номер телефона:</div>
      <input :value="userPhoneInput" @input="handlerInputPhone">
    </div>

    <button :class="['button', 'save', {'button-disable': !enableSaveButton}]" @click="handlerSaveData">{{ textSaveButton }}</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

const props = defineProps<{
  userId: number
  userName: string
  userEmail: string
  userPhone: string
}>()

const userNameInput = ref(props.userName)
const userEmailInput = ref(props.userEmail)
const userPhoneInput = ref(props.userPhone)
const changedName = ref(false)
const changedEmail = ref(false)
const changedPhone = ref(false)

const enableSaveButton = computed(
  () => changedName.value || changedEmail.value || changedPhone.value
)

const textSaveButton = computed(
  () => enableSaveButton.value ? 'Сохранить изменения' : 'Нет отредактированных данных'
)

function handlerInputName (event: any) {
  userNameInput.value = event.target.value
  if (props.userName !== event.target.value) {
    changedName.value = true
  } else {
    changedName.value = false
  }
}

function handlerInputEmail (event: any) {
  userEmailInput.value = event.target.value
  if (props.userEmail !== event.target.value) {
    changedEmail.value = true
  } else {
    changedEmail.value = false
  }
}

function handlerInputPhone (event: any) {
  userPhoneInput.value = event.target.value
  if (props.userPhone !== event.target.value) {
    changedPhone.value = true
  } else {
    changedPhone.value = false
  }
}

function handlerSaveData () {
  const saveData: any = {}
  if (changedName.value) {
    saveData.name = userNameInput.value
    changedName.value = false
  }
  if (changedEmail.value) {
    saveData.email = userEmailInput.value
    changedEmail.value = false
  }
  if (changedPhone.value) {
    saveData.phone = changedPhone.value
    changedPhone.value = false
  }
  usersStore.editUser(props.userId, saveData)
}
</script>

<style lang="scss" scoped>
.edit {
  padding: 16px;
  background-color: $color-main;
  color: white;
  .data {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: start;
    gap: 8px;
  }
  .save {
    margin-top: 8px;
    width: 100%;
  }
}
</style>
