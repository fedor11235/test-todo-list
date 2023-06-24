<template>
  <div class="payment">
    <div class="data">
      <div>Имя: {{ paymentName }}</div>
      <div>Хэш: {{ paymentHash }}</div>
    </div>
    <button class="button" @click="emit('show-modal-payment')">Просмотр деталей платежа</button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  paymentName: string
  paymentHash: string
}>()

const emit = defineEmits<{
  (e: 'show-modal-payment'): void
}>()
</script>

<style lang="scss" scoped>
.payment {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin: 4px 16px;
  background-color: $color-main;
  color: white;
  .data {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    justify-items: start;
    gap: 4px;
  }
}
</style>
