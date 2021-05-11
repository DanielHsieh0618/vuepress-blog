<template>
  <div>
    <div v-for="(post, index) in posts" :key="index+'-post'">
      <h2>
        <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
      </h2>
      <div class="tags mb-3">
        <v-chip small color='primary' v-for="(tag, index) in post.frontmatter.tags" :key="index+'-tag'">{{ tag }}</v-chip>
      </div>

      <p>{{ post.frontmatter.description }}</p>

      <p>
        <router-link :to="post.path">瀏覽細節⋯⋯⋯⋯</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(
          (x) => x.path.startsWith("/posts/") && !x.frontmatter.blog_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>

<style scoped>
/* .article {
  margin-bottom: 20px;
  border-left: solid 5px #3eaf7c;
  padding: 20px;
}
.tags {
  margin-top: 10px;
}
.tag {
  padding: 5px;
  border-radius: 7px;
  font-size: small;
  background: #3eaf7c;
  margin-right: 5px;
  color: white;
  font-weight: 500;
} */
</style>