<template>
  <div class="details">
    <div>Имя:</div>
    <div>{{ paymentName }}</div>
    <div>email:</div>
    <div>{{ paymentHash }}</div>
    <div>сумма:</div>
    <div>{{ paymentSum }}</div>
    <div>дата:</div>
    <div>{{ paymentDate }}</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  paymentName: string
  paymentHash: string
  paymentSum: string
  paymentDate: string
}>()
</script>

<style scoped>
.details {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  gap: 8px;
  padding: 16px;
  background-color: #59691D;
  color: white;
}
</style>
