<template>
  <ProjectCard v-if="viewType == 1"></ProjectCard>
  <ProjectList v-if="viewType == 2"></ProjectList>
  <ProjectTimeLine v-if="viewType == 3"></ProjectTimeLine>
  <br>
  <button @click="openProjectModal()" type="button" class="btn">➕</button>
  <Transition name="fade">
    <ProjectCreate />
  </Transition>
</template>

<script>
import ProjectCard from "./ProjectCard.vue"
import ProjectList from "./ProjectList.vue"
import ProjectTimeLine from "./ProjectTimeLine.vue"
import ProjectCreate from "./project/ProjectCreate.vue"

export default {
  name: 'AppContainer',
  data() {
    return {
    }
  },
  methods: {
    openProjectModal() {
      this.$store.dispatch("openModal");
    }
  },
  components: {
    ProjectCard,
    ProjectList,
    ProjectTimeLine,
    ProjectCreate,
  },
  computed: {
    viewType() {
      return this.$store.state.viewType;
    },
  },
}
</script>

<style></style>