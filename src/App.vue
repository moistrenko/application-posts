<template>
  <main>
    <base-header />
    <router-view></router-view>
  </main>
</template>

<script>
//TODO 4 Добавить VUEX
//TODO 4 Вынести работу с сервером в отдельный файл
//TODO 3 Вынести вспомогательные функции в отдельные файлы
//TODO 3 Нормально сверстать сайт
//TODO 2 Добавить какой то футер на все страницы

import BaseHeader from '@/components/BaseHeader.vue';
export default {
  components: { BaseHeader },
};
</script>

<style lang="scss" scoped></style>
