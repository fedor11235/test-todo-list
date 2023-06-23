<template>
  <transition>
    <modal-layout
      v-if="modalShowTODO"
      @close-modal="modalShowTODO = false"
    >
      <task-user
        v-for="{id, text, done} in userModal.todo"
        :key="id"
        :text="text"
        :done="done"
        :id-user="userModal.id"
        :id-task="id"
      />
    </modal-layout>
  </transition>
  <transition>
    <modal-layout
      v-if="modalShowEdit"
      @close-modal="modalShowEdit = false"
    >
    <EditUser
      :user-name="userModal.name"
      :user-email="userModal.email"
      :user-phone="userModal.phone"
    />
    </modal-layout>
  </transition>
  <list-user
    v-for="user in usersStore.users"
    :key="user.id"
    :user-name="user.name"
    :user-email="user.email"
    :user-phone="user.phone"
    @show-modal-todo="handlerShowModalTODO(user)"
    @show-modal-edit="handlerShowModalEdit(user)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ModalLayout from '@/components/ModalLayout.vue'
import ListUser from '@/components/ListUser.vue'
import TaskUser from '@/components/TaskUser.vue'
import EditUser from '@/components/EditUser.vue'
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

const modalShowTODO = ref(false)
const modalShowEdit = ref(false)
const userModal = ref()

function handlerShowModalTODO (user: any) {
  modalShowTODO.value = true
  userModal.value = user
}

function handlerShowModalEdit (user: any) {
  modalShowEdit.value = true
  userModal.value = user
}

// function handlerCloseModal () {
//   modalShowTODO.value = false
// }

</script>

<style>
</style>
