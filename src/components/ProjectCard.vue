<template>
    <div class="container" style="max-width:fit-content">
        <div class="row mt-3" v-for="(projectPair, i) in projectPairs" :key="i">
            <div class="col-md-6" v-for="(project, j) in projectPair" :key="j">
                <div class="card" style="width: 18rem;" v-if="project">
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title || `프로젝트${(i + 1) * 2 + j + 1}` }}</h5>
                        <small style="margin-left:70%;">
                            {{ dateFormat(new Date(project.updated_at)) }}
                        </small>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's
                            content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    data() {
        return {
            cols: 2,
        }
    },
    props: {
        projects: Array,
    },
    computed: {
        projectPairs() {
            const pairs = [];

            for (let i = 0; i < this.projects.length; i += this.cols) {
                const pair = [this.projects[i], this.projects[i + 1]];
                pairs.push(pair);
            }
            return pairs;
        },
    },
    methods: {
        dateFormat(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            const formattedDate = `${year}/${month}/${day}`;
            return formattedDate;
        }
    },
}
</script>

<style>
.container {
    max-width: fit-content;
    width: fit-content;
}

.row {
    width: fit-content;
}

.card {
    margin-top: 5%;
    box-shadow: 2px 3px 5px 0px
}
</style>