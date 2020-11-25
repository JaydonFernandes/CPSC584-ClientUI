<template>
  <div class="main-div">
    <topBar/>
    <p>LARGE MAP GOES HERE</p>
  </div>
</template>

<script>

import topBar from "../components/topBar"

export default {
  name: 'LargeMap',
  components: {
    topBar
  },
  data() {
    return {

    }
  }
  /*,
  created() {
    //event haddler for key input
    window.addEventListener('keyup', (e) => {
      console.log(`Key Press: ${e.key}`)
      switch (e.key) {
        case 'm':
        case 'M':
          console.log("Closing map...")
          this.$router.replace({ path: '/' })
          break;
      }
    });
  },
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-div{
          text-align: center;
      }
</style>
