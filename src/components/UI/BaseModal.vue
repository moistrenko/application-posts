<template>
  <div
    v-if="modelValue"
    class="modal"
    @click="$emit('update:modelValue', false)"
  >
    <div
      class="modal-content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  cursor: pointer;
}

.modal-content {
  margin: auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  cursor: default;
}
</style>
