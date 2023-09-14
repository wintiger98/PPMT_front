<template>
    <div v-if="isModal" class="modal" style="display: flex">
        <div class="modal-content">
            <Title></Title>
            <Category></Category>
            <Design></Design>
            <Duration></Duration>
            <Progress></Progress>
            <Proposal></Proposal>
            <Tech></Tech>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">닫기</button>
                <button type="button" class="btn btn-primary">저장</button>
            </div>
        </div>
    </div>
</template>

<script>
import Title from "./project/ProjectTitle.vue";
import Category from "./project/ProjectCategory.vue";
import Design from "./project/ProjectDesign.vue";
import Duration from "./project/ProjectDuration.vue";
import Progress from "./project/ProjectProgress.vue";
import Proposal from "./project/ProjectProposal.vue";
import Tech from "./project/ProjectTech.vue";

export default {
    name: "ProjectView",
    computed: {
        isModal() {
            return this.$store.state.isModal;
        },
    },
    components: {
        Title,
        Category,
        Design,
        Duration,
        Progress,
        Proposal,
        Tech,
    },
    methods: {
        closeModal() {
            // 모달을 닫는 메소드
            this.$store.dispatch("closeModal");
        },
    }
}
</script>

<style>
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
    padding: 2.5%;
    margin: 30%;
    border-radius: 5px;
}

/* form-group 스타일링 */
.form-group {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* 요소들을 세로 중앙 정렬 */
}

/* 입력 필드 스타일링 */
input[type="text"],
textarea {
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}

/* 입력 필드 스타일링 */
input[type="date"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}

/* 레이블 스타일링 */
label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;

}


/* 닫기 버튼 스타일링 */
.close {
    background-color: red;
}

.create {
    background-color: blue;
}

.stack {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}

.stack-item {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 2px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
}

.stack-item button {
    margin-left: 10px;
    cursor: pointer;
}

.stack-input {
    display: flex;
}

.stack-input input {
    margin-right: 5px;
    flex-grow: 1;
    /* 입력 필드 오른쪽에 여백 추가 */
}

.delete {
    border-color: transparent;
    color: red;
}

.add {
    border-color: transparent;
}
</style>
  