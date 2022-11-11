<template>
  <header class="header">
    <base-button @click="$router.push('/')">Главная</base-button>
    <ul class="nav">
      <li>
        <router-link
          active-class="active"
          to="/posts"
        >
          Посты
        </router-link>
      </li>
      <li>
        <router-link
          active-class="active"
          to="/postsV2"
        >
          Посты-v2
        </router-link>
      </li>
      <!-- <li>
        <base-button @click="$router.push('/about')">О сайте</base-button>
      </li> -->
      <li>
        <router-link
          active-class="active"
          to="/about"
        >
          О сайте
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background: lightblue;
}

.nav {
  display: flex;
  list-style: none;
}

.btn {
  background: white;
}

a {
  display: block;
  text-decoration: none;
  background: white;
  color: teal;
  padding: 10px 20px;
}

a.active {
  background-color: teal;
  color: white;
}

li:not(:first-child) {
  margin-left: 20px;
}
</style>
