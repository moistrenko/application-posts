<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <base-button
      class="btn-added"
      @click="showModal = !showModal"
      >Добавить пост</base-button
    >
    <base-modal v-model="showModal">
      <post-form @create-post="createPost" />
    </base-modal>

    <post-list
      v-if="!isPostLoading"
      :posts="posts"
      @delete-post="deletePost"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  data() {
    return {
      showModal: false,
      isPostLoading: false,
      posts: [],
    };
  },

  components: {
    PostForm,
    PostList,
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    createPost(newPost) {
      this.posts.push(newPost);
      this.showModal = false;
    },

    deletePost(post) {
      this.posts = this.posts.filter((elem) => elem.id !== post.id);
    },

    async getPosts() {
      try {
        this.isPostLoading = true;

        await axios
          .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((e) => e.data)
          .then((data) => (this.posts = data))
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostLoading = false;
      }
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

.btn-added {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
