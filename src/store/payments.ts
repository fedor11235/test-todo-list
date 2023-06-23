import { defineStore } from 'pinia'
import type { Payment, PaymentsState } from '@/types/payments'

const DEFAULT_PAYMENTS: Payment[] = [
  {
    id: 0,
    name: 'Фёдор',
    hash: 'JusSid8Iksj7',
    sum: '1850USD',
    date: '21:06:2023'
  },
  {
    id: 1,
    name: 'Нина',
    hash: 'iU8Sid8oksj1',
    sum: '625USD',
    date: '20:06:2023'
  },
  {
    id: 2,
    name: 'Василий',
    hash: 'iopi1w7oks9Y',
    sum: '2000USD',
    date: '19:06:2023'
  },
  {
    id: 2,
    name: 'Влад',
    hash: '55pi1wll0ts94',
    sum: '700USD',
    date: '19:06:2023'
  }
]

export const usePaymentsStore = defineStore('payments', {
  state: (): PaymentsState => ({
    payments: DEFAULT_PAYMENTS
  })
})
