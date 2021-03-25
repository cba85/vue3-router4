const Post = {
  props: ["postId", "categoryId"],
  data() {
    return {};
  },
  template: `
  <div>
    <h1>Post: {{ $route.params.postId }}</h1>
    <h2>Category: {{ $route.params.categoryId }}</h2>
    <hr>
    <h1>Post: {{ postId }}</h1>
    <h2>Category: {{ categoryId }}</h2>
    <router-link :to="{ name: 'post', params: { categoryId: categoryId, postId: 4 }}">Post suivant</router-link>
    </div>
    `,
  mounted() {
    /*
    this.postId = this.$route.params.postId;
    this.categoryId = this.$route.params.categoryId;
    */
  },
};

export default Post;
