<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <base-button
      class="btn-added"
      @click="showModal = !showModal"
      >Добавить пост</base-button
    >

    <base-input
      v-model="searchQuery"
      placeholder="Поиск по заголовку:"
    />

    <base-select
      v-model="selectedSort"
      :options="sortOptions"
    />

    <post-list
      v-if="!isPostLoading"
      :posts="sorteredAndSearchPosts"
      @delete-post="deletePost"
    />
    <div v-else>Идет загрузка...</div>

    <base-modal v-model="showModal">
      <post-form @create-post="createPost" />
    </base-modal>
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
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
        { value: 'id', name: 'По id' },
      ],
    };
  },

  components: {
    PostForm,
    PostList,
  },

  mounted() {
    this.getPosts();
  },

  computed: {
    sorderedPost() {
      return [...this.posts].sort((firstPost, secondPost) => {
        return firstPost[this.selectedSort]
          ?.toString()
          .localeCompare(secondPost[this.selectedSort]);
      });
    },

    sorteredAndSearchPosts() {
      return this.sorderedPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
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

.select {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
