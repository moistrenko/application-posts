<template>
  <div class="post-list">
    <h3>Список рользователей</h3>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete-post="this.$emit('delete-post', post)"
    />
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
