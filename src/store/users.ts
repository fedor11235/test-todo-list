import { defineStore } from 'pinia'

type Todo = {
  id: number
  text: string
  done: boolean
}

type User = {
  id: number
  name: string
  email: string
  phone: string
  todo: Todo[]
}

type Fields = {
  name?: string
  email?: string
  phone?: string
}

type Field = 'name' | 'email' | 'phone'

type UsersState = {
  users: User[]
}

const DEFAULT_USERS: User[] = [
  {
    id: 0,
    name: 'Фёдор',
    email: 'fedor@net.com',
    phone: '+669599494',
    todo: [
      {
        id: 0,
        text: 'Разбить страницу на компоненты',
        done: false
      },
      {
        id: 1,
        text: 'Заполнить админку',
        done: true
      },
      {
        id: 2,
        text: 'Сверстать страницу профиля',
        done: true
      }
    ]
  },
  {
    id: 1,
    name: 'Нина',
    email: 'nina@net.com',
    phone: '+100001010',
    todo: [
      {
        id: 0,
        text: 'Заполнить бд',
        done: false
      },
      {
        id: 1,
        text: 'Написать апи авторизации',
        done: true
      }
    ]
  },
  {
    id: 2,
    name: 'Лена',
    email: 'lena@net.com',
    phone: '+670007887',
    todo: [
      {
        id: 0,
        text: 'Сделать дизайн новостей',
        done: false
      },
      {
        id: 1,
        text: 'Нарисовать иконки',
        done: false
      }
    ]
  }
]

export const useUsersStore = defineStore('users', {
  state: (): UsersState => ({
    users: DEFAULT_USERS
  }),
  actions: {
    changeTaskStatus (userId: number, taskId: number) {
      const task = this.users.find(user => user.id === userId)!.todo.find(task => task.id === taskId)
      task!.done = !task!.done
      console.log('task', task!.done)
    },
    editUser (idUser: number, fields: Fields) {
      const user = this.users.find(user => user.id === idUser)
      for (const field of Object.keys(fields)) {
        user![field as Field] = fields![field as Field] as string
      }
      console.log(user)
    }
  }
})
