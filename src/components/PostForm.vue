<template>
  <form
    class="form"
    @submit.prevent
  >
    <h4>Создание поста</h4>
    <base-input
      v-focus
      v-model="post.title"
      placeholder="Название"
    />
    <base-input
      v-model="post.body"
      placeholder="Описание"
    />
    <base-button
      type="submit"
      @click="createPost"
    >
      Создать
    </base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

  emits: {
    'create-post': null,
  },

  methods: {
    createPost() {
      this.post.id = Date.now();

      this.$emit('create-post', this.post);

      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style lang="css" scoped>
.form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
