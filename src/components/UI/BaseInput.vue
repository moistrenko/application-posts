<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'base-input',

  props: {
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="css" scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
