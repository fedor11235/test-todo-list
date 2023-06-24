<template>
  <transition>
    <modal-layout
      v-if="modalShowTODO"
      @close-modal="modalShowTODO = false"
    >
      <user-task
        v-for="{id, text, done} in userModal.todo"
        :key="id"
        :text="text"
        :done="done"
        :user-id="userModal.id"
        :task-id="id"
      />
    </modal-layout>
  </transition>
  <transition>
    <modal-layout
      v-if="modalShowEdit"
      @close-modal="modalShowEdit = false"
    >
    <user-edit
      :user-id="userModal.id"
      :user-name="userModal.name"
      :user-email="userModal.email"
      :user-phone="userModal.phone"
    />
    </modal-layout>
  </transition>
  <user-info
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
import type { User } from '@/types/users'
import ModalLayout from '@/components/ModalLayout.vue'
import UserInfo from '@/components/UserInfo.vue'
import UserTask from '@/components/UserTask.vue'
import UserEdit from '@/components/UserEdit.vue'
import { useUsersStore } from '@/store'

const usersStore = useUsersStore()

const modalShowTODO = ref(false)
const modalShowEdit = ref(false)
const userModal = ref()

function handlerShowModalTODO (user: User) {
  modalShowTODO.value = true
  userModal.value = user
}

function handlerShowModalEdit (user: User) {
  modalShowEdit.value = true
  userModal.value = user
}
</script>
