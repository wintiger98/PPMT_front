<template>
  <ProjectCard v-if="viewType == 1"></ProjectCard>
  <ProjectList v-if="viewType == 2"></ProjectList>
  <ProjectTimeLine v-if="viewType == 3"></ProjectTimeLine>
  <br>
  <router-link to="/project/create"><button type="button" class="btn">➕</button></router-link>
  <Transition name="fade">
    <router-view></router-view>
  </Transition>
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
  components: {
    ProjectCard,
    ProjectList,
    ProjectTimeLine,
  },
  computed: {
    viewType() {
      return this.$store.state.viewType;
    },
  },
}
</script>

<style></style>