<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
    <div class="actions-group">
      <base-button @click="$router.push(`/post/${post.id}`)">
        Подробнее
      </base-button>
      <base-button @click="this.$emit('delete-post', post.id)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  emits: {
    'delete-post': null,
  },
};
</script>

<style lang="css" scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: radial-gradient(
    circle,
    #bfdfce,
    #c0e1bd,
    #cce0a7,
    #e3db91,
    #ffd381
  );
}

.actions-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
}
</style>
