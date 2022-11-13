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
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск по заголовку:"
    />

    <base-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
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
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  data() {
    return {
      showModal: false,
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
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      currentPage: (state) => state.post.currentPage,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      sortOptions: (state) => state.post.sortOptions,
    }),

    ...mapGetters({
      sorteredAndSearchPosts: 'post/sorteredAndSearchPosts',
    }),
  },

  watch: {
    currentPage() {
      this.getPosts();
    },
  },

  methods: {
    ...mapMutations({
      setPosts: 'post/setPosts',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
      setCurrentPage: 'post/setCurrentPage',
    }),

    ...mapActions({
      getPosts: 'post/getPosts',
      loadMorePosts: 'post/loadMorePosts',
    }),

    createPost(newPost) {
      console.log('newPost', newPost);
      this.setPosts([...this.posts, newPost]);
      this.showModal = false;
    },

    deletePost(post) {
      this.setPosts(this.posts.filter((elem) => elem.id !== post.id));
    },

    changePage(page) {
      this.setCurrentPage(page);
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
