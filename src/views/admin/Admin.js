const loggedIn = false;

const Admin = {
  template: `
          <h1>Admin</h1>

          <router-view></router-view>
      `,
  mounted() {
    if (!loggedIn) {
      this.$router.push({
        name: "login",
        query: { redirect: this.$route.name },
      });
    }
  },
};

export default Admin;
