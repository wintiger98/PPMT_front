import { createWebHistory, createRouter } from "vue-router";
import MemberLogin from "./components/member/MemberLogin.vue";
import MemberSignup from "./components/member/MemberSignup.vue";
import MemberMypage from "./components/member/MemberMypage.vue";
import ProjectDetail from "./components/ProjectDetail.vue";

const routes = [
  {
    path: "/",
    component: MemberMypage,
  },
  {
    path: "/login",
    component: MemberLogin,
  },
  {
    path: "/signup",
    component: MemberSignup,
  },
  {
    path: "/mypage",
    component: MemberMypage,
  },
  {
    path: "/project/:project_id",
    component: ProjectDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
