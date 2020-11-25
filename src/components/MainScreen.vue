<template>
  <div class="main-div">
    <topBar/>

    <div id="workScreen" :style="{ backgroundImage: 'url(' + image + ')' }">
      <cameraFeed/>
      
      <statusModal ref="my-modal"/>
      <audioVisualization id="audioViz"/>
      <!-- <div id="footer">Footer will always be at the bottom</div> -->

    </div>
      
    <miniMap/>
    
    
  </div>
</template>

<script>

import statusModal from "./statusModal"
import topBar from "./topBar"
import miniMap from "./miniMap"
import audioVisualization from "./audioVisualization"
import cameraFeed from "./cameraFeed"
export default {
  name: 'MainScreen',
  components: {
    statusModal,
    topBar,
    miniMap,
    audioVisualization,
    cameraFeed,
  },
  data() {
    return {
      mapVisible: false,
      statusVisible: false,
      baseURL: 'http://192.168.1.67:8000/run/?',
      image: "",
      temp: true,
      imageData: "",
    }
  },
  methods: {
    performComand(cmd){
      this.$http.get(this.baseURL, { params: { action: cmd } })
      .then((response) => {
        console.log(response);
      });
    },

    getScreenshot(){
      this.$http.get("https://picsum.photos/1280/720", {
          responseType: 'arraybuffer' 
      })
      .then((data) => {
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(data.data)));
        this.imageData = "data:image/jpg;base64,"+base64String;
        
      })
      this.image = this.imageData
      //Take screenshot every 1/10 second
      setTimeout(this.getScreenshot, 100)
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
    this.getScreenshot();
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-div{
      text-align: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
  }
  #audioViz{
    position: absolute;
    bottom: 0; 

    left: 50%;
    transform: translate(-50%);
    
  }
  #workScreen{
    background-color: #92a8d1;
    background-size: cover;
    position: absolute;
    bottom: 0;
    right:0;
    left:0;
    top: 10%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

  }
   
</style>
