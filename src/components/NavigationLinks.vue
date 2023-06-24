<template>
  <div class="bar">
    <router-link :class="['link', {'link-active': $route.name === 'users'}]" :to="{name: 'users'}">Пользователи</router-link>
    <router-link :class="['link', {'link-active': $route.name === 'payments'}]" :to="{name: 'payments'}">Платежи</router-link>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  height: 100%;
  text-align: left;
  padding: 8px 0;
  margin: 4px 16px;
  .link {
    text-decoration: none;
    margin-right: 8px;
    color: $color-darkened;
    padding: 8px;
    transition: background-color .2s;
    &-active {
      background-color: $color-main;
      color: white;
    }
  }
}
</style>
