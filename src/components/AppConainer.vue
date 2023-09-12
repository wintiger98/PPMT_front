<template>
  <ProjectCard v-if="viewType == 0"></ProjectCard>
  <ProjectList v-if="viewType == 1"></ProjectList>
  <ProjectTimeLine v-if="viewType == 2"></ProjectTimeLine>
  <br>
  <button type="button" class="btn">➕</button>
</template>

<script>
import ProjectCard from "./ProjectCard.vue"
import ProjectList from "./ProjectList.vue"
import ProjectTimeLine from "./ProjectTimeLine.vue"
export default {
  name: 'AppContainer',
  data() {
    return {
    }
  },
  props: {
    viewType: Number,
  },
  components: {
    ProjectCard,
    ProjectList,
    ProjectTimeLine,
  },
}
</script>

<style></style>