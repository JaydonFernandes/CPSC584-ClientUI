<template>
  <div id="app">
    
    
    <!-- <MainScreen/> -->
    <router-view/>
  </div>
</template>

<script>
// import MainScreen from './components/MainScreen.vue'

export default {
  name: 'App',
  components: {
    // MainScreen
  },
  data(){
    return {
      imageData: "",
    }
  },
  methods: {
    getScreenshot(){
      console.log("App screenshot")
      this.$http.get("http://192.168.1.70:8000/run/?action=qr", {
          responseType: 'arraybuffer' 
      })
      .then((data) => {
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(data.data)));
        this.imageData = "data:image/jpg;base64,"+base64String;
        
      })
      this.$store.state.screenshotImage = this.imageData
      // console.log("endding screenshot")
      
      
      //Take screenshot every 1/10 second
      // setTimeout(this.getScreenshot, 100)
    }
  },
  created() {
    console.log("App created");
    this.screenshotInterval = setInterval( this.getScreenshot, 300)
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
