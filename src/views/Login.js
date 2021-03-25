const Login = {
  template: `
    <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
    <input type="email" placeholder="Your email">
    <input type="password" placeholder="Your password">
    <button type="submit">Submit</button>
    </form>
    </div>
    `,
  methods: {
    login() {
      if (this.$route.query.redirect) {
        return this.$router.push({ name: this.$route.query.redirect });
      }
      this.$router.push({ name: "about" });
    },
  },
};

export default Login;
