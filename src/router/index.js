import Home from "../views/Home.js";
import About from "../views/About.js";
import User from "../views/User.js";
import Jpo from "../views/Jpo.js";
import UserProfile from "../views/UserProfile.js";
import UserPosts from "../views/UserPosts.js";
import Post from "../views/Post.js";
import Admin from "../views/admin/Admin.js";
import Dashboard from "../views/admin/Dashboard.js";
import Password from "../views/admin/Password.js";
import Login from "../views/Login.js";
import NotFound from "../views/NotFound.js";

const loggedIn = false;

export const routes = [
  { name: "login", component: Login, path: "/login" },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
    meta: {
      requiredAuth: true,
    },
    children: [
      { name: "dashboard", path: "/dashboard", component: Dashboard },
      { name: "password", path: "/password", component: Password },
    ],
  },
  {
    path: "/categories/:categoryId/posts/:postId",
    component: Post,
    name: "post",
    props: true,
  },
  { path: "/", component: Home, name: "accueil" },
  {
    path: "/a-propos",
    component: About,
    name: "about",
    meta: { title: "A propos" },
  },
  {
    path: "/users/:id",
    component: User,
    name: "user",
    children: [
      {
        name: "user:posts",
        component: UserPosts,
        path: "posts",
        meta: { title: "User" },
      },
      {
        name: "user:profile",
        component: UserProfile,
        path: "profile",
      },
    ],
  },
  {
    path: "/journee-portes-ouvertes/:year",
    component: Jpo,
    name: "jpo",
    meta: { title: "Journée Portes Ouvertes" },
  },
  {
    path: "/jpo/:year",
    //redirect: { name: "jpo" },
    redirect: (to) => {
      return {
        name: "jpo",
        params: {
          year: to.params.year,
        },
      };
    },
    name: "jpo:2020",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

/*
router.beforeEach((to, from, next) => {
  console.log("before");

  document.title = to.meta.title || "Document";

  if (to.meta.requiredAuth && !loggedIn) {
    return next({ name: "login" });
  }

  next();
});
*/
