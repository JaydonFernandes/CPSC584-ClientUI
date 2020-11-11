<template>
  <div class="main-div">
    <topBar/>
    <miniMap/>
    <h3>Main Screen</h3>
    <p>Press "N" to bring up robot info</p>
    <p>All other key commads will print in the console for now...</p>
    
    <statusModal ref="my-modal"/>
    
  </div>
</template>

<script>

import statusModal from "./statusModal"
import topBar from "./topBar"
import miniMap from "./miniMap"
export default {
  name: 'MainScreen',
  components: {
    statusModal,
    topBar,
    miniMap
  },
  data() {
    return {
      mapVisible: false,
      statusVisible: false,
    }
  },
  methods: {
  },
  created() {
    //event haddler for key input
    window.addEventListener('keyup', (e) => {
      console.log(`Key Press: ${e.key}`)
      switch (e.key) {
        case 'm':
        case 'M':
          this.mapVisible = !this.mapVisible
          console.log("Toggling map...")
          break;
        case 'n':
        case 'N':
          this.statusVisible = !this.statusVisible
          console.log("Toggling statuses...")
          this.$refs['my-modal'].$refs["mystatus"].toggle('#toggle-btn')
          break;
        case 'w':
        case 'W':
          console.log("Driving forwards...")
          break;
        case 'a':
        case 'A':
          console.log("Turning Wheels left...")
          break;
        case 's':
        case 'S':
          console.log("Driving backwards...")
          break;
        case 'd':
        case 'D':
          console.log("Turning Wheels left...")
          break;
        case 'ArrowLeft':
          console.log("Turning camera left...")
          break
        case 'ArrowRight':
          console.log("Turning camera right...")
          break
        case 'ArrowUp':
          console.log("Turning camera up...")
          break
        case 'ArrowDown':
          console.log("Turning camera down...")
          break
      }
    });
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-div{
          text-align: center;
      }
</style>
