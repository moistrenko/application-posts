<template>
  <main>
    <base-header />
    <router-view></router-view>
  </main>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
export default {
  components: { BaseHeader },
};
</script>

<style lang="scss" scoped></style>
