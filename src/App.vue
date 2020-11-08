<template>
  <div id="app">
    <MainScreen/>
  </div>
</template>

<script>
import MainScreen from './components/MainScreen.vue'

export default {
  name: 'App',
  components: {
    MainScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
