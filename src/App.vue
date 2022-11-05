<template>
  <div class="app">
    <post-form @create-post="createPost" />

    <post-list
      :posts="posts"
      @delete-post="deletePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  data() {
    return {
      title: '',
      body: '',
      posts: [
        {
          id: 0,
          title: '123',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
        {
          id: 1,
          title: '456',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
        {
          id: 2,
          title: '7788',
          body: 'asd123e dadfvfvsdfcaxf vsxcvsd fdsaf',
        },
        {
          id: 3,
          title: '09000',
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
    createPost(newPost) {
      this.posts.push(newPost);
    },

    deletePost(post) {
      this.posts = this.posts.filter((elem) => elem.id !== post.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
