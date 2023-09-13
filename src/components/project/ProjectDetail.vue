<template>
    <div v-if="isModal">

    </div>
</template>

<script>
export default {
    name: "ProjectDetail",
    data() {
        return {
        }
    },
    computed: {
        isModal() {
            return this.$store.state.isModal;
        },
    },
}
</script>

<style></style>