import { defineStore } from 'pinia'

type User = {
  id: number
  name: string,
}

type UsersState = {
  users: User[]
}

const DEFAULT_USERS: User[] = [
  {
    id: 0,
    name: 'Фёдор'
  },
  {
    id: 1,
    name: 'Нина'
  },
  {
    id: 2,
    name: 'Лена'
  }
]

export const useUsersStore = defineStore('e', {
  state: (): UsersState => ({
    users: DEFAULT_USERS
  }),
  getters: {
  },
  actions: {
  }
})
