const User = {
  data() {
    return {
      user: "",
    };
  },
  template: `
    <div>
        <h2>User</h2>
        <ul>
        <li>Name: {{ user.name }}</li>
        <li>Email: {{ user.email }}</li>
        </ul>

        <router-view></router-view>

    </div>
    `,
  mounted() {
    console.log(this.$route);
    // Requete pour récupérer l'utilisateur this.$route.params.id
    this.user = { id: 87, name: "Clément", email: "clement@webstart.com" };
  },
};

export default User;
