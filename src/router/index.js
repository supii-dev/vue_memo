import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/memos/add",
      name: "memoAdd",
      component: () => import("@/views/Form.vue"),
      // 폼. 뷰의 내용을 넣겠다
    },
    {
      path: "/memos/:id",
      name: "memoDetail",
      component: () => import("@/views/Form.vue"),
    }
  ],
});
export default router;
