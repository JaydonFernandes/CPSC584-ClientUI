<template>
  <div class="main-div">
    <topBar/>
    <b-container class="imageGrid">
        <b-row class="mb-3">
            <b-col><b-img v-if= img1 src="../assets/worldMap/image_part_001.jpg" fluid alt="Responsive image"></b-img></b-col>
            <b-col order="1"><b-img v-if= img2 src="../assets/worldMap/image_part_002.jpg" fluid alt="Responsive image"></b-img></b-col>
            <b-col order="2"><b-img v-if= img3 src="../assets/worldMap/image_part_003.jpg" fluid alt="Responsive image"></b-img></b-col>
        </b-row>
                <b-row class="mb-3">
            <b-col><b-img v-if= img4 src="../assets/worldMap/image_part_004.jpg" fluid alt="Responsive image"></b-img></b-col>
            <b-col order="1"><b-img v-if= img5 src="../assets/worldMap/image_part_005.jpg" fluid alt="Responsive image"></b-img></b-col>
            <b-col order="2"><b-img v-if= img6 src="../assets/worldMap/image_part_006.jpg" fluid alt="Responsive image"></b-img></b-col>
        </b-row>
        <b-row class="mb-3">
            <b-col><b-img v-if= img7 src="../assets/worldMap/image_part_007.jpg" fluid alt="Responsive image"></b-img></b-col>
            <b-col order="1"><b-img v-if= img8 src="../assets/worldMap/image_part_008.jpg" fluid alt="Responsive image"></b-img> </b-col>
            <b-col order="2"><b-img v-if= img9 src="../assets/worldMap/image_part_009.jpg" fluid alt="Responsive image"></b-img></b-col>
        </b-row>
    </b-container>
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
        img1: false,
        img2: false,
        img3: false,
        img4: false,
        img5: false,
        img6: false,
        img7: false,
        img8: false,
        img9: false
    }
  },

created() {
    //event haddler for key input
    window.addEventListener('keyup', (e) => {
      console.log(`Key Press: ${e.key}`)
      switch (e.key) {
        case '1':

            this.img1 = true
            break;
        case '2':

            this.img2 = true
            break;
        case '3':

            this.img3 = true
            break;
        case '4':

            this.img4 = true
            break;
        case '5':

            this.img5 = true
            break;
        case '6':

            this.img6 = true
            break;
        case '7':

            this.img7 = true
            break;
        case '8':

            this.img8 = true
            break;
        case '9':

            this.img9 = true
            break;
           
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
    .imageGrid{
        background-color: black;
        width: 100vw!important;
        height: 88vh;
    }
</style>