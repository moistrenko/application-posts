<template>
  <div
    v-if="posts.length"
    class="post-list"
  >
    <h3>Список постов</h3>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete-post="this.$emit('delete-post', post)"
    />
  </div>
  <div v-else>
    <h3>Список постов пуст</h3>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
