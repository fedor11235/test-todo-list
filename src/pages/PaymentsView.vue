<template>
  <transition>
    <modal-layout
      v-if="popupShow"
      @close-modal="popupShow=false"
    >
      <payment-details
        :paymentName="paymentModal.name"
        :paymentHash="paymentModal.hash"
        :paymentSum="paymentModal.sum"
        :paymentDate="paymentModal.date"
      />
    </modal-layout>
  </transition>
  <payment-info
    v-for="payment in paymentsStore.payments"
    :key="payment.id"
    :paymentName="payment.name"
    :paymentHash="payment.hash"
    @show-modal-payment="handlerShowModal(payment)"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Payment } from '@/types/payments'
import ModalLayout from '@/components/ModalLayout.vue'
import PaymentInfo from '@/components/PaymentInfo.vue'
import PaymentDetails from '@/components/PaymentDetails.vue'

import { usePaymentsStore } from '@/store'

const paymentsStore = usePaymentsStore()

const popupShow = ref(false)
const paymentModal = ref()

function handlerShowModal (payment: Payment) {
  popupShow.value = true
  paymentModal.value = payment
}
</script>
