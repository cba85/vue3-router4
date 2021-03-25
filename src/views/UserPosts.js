const UserPosts = {
  template: `
          <h1>User posts</h1>
      `,
  mounted() {
    document.title = `${this.$route.meta.title} ${this.$route.params.id}`;
  },
};

export default UserPosts;
