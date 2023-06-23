<template>
  <transition>
    <modal-layout
      v-if="popupShow"
      @close-modal="popupShow=false"
    >
    Платежи йопт
  </modal-layout>
  </transition>
  <list-user
    v-for="user in usersStore.users"
    :key="user.id"
    :user-name="user.name"
    :user-email="user.email"
    :user-phone="user.phone"
    @show-modal="handlerShowModal(user)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalLayout from '@/components/ModalLayout.vue'

import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

const popupShow = ref(false)
const userModal = ref()

function handlerShowModal (user: any) {
  popupShow.value = true
  userModal.value = user
}
</script>

<style>
</style>
