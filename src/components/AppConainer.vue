<template>
  <ProjectCard v-if="viewType == 1"></ProjectCard>
  <ProjectList v-if="viewType == 2"></ProjectList>
  <ProjectTimeLine v-if="viewType == 3"></ProjectTimeLine>
  <br>
  <button @click="openProjectModal()" type="button" class="btn">➕</button>
  <ProjectView />
</template>

<script>
import ProjectCard from "./ProjectCard.vue"
import ProjectList from "./ProjectList.vue"
import ProjectTimeLine from "./ProjectTimeLine.vue"
import ProjectView from "./ProjectView.vue"

export default {
  name: 'AppContainer',
  data() {
    return {
    }
  },
  methods: {
    openProjectModal() {
      if (!this.isLogin) {
        alert("로그인을 하십시오.");
        return
      }
      this.$store.dispatch("openModal");
    }
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