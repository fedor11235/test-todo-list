export type Todo = {
  id: number
  text: string
  done: boolean
}

export type User = {
  id: number
  name: string
  email: string
  phone: string
  todo: Todo[]
}

export type Fields = {
  name?: string
  email?: string
  phone?: string
}

export type Field = 'name' | 'email' | 'phone'

export type UsersState = {
  users: User[]
}
