import { defineStore } from 'pinia'

type User = {
  id: number
  name: string
  email: string
  phone: string
}

type UsersState = {
  users: User[]
}

const DEFAULT_USERS: User[] = [
  {
    id: 0,
    name: 'Фёдор',
    email: 'fedor@net.com',
    phone: '+669599494'
  },
  {
    id: 1,
    name: 'Нина',
    email: 'nina@net.com',
    phone: '+100001010'
  },
  {
    id: 2,
    name: 'Лена',
    email: 'lena@net.com',
    phone: '+670007887'
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
