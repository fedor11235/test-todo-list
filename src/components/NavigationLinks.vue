<template>
  <div class="bar">
    <router-link class="link" to="/">Пользователи</router-link>
    <router-link class="link" to="/payments">Платежи</router-link>
  </div>
</template>

<style scoped>
.bar {
  height: 100%;
  text-align: left;
  padding: 8px;
  margin: 4px 16px;
}
.link {
  text-decoration: none;
  margin-right: 8px;
  color: #60693D;
}
</style>
