<template>
  <div
    v-if="posts.length"
    class="post-list"
  >
    <h3>Список постов:</h3>

    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete-post="this.$emit('delete-post', post)"
      />
    </transition-group>
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

<style scoped>
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(600px);
}
</style>
