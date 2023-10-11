<template>
    <div>
        <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="showModal = false">
                <mdi-close>X</mdi-close>
            </button>
            <span class="modal__title">내용 추가</span>
            <div class="modal__content">
                <div class="max-w-md mx-auto">
                    <dropdown title="Category">
                        <div>
                            <dropdown-item v-for="item in dropdown_items" :key="item">{{
                                item
                            }}</dropdown-item>
                        </div>
                    </dropdown>
                </div>
            </div>
        </vue-final-modal>
        <button @click="showModal = true">내용 추가</button>
    </div>
</template>

<script>
import Dropdown from "./dropdown/DropDown.vue"
import DropdownItem from "./dropdown/DropDownItem.vue"

export default {
    data: () => ({
        showModal: false,
        dropdown_items: ["디자인", "DB 구조", "클래스 구조", "프로젝트 제안서", "진행 상황", "직접 입력"],
    }),
    components: {
        Dropdown,
        DropdownItem,
    },
}
</script>

<style scoped>
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 25rem;
    padding: 2rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}

.modal__title {
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
}

.modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    /* or any other color */
    color: #000;
    /* or any other color */
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
}
</style>