<template>
    <div v-for="(project, index) in projects" :key="index">
        {{ project }}
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        projects: Array,
    },
}
</script>

<style></style>