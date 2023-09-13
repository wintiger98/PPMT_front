<template>
    <div v-if="isModal">
        <div class="modal">
            <!-- 모달 내용 -->
            <div class="modal-content">
                <h2>프로젝트 생성</h2>
                <!-- 프로젝트 제목 입력 -->
                <div class="form-group">
                    <label for="title">프로젝트 제목</label>
                    <input type="text" id="title" v-model="projectTitle" required>
                </div>
                <!-- 기술 스택 입력 -->
                <div class="form-group">
                    <label for="tech">기술 스택</label>
                    <div class="stack-input">
                        <input type="text" id="stack" v-model="newTech" placeholder="기술 입력">
                        <button class="add" @click="addTech">추가</button>
                    </div>
                </div>
                <div class="stack">
                    <div v-for="(t, index) in tech" :key="index" class="stack-item">
                        {{ t }}
                        <button class="delete" @click="removeTech(index)"> X </button>
                    </div>
                </div>

                <!-- 카테고리 입력 -->
                <div class="form-group">
                    <label for="category">카테고리</label>
                    <div class="stack-input">
                        <input type="text" id="stack" v-model="newCategory" placeholder="카테고리 입력">
                        <button class="add" @click="addCategory">추가</button>
                    </div>
                </div>
                <div class="stack">
                    <div v-for="(category, index) in categories" :key="index" class="stack-item">
                        {{ category }}
                        <button class="delete" @click="removeCategory(index)"> X </button>
                    </div>
                </div>
                <!-- 기간 입력 -->
                <div class="form-group">
                    <label for="startAt">시작 날짜</label>
                    <input type="date" id="startAt" v-model="startAt">
                    <label for="endAt">끝 날짜</label>
                    <input type="date" id="endAt" v-model="endAt">
                </div>
                <!-- 기획안 입력 -->
                <div class="form-group">
                    <label for="proposal">기획안</label>
                    <textarea id="proposal" v-model="proposal" rows="4"></textarea>
                </div>
                <!-- 디자인 입력 -->
                <div class="form-group">
                    <label for="design">디자인</label>
                    <input type="text" id="design" v-model="design">
                </div>
                <!-- 진척사항 입력 -->
                <div class="form-group">
                    <label for="progress">진척사항</label>
                    <input type="text" id="progress" v-model="progress">
                </div>
                <div class="button-group">
                    <button type="submit" class="create button" @click="createProject">프로젝트 생성</button>
                    <button @click="closeModal" class="close button">닫기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projectTitle: "",
            tech: [],
            newTech: "",
            categories: [],
            newCategory: "",
            startAt: "",
            endAt: "",
            proposal: "",
            design: "",
            progress: "",
        }
    },
    computed: {
        isModal() {
            return this.$store.state.isModal;
        },
    },
    methods: {
        closeModal() {
            // 모달을 닫는 메소드
            this.$store.dispatch("closeModal");
        },
        addCategory() {
            if (this.newCategory.trim() != "") {
                this.categories.push(this.newCategory);
                // 입력필드 초기화
                this.newCategory = "";
            }
        },
        removeCategory(index) {
            this.categories.splice(index, 1);
        },
        addTech() {
            if (this.newTech.trim() != "") {
                this.tech.push(this.newTech);
                // 입력필드 초기화
                this.newTech = "";
            }
        },
        removeTech(index) {
            this.tech.splice(index, 1);
        },
        async createProject() {
            // 제목 입력 받기
            if (!this.projectTitle) {
                alert("프로젝트 제목을 입력하세요.")
                return;
            }
            // 프로젝트 생성
            try {
                const projectData = {
                    title: this.projectTitle,
                    tech: this.tech,
                    categories: this.categories,
                    start_at: new Date(this.startAt).toISOString(),
                    end_at: new Date(this.endAt).toISOString(),
                };
                const response = await this.$axios.post(`${this.$store.state.host}/projects`, projectData, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (response.status == 200) {
                    // 생성 성공시 처리
                    const newProject = response.data;
                    console.log(newProject);
                } else {
                    alert("프로젝트 생성에 실패했습니다. 다시 시도해주세요");
                }
            } catch (error) {
                console.log(error);
                alert("프로젝트 생성 중 오류가 발생했습니다");
            }
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

.button {
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    justify-content: space-between;
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
  