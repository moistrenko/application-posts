<template>
  <header class="header">
    <base-button
      class="link"
      @click="$router.push('/')"
      >Главная</base-button
    >
    <ul class="nav">
      <li>
        <router-link
          class="link"
          active-class="active"
          to="/posts"
        >
          Посты
        </router-link>
      </li>
      <li>
        <router-link
          class="link"
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
          class="link"
          active-class="active"
          to="/about"
        >
          О сайте
        </router-link>
      </li>
      <li>
        <router-link
          class="link"
          active-class="active"
          to="/store"
        >
          Store
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
  position: fixed;
  width: 100%;
  padding: 10px 30px;
  background: #7700c9;
}

.nav {
  display: flex;
  list-style: none;
}

.btn {
  background: white;
}

.link {
  display: block;
  text-decoration: none;
  background: white;
  color: black;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s;
}

.link:hover {
  transform: scale(0.95);
  opacity: 0.7;
}

.link.active {
  background-color: lightskyblue;
}

li:not(:first-child) {
  margin-left: 20px;
}
</style>
