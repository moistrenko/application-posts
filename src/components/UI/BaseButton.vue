<template>
  <button class="btn">
    <slot> Удалить </slot>
  </button>
</template>

<script>
export default {
  name: 'base-button',
};
</script>

<style lang="css" scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
