<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">개인 프로젝트 관리 도구</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              View Type
            </a>
            <ul class="dropdown-menu">
              <li @click="viewType = 0"><a class="dropdown-item" href="#">Card</a></li>
              <li @click="viewType = 1"><a class="dropdown-item" href="#">List</a></li>
              <li @click="viewType = 2"><a class="dropdown-item" href="#">TimeLine</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/mypage">My Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Link</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div style="margin-left:10px;" v-if="isLogin == false">
        <button type="button" class="btn btn-outline-secondary"><router-link to="/login">로그인</router-link></button>
        <button type="button" class="btn btn-outline-secondary" style="margin-left:5px;"><router-link
            to="/signup">회원가입</router-link></button>
      </div>
      <div style="margin-left:10px" v-if="isLogin == true">
        <button>user name</button>
      </div>
    </div>
    <div class="body">
    </div>
  </nav>
  <div class="mt-4">
    <!-- 라우터로 보여줄 곳 -->
    <router-view></router-view>
    <!-- <PostList :posts="posts"/> -->
  </div>
  <AppContainer :viewType="viewType" />
</template>

<script>
import AppContainer from "./components/AppConainer.vue"

export default {
  name: 'App',
  data() {
    return {
      viewType: 0,
      isLogin: false,
    }
  },
  components: {
    AppContainer,
  }
}
</script>

<style>
.login {
  margin-left: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
