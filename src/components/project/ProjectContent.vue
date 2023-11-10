<template>
    <div class="form-group">
        <label>{{ localProjectContent.title }}</label>
        <div v-if="localProjectContent.image_url">
            <img :src="localProjectContent.image_url" class="img-thumbnail" alt="...">
        </div>
        <div v-if="localProjectContent.link_url">
            {{ localProjectContent.link_url }}
        </div>
        <div v-if="localProjectContent.contents">
            {{ localProjectContent.contents }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            localProjectContent: {},
        };
    },
    props: {
        projectContent: {
            type: Object,
            default: () => { },
        },
    },
    watch: {
        projectContent(newContent) {
            this.localProjectContent = newContent;
        },
    },
}
</script>

<style></style>