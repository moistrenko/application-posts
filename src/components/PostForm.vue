<template>
  <form
    class="form"
    @submit.prevent
  >
    <h4>Создание поста</h4>
    <input
      v-model="title"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      v-model="body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <button
      class="btn"
      type="submit"
      @click="createPost"
    >
      Создать
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
