<template>
    <div v-if="isModal">
        <div>
            <h1>{{ mode === 'create' ? '프로젝트 생성' : mode === 'view' ? '프로젝트 조회' : '프로젝트 수정' }}</h1>
            <!-- 나머지 페이지 내용 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectDetail",
    data() {
        return {
            mode: '', // 페이지 모드(create, view, edit)
        }
    },
    computed: {
        isModal() {
            return this.$store.state.isModal;
        }
    },
    created() {
        // 현재 경로를 기반으로 페이지 모드 설정
        this.mode = this.$route.path.includes('create')
            ? 'create'
            : this.$route.path.includes('view')
                ? 'view'
                : 'edit';
    },
}
</script>

<style></style>