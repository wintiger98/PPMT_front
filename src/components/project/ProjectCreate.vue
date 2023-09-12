<template>
    <div v-if="isModal">
        <div class="modal">
            <!-- 모달 내용 -->
            <div class="modal-content">
                <!-- 모달 내용을 여기에 추가 -->
            </div>
            <!-- 모달 닫기 버튼 -->
            <button @click="closeModal">닫기</button>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        isModal() {
            return this.$store.state.isModal;
        }
    },
    methods: {
        closeModal() {
            // 모달을 닫는 메소드
            this.$store.dispatch("closeModal");
        }
    }
};
</script>
  
<style scoped>
/* 모달 스타일 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 배경을 반투명하게 설정 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>
  