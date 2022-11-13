import axios from 'axios';

export const PostModule = {
  namespaced: true,
  state: () => ({
    posts: [],
    isPostLoading: false,
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
  }),

  getters: {
    sorteredPost(state) {
      return [...state.posts].sort((firstPost, secondPost) => {
        return firstPost[state.selectedSort]
          ?.toString()
          .localeCompare(secondPost[state.selectedSort]);
      });
    },

    sorteredAndSearchPosts(state, getters) {
      return getters.sorteredPost.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },

    setIsPostLoading(state, value) {
      state.isPostLoading = value;
    },

    setSelectedSort(state, value) {
      state.selectedSort = value;
    },

    setSearchQuery(state, value) {
      state.searchQuery = value;
    },

    setCurrentPage(state, value) {
      state.currentPage = value;
    },

    setTotalPage(state, value) {
      state.totalPage = value;
    },
  },

  actions: {
    async getPosts({ state, commit }) {
      try {
        commit('setIsPostLoading', true);

        await axios
          .get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          })
          .then((e) => {
            commit(
              'setTotalPage',
              Math.ceil(e.headers['x-total-count'] / state.limit),
            );
            return e.data;
          })
          .then((data) => commit('setPosts', data))
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      } finally {
        commit('setIsPostLoading', false);
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        commit('setCurrentPage', state.currentPage + 1);

        await axios
          .get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: state.currentPage,
              _limit: state.limit,
            },
          })
          .then((e) => {
            commit(
              'setTotalPage',
              Math.ceil(e.headers['x-total-count'] / state.limit),
            );
            return e.data;
          })
          .then((data) => commit('setPosts', [...state.posts, ...data]))
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
