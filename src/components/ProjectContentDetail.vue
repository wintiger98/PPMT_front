<template>
    <div>
        <vue-final-modal v-model="localShowModal" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="closeModal">
                <mdi-close>X</mdi-close>
            </button>
            <span class="modal__title">{{ title }}</span>
            <div class="modal__content">
                <div class="max-w-md mx-auto">
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <div>
                        <label for="direct-input">내용 입력:</label>
                        <input id="direct-input" v-model="directInput" type="text" class="styled-input">
                    </div>
                </div>
            </div>
        </vue-final-modal>
    </div>
</template>

<script>
export default {
    data: () => ({
        localShowModal: false,
        localTitle: "",
        directInput: "",
    }),
    props: {
        title: {
            type: String,
            required: true,
        },
        showModal: {
            type: Boolean,
            required: true,
        },
    },
    watch: {
        showModal(newValue) {
            this.localShowModal = newValue;
        },
        title(newValue) {
            this.localTitle = newValue;
        },
        localShowModal(newValue) {
            if (!newValue) {
                this.$emit('close');
            }
        },
        localTitle(newValue) {
            if (!newValue) {
                this.$emit('close');
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
    components: {
    },
}
</script>

<style>
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