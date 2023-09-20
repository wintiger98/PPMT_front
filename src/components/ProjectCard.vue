<template>
    <div class="container">
        <div class="row mt-3" v-for="(projectPair, i) in projectPairs" :key="i">
            <div class="col-md-6" v-for="(project, j) in projectPair" :key="j">
                <div class="card" style="width: 18rem;" v-if="project">
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title || `프로젝트${(i + 1) * 2 + j + 1}` }}</h5>
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
}
</script>

<style>
.container {
    width: fit-content;
}

.row {
    width: fit-content;
}

.card {
    margin-top: 5%;
}
</style>