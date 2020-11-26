<template>
  <div class="main-div">
    <topBar/>
    <miniMap v-bind:miniMapVisible="this.miniMapVisible" ref ="myMiniMap"></miniMap>
    <h3>Main Screen</h3>
    <p>Press "N" to bring up robot info</p>
    <p>Press "M" to bring up Map <p>
    <p>Use W,A,S,D to control the robot.</p>
    <p>Use arrow keys to control the camera.</p>
    <p>Commands should send a HTTP request to http://192.168.1.67:8080/ and print to console</p>
    
    <statusModal ref="my-modal"/>
    <!-- <bigMap ref ="myMap"/> -->
    <audioVisualization/>
    
  </div>
</template>

<script>

import statusModal from "./statusModal"
import topBar from "./topBar"
import miniMap from "./miniMap"
import audioVisualization from "./audioVisualization"
// import bigMap from "./bigMap"



export default {
  name: 'MainScreen',
  components: {
    statusModal,
    topBar,
    miniMap,
    audioVisualization,
    // bigMap
  },
  data() {
    return {
      mapVisible: false,
      statusVisible: false,
      baseURL: 'http://192.168.1.67:8000/run/?',
      miniMapVisible: true,
      mapToggled: false,
  
    }
  },
  methods: {
    performComand(cmd){
      this.$http.get(this.baseURL, { params: { action: cmd } })
      .then((response) => {
        console.log(response);
      });
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (!e.repeat) {
        switch (e.key) {
          case 'w':
          case 'W':
            console.log("Down: Driving forwards...")
            this.performComand('forward')
            break;
          case 'a':
          case 'A':
            console.log("Down: Turning Wheels left...")
            this.performComand('fwleft')
            break;
          case 's':
          case 'S':
            console.log("Down: Driving backwards...")
            this.performComand('backward')
            break;
          case 'd':
          case 'D':
            console.log("Down: Turning Wheels right...")
            this.performComand('fwright')
            break;
          case 'ArrowLeft':
            console.log("Down: Turning camera left...")
            this.performComand('camleft')
            break
          case 'ArrowRight':
            console.log("Down: Turning camera right...")
            this.performComand('camright')
            break
          case 'ArrowUp':
            console.log("Down: Turning camera up...")
            this.performComand('camup')
            break
          case 'ArrowDown':
            console.log("Down: Turning camera down...")
            this.performComand('camdown')
            break
        }
      }
    });
    //event haddler for key input
    window.addEventListener('keyup', (e) => {
      if (!e.repeat) {
        switch (e.key) {
          case 'm':
          case 'M':
            this.mapVisible = !this.mapVisible
            if(!this.mapToggled) {
            console.log("Toggling map...")
            this.mapToggled = true
            this.$router.push({ path: 'largeMap' }).catch(()=>{})
          }
          else {
            console.log("Closing map...")
            this.mapToggled = false
            this.$router.replace({ path: '/' }).catch(()=>{})
          }
            break;
          case 'n':
          case 'N':
            this.statusVisible = !this.statusVisible
            console.log("Toggling statuses...")
            this.$refs['my-modal'].$refs["mystatus"].toggle('#toggle-btn')
            break;
          case 'w':
          case 'W':
            console.log("Up: Driving forwards...")
            this.performComand('stop')
            break;
          case 'a':
          case 'A':
            console.log("Up: Turning Wheels left...")
            this.performComand('fwstraight')
            break;
          case 's':
          case 'S':
            console.log("Up: Driving backwards...")
            this.performComand('stop')
            break;
          case 'd':
          case 'D':
            console.log("Up: Turning Wheels right...")
            this.performComand('fwstraight')
            break;
          case 'ArrowLeft':
            console.log("Up: Turning camera left...")
            this.performComand('camready')
            break
          case 'ArrowRight':
            console.log("Up: Turning camera right...")
            this.performComand('camready')
            break
          case 'ArrowUp':
            console.log("Up: Turning camera up...")
            this.performComand('camready')
            break
          case 'ArrowDown':
            console.log("Up: Turning camera down...")
            this.performComand('camready')
            break
        }
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