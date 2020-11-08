<template>
  <MainScreen/>
</template>

<script>
import MainScreen from './components/MainScreen.vue'
//import MapScreen from './components/MapScreen.vue'

export default {
  name: 'App',
  components: {
    MainScreen,
    // MapScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
