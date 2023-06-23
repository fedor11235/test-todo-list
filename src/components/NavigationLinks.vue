<template>
  <div class="bar">
    <router-link :class="['link', {'link-active': $route.name === 'users'}]" to="/">Пользователи</router-link>
    <router-link :class="['link', {'link-active': $route.name === 'payments'}]" to="/payments">Платежи</router-link>
  </div>
</template>

<style scoped>
.bar {
  height: 100%;
  text-align: left;
  padding: 8px 0;
  margin: 4px 16px;
}
.link {
  text-decoration: none;
  margin-right: 8px;
  color: #60693D;
  padding: 8px;
  transition: background-color .2s;
}
.link-active {
  background-color: #59691D;
  color: white;
}
</style>
