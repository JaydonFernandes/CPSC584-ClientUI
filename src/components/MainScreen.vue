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
      baseURL: 'http://192.168.1.67:8080/',
      image: "",
      temp: true,
      imageData: "",
    }
  },
  methods: {
    performComand(cmd){
      this.$http.get(this.baseURL, { params: { action: cmd } })
      .then(() => {
        //TODO something with the data if we need it
      })
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
