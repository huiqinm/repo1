import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hello",
      name: "hello",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/",
      component: () => import("@/views/layout/index.vue"),
      children: [
        {
          path: "/",
          name: "index",
          component: HomeView,
          meta: { keepAlive: true, title: "首页" },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
          meta: { keepAlive: true, title: "关于" },
        },
        {
          path: "/helloworld",
          name: "helloworld",
          component: () => import("@/components/HelloWorld.vue"),
          meta: { keepAlive: true, title: "helloworld" },
        },
        {
          path: "/user",
          name: "user_id",
          component: () => import("@/components/User.vue"),
          meta: { keepAlive: true, title: "用户" },
        },
      ],
    },
    {
      path: "/404",
      component: () => import("@/components/404.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // console.log("router-to=====", to);
  next();
});

export default router;
