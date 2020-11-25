<template>
  <div class="main-div">
    <topBar/>
    <miniMap/>
    <h3>Main Screen</h3>
    <p>Press "N" to bring up robot info</p>
    <p>Use W,A,S,D to control the robot.</p>
    <p>Use arrow keys to control the camera.</p>
    <p>Commands should send a HTTP request to http://192.168.1.67:8080/ and print to console</p>
    
    <statusModal ref="my-modal"/>
    <audioVisualization/>
    
  </div>
</template>

<script>

import statusModal from "./statusModal"
import topBar from "./topBar"
import miniMap from "./miniMap"
import audioVisualization from "./audioVisualization"
export default {
  name: 'MainScreen',
  components: {
    statusModal,
    topBar,
    miniMap,
    audioVisualization,
  },
  data() {
    return {
      mapVisible: false,
      statusVisible: false,
      baseURL: 'http://192.168.1.67:8080/',
      mapToggled: false
    }
  },
  methods: {
    performComand(cmd){
      this.$http.get(this.baseURL, { params: { action: cmd } })
      .then(() => {
        //TODO something with the data if we need it
      })
    }
  },
  created() {
    //event haddler for key input
    window.addEventListener('keyup', (e) => {
      console.log(`Key Press: ${e.key}`)
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
          console.log("Driving forwards...")
          this.performComand('forward')
          break;
        case 'a':
        case 'A':
          console.log("Turning Wheels left...")
          this.performComand('fwleft')
          break;
        case 's':
        case 'S':
          console.log("Driving backwards...")
          this.performComand('backward')
          break;
        case 'd':
        case 'D':
          console.log("Turning Wheels right...")
          this.performComand('fwright')
          break;
        case 'ArrowLeft':
          console.log("Turning camera left...")
          this.performComand('camleft')
          break
        case 'ArrowRight':
          console.log("Turning camera right...")
          this.performComand('camright')
          break
        case 'ArrowUp':
          console.log("Turning camera up...")
          this.performComand('camup')
          break
        case 'ArrowDown':
          console.log("Turning camera down...")
          this.performComand('camdown')
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
