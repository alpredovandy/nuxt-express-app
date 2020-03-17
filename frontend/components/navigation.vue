<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div v-if="!$store.state.article.title" class="container">
        <a class="navbar-brand" href="#">List</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" @click="goBack()">Users <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="container">
        <a class="navbar-brand" href="#" @click="goBack()">
          <span class="ion-android-arrow-back"></span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods : {
    goBack () {
      this.$store.commit('setArticle', {})
      this.$router.replace({ 'path' : '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  span {
    font-size: 32px;
  }
}
</style>
