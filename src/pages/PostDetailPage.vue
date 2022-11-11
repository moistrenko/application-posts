<template>
  <div class="post-detail">
    <div>ID: {{ post.id }}</div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {},
    };
  },

  mounted() {
    this.getPost();
  },

  methods: {
    async getPost() {
      try {
        await axios
          .get(
            `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
          )
          .then((e) => e.data)
          .then((data) => (this.post = data))
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.post-detail {
  width: 600px;
  margin: 50px auto;
  text-align: center;
}
</style>
