<template>
  <div id="app">
    <div class="btn-group">
      <router-link to="/index">index</router-link>
    <router-link to="/first">first</router-link>
    <router-link to="/second">second</router-link>
    <router-link to="/three">three</router-link>
    <router-link to="/parents">parents</router-link>
    <router-link to="/child">child</router-link>
    <router-link to="/borther1">noFatherAndSon/borther1</router-link>
    <router-link to="/vueindex">vueindex</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-group{
  margin-top: 100px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}

</style>
