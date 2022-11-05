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
      :posts="posts"
      @delete-post="deletePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import BaseButton from './components/UI/BaseButton.vue';

export default {
  data() {
    return {
      showModal: false,
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
    BaseButton,
  },

  methods: {
    createPost(newPost) {
      this.posts.push(newPost);
      this.showModal = false;
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

.btn-added {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
