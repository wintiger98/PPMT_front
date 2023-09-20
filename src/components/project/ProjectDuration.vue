<template>
    <div class="form-group">
        <label for="startAt">시작 날짜</label>
        <input type="date" id="startAt" v-model="localStartAt" @click="openDatePicker('startAt')">
        <label for="endAt">끝 날짜</label>
        <input type="date" id="endAt" v-model="localEndAt" @click="openDatePicker('endAt')">
    </div>
</template>

<script>
export default {
    data() {
        return {
            localStartAt: this.startAt,
            localEndAt: this.endAt,
        }
    },
    watch: {
        localStartAt(newValue) {
            const data = { key: "start_at", value: newValue.toISOString() };
            // localStartAt이 변경될 때, 부모 컴포넌트에 변경을 알립니다.
            this.$emit("update:startAt", data);
        },
        localEndAt(newValue) {
            const data = { key: "end_at", value: newValue.toISOString() };

            // localEndAt이 변경될 때, 부모 컴포넌트에 변경을 알립니다.
            this.$emit("update:endAt", data);
        },
    },
    props: {
        startAt: {
            type: Date,
            default: "",
        },
        endAt: {
            type: Date,
            default: "",
        },
    },
    methods: {
        openDatePicker(inputField) {
            // 입력 필드를 클릭하면 날짜 선택을 위한 datepicker를 열도록 함
            // inputField 매개변수는 어떤 입력 필드를 클릭했는지 식별하는 데 사용됨
            const inputElement = document.getElementById(inputField);
            inputElement.focus();
        },
    },
}
</script>

<style></style>