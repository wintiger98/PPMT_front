<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <ProjectCard v-if="viewType == 1" :projects="projects"></ProjectCard>
    <ProjectList v-if="viewType == 2" :projects="projects"></ProjectList>
    <ProjectTimeLine v-if="viewType == 3" :projects="projects"></ProjectTimeLine>
    <br>
    <button @click="plusButtonEvent" type="button" class="btn">➕</button>
    <ProjectView :projectId="newProjectId" @project:finish="projectInit" />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue"
import ProjectList from "./ProjectList.vue"
import ProjectTimeLine from "./ProjectTimeLine.vue"
import ProjectView from "./ProjectView.vue"
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export default {
  name: 'AppContainer',
  data() {
    return {
      newProjectId: 0,
      projects: [],
    }
  },
  created() {
    this.getProjects();
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        const response = await this.$axios.get(`${this.$store.state.host}/projects?token=${cookies.get('token')}`, {
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (parseInt(response.status / 100) == 2) {
          // 생성 성공시 처리
          const userProjects = response.data;
          console.log(userProjects);
          this.projects = userProjects;
        } else {
          alert("프로젝트 생성에 실패했습니다. 다시 시도해주세요");
        }
      } catch (error) {
        console.log(error);
        alert("프로젝트 생성 중 오류가 발생했습니다");
      }
    },
    plusButtonEvent() {
      this.openProjectModal();
      this.createProject();
    },
    async createProject() {
      try {
        const response = await this.$axios.post(`${this.$store.state.host}/projects?token=${cookies.get('token')}`, {
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (parseInt(response.status / 100) == 2) {
          // 생성 성공시 처리
          const newProject = response.data;
          console.log(newProject);
          this.newProjectId = newProject.id
        } else {
          alert("프로젝트 생성에 실패했습니다. 다시 시도해주세요");
        }
      } catch (error) {
        console.log(error);
        alert("프로젝트 생성 중 오류가 발생했습니다");
      }
    },
    openProjectModal() {
      if (!this.isLogin) {
        alert("로그인을 하십시오.");
        return
      }
      this.$store.dispatch("openModal");
    },
    projectInit() {
      this.newProjectId = 0;
      this.getProjects();
    },
  },
  components: {
    ProjectCard,
    ProjectList,
    ProjectTimeLine,
    ProjectView,
  },
  computed: {
    viewType() {
      return this.$store.state.viewType;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
}
</script>

<style></style>