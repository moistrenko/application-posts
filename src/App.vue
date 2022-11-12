<template>
  <main class="main">
    <base-header />
    <div class="main-container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
//TODO 4 Вынести в store список постов
//TODO 4 Вынести работу с сервером в отдельный файл
//TODO 3 Вынести вспомогательные функции в отдельные файлы
//TODO 3 Добавить роут если адрес не правильный
//TODO 3 Добавить компонент скролла навверх
//TODO 3 Нормально сверстать сайт
//TODO 2 Добавить какой то футер на все страницы

import BaseHeader from '@/components/BaseHeader.vue';
export default {
  components: { BaseHeader },
};
</script>

<style lang="css" scoped>
* {
  font-family: 'Helvetica', sans-serif;
}
.main {
  background-image: linear-gradient(
    to bottom,
    #7700c9,
    #613edd,
    #475beb,
    #2972f5,
    #0887fb,
    #0098fe,
    #1aa8ff,
    #3fb7fe,
    #5ec7fd,
    #7ed6fc,
    #9ee5fc,
    #bff2fe
  );
  min-height: 100vh;
}

.main-container {
  padding-top: 58px;
}
</style>
