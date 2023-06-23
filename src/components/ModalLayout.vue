<template>
  <div class="popup"  @click.self="emit('close-modal')">
    <div class="modal">

    </div>
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits<{
  (e: 'close-modal'): void
}>()

</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.modal {
  width: 90%;
  height: 90%;
  background-color: white;
  box-shadow: 0 0 10px black;
  /* border-radius: 16px; */
}
</style>
