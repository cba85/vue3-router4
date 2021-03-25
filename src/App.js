const App = {
  template: `
    <h1>Hello App!</h1>

    <p>
      <router-link :to="{ name: 'accueil' }">Go to Home</router-link><br />
      <router-link :to="{ name: 'about' }">Go to About</router-link><br />
      <router-link :to="{ name: 'user', params: { id: 87 } }">Go to user profile</router-link><br>
      <router-link :to="{ name: 'jpo:2020', params: { year: 2021 } }">Go to jpo</router-link>
      <router-link :to="{ name: 'user:profile', params: { id: 87 } }">Go to user profile</router-link><br />
      <router-link :to="{ name: 'user:posts', params: { id: 87 } }">Go to user posts</router-link><br />
      <router-link :to="{ name: 'post', params: { categoryId: 2, postId: 3 } }">Go to post</router-link><br />
    </p>

    <h3>Espace admin</h3>
    <ul>
    <li><router-link :to="{ name: 'dashboard' }" replace>Dashboard</router-link></li>
    <li><router-link :to="{ name: 'password' }" replace>Password</router-link></li>
    </ul>

    <li><router-link :to="{ name: 'login' }" replace>Login</router-link></li>

    <li><router-link to="/webstart" replace>Go to webstart</router-link></li>

    <router-view></router-view>`,
};

export default App;
