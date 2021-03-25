const NotFound = {
  template: `
        <div>
        <h1>Page not found</h1>
        <a href="#" @click.prevent="goBack">Go back</a>
        </div>
    `,
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};

export default NotFound;
