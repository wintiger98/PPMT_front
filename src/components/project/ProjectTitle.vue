<template>
    <div class="form-group">
        <!-- 프로젝트 제목 표시 (편집 가능하도록 설정) -->
        <h1 ref="editableTitle" @click="editTitle" @input="updateTitle" :contenteditable="isEditing">{{ projectTitle }}</h1>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            projectTitle: '프로젝트 제목', // 초기 제목 설정
            isEditing: false, // 편집 모드 여부
        };
    },
    methods: {
        editTitle() {
            this.isEditing = true; // 편집 모드 활성화
        },
        updateTitle() {
            // 편집 중에 입력이 변경될 때마다 호출됩니다.
            // 여기서 데이터를 업데이트하고 자동으로 저장할 수 있습니다.
            this.projectTitle = this.$refs.editableTitle.innerText; // 현재 제목 업데이트
        },
    },
};
</script>
  