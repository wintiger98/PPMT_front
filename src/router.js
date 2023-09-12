import { createWebHistory, createRouter } from "vue-router";
import MemberLogin from "./components/member/MemberLogin.vue";
import MemberSignup from "./components/member/MemberSignup.vue";
import MemberMypage from "./components/member/MemberMypage.vue";
import ProjectDetail from "./components/project/ProjectDetail.vue";
import ProjectCreate from "./components/project/ProjectCreate.vue";

const routes = [
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
    path: "/project/create",
    component: ProjectCreate,
  },
  {
    path: "/project/view/:project_id",
    component: ProjectDetail,
  },
  {
    path: "/project/edit/:project_id",
    component: ProjectDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
