<template>
  <select
    class="select"
    :v-model="modelValue"
    @change="changeOption"
  >
    <option
      disabled
      selected
      value=""
    >
      Выберите из списка:
    </option>

    <option
      v-for="option in options"
      :key="`option-${option.value}`"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    modelValue: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="css" scoped>
.select {
  display: block;
}
</style>
