export type Payment = {
  id: number
  name: string
  hash: string
  sum: string
  date: string
}

export type PaymentsState = {
  payments: Payment[]
}