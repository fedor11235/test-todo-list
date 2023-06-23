<template>
  <transition>
    <modal-layout
      v-if="popupShow"
      @close-modal="popupShow=false"
    />
  </transition>
  <list-user
    v-for="{id, name, email, phone} in usersStore.users"
    :key="id"
    :user-name="name"
    :user-email="email"
    :user-phone="phone"
    @show-modal="popupShow=true"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalLayout from '@/components/ModalLayout.vue'
import ListUser from '@/components/ListUser.vue'
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

const popupShow = ref(false)

</script>

<style>
</style>
