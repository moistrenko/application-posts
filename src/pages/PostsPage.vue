<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <base-button
      class="btn-added"
      @click="showModal = !showModal"
      >Добавить пост</base-button
    >

    <base-input
      v-focus
      v-model="searchQuery"
      placeholder="Поиск по заголовку:"
    />

    <base-select
      v-model="selectedSort"
      :options="sortOptions"
    />

    <div
      v-if="totalPage > 1"
      class="page-wrapper"
    >
      <div
        v-for="page in totalPage"
        :key="`page-${page}`"
        class="page"
        :class="{ 'active-page': page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </div>
    </div>

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
// import axios from 'axios';
import getPosts from '@/services/getPosts';
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
      currentPage: 1,
      limit: 10,
      totalPage: 0,
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
    this.isPostLoading = true;
    getPosts(this.currentPage, this.limit).then((data) => {
      this.totalPage = data.totalPage;
      this.posts = data.data;
      this.isPostLoading = false;
    });
  },

  computed: {
    sorteredPost() {
      return [...this.posts].sort((firstPost, secondPost) => {
        return firstPost[this.selectedSort]
          ?.toString()
          .localeCompare(secondPost[this.selectedSort]);
      });
    },

    sorteredAndSearchPosts() {
      return this.sorteredPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    },
  },

  watch: {
    currentPage() {
      this.isPostLoading = true;
      getPosts(this.currentPage, this.limit).then((data) => {
        this.totalPage = data.totalPage;
        this.posts = data.data;
        this.isPostLoading = false;
      });
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

    changePage(page) {
      this.currentPage = page;
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

.page-wrapper {
  display: flex;
  justify-content: center;
}

.page {
  padding: 10px;
  border: 1px solid teal;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.active-page {
  background: teal;
}
</style>
