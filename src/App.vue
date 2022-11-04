<template>
  <div class="app">
    <post-form />

    <post-list
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
  data() {
    return {
      title: '',
      body: '',
      posts: [
        {
          id: 0,
          title: 'zxcczcxc',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
        {
          id: 1,
          title: 'zxcczcxc',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
        {
          id: 2,
          title: 'zxcczcxc',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
        {
          id: 3,
          title: 'zxcczcxc',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
      ],
    };
  },

  components: {
    PostForm,
    PostList,
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };

      this.posts.push(newPost);

      this.title = '';
      this.body = '';
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
