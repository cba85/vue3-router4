import App from "./App.js";
import { router } from "./router/index.js";

const app = Vue.createApp({
  data() {
    return {};
  },
  components: {
    App,
  },
  /*
  watch: {
    $route(to) {
      document.title = to.meta.title || "Document";
    },
  },
  */
});

app.use(router);

app.mount("#app");
