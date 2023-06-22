<template>
  <div class="task">
    Задача пользователя {{ userName }}
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  userName: string
}>()

</script>

<style scoped>
.task {
  padding: 8px;
  margin: 4px 0;
  background-color: #d4d4ff;
}
</style>
