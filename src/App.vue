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
      this.$http.get("https://picsum.photos/200/300", {
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
    this.screenshotInterval = setInterval( this.getScreenshot, 100)
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
