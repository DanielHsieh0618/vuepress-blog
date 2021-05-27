<template>
  <div>
    <v-card :to="post.path" v-for="(post, index) in posts" :key="index+'-post'" class=“mb-3”>
      <v-card-title>
        {{ post.frontmatter.title }}
        <v-spacer></v-spacer>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="tags">
          <v-chip small color='primary' v-for="(tag, index) in post.frontmatter.tags" :key="index+'-tag'" class='mb-2 mr-2'>{{ tag }}</v-chip>
        </div>

        <p>{{ post.frontmatter.description }}</p>
      </v-card-text>
    </v-card>
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