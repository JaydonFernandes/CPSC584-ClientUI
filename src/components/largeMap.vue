<template>
  <div class="main-div">
    <topBar/>
    
    <b-container class="imageGrid" id ="imageGrid">
        <div id="crosshair" style = 'left:0px ; top:0px'>
            <b-img id="imgCrosshair" src = "../assets/crosshair1.png" style = 'width: 200px; height: 200px'></b-img>
            </div>
        <b-row class="row no-gutters">
            <b-col>
                <b-img v-if= img1 src="../assets/worldMap/image_part_001.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col order="1">
                <b-img v-if= "this.currentTile == 2" src="../assets/worldMap/active_image_part_002.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else-if= img2 src="../assets/worldMap/image_part_002.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col order="2">
                <b-img v-if= img3 src="../assets/worldMap/image_part_001.jpg" fluid alt="Responsive image">
                </b-img><b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
        </b-row>
        <b-row class="row no-gutters">
            <b-col>
                <b-img v-if= "this.currentTile == 4" src="../assets/worldMap/active_image_part_004.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else-if= img4 src="../assets/worldMap/image_part_004.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col order="1">
                <b-img v-if= "this.currentTile == 5" src="../assets/worldMap/active_image_part_005.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else-if= img5 src="../assets/worldMap/image_part_005.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col order="2">
                <b-img v-if= "this.currentTile == 6" src="../assets/worldMap/active_image_part_006.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else-if= img6 src="../assets/worldMap/image_part_006.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
        </b-row>
        <b-row class="row no-gutters">
            <b-col>
                <b-img v-if= img7 src="../assets/worldMap/image_part_001.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col order="1">
                <b-img v-if= "this.currentTile == 8" src="../assets/worldMap/active_image_part_008.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else-if= img8 src="../assets/worldMap/image_part_008.jpg" fluid alt="Responsive image"></b-img>
                <b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
            <b-col order="2">
                <b-img v-if= img9 src="../assets/worldMap/image_part_001.jpg" fluid alt="Responsive image">
                </b-img><b-img v-else src="../assets/fog.jpg" fluid alt="Responsive image"></b-img>
            </b-col>
        </b-row>
    </b-container>
    
  </div>
</template>

<script>
import topBar from "../components/topBar"
var marker = 0;


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
        img9: false,
        img1Active: false,
        img2Active: false,
        img3Active: false,
        img4Active: false,
        img5Active: false,
        img6Active: false,
        img7Active: false,
        img8Active: false,
        img9Active: false,
        currentTile: 0,
        para: "",
        topCoord: 0,
        leftCoord: 0

    }
  },
  computed: {
      coordinates() {
          return this.$store.getters.coordinates
      }
  },
created() {
    console.log("Large Map Component Created")
    window.addEventListener('keyup', this.keyupHandler);
},
mounted() {
    console.log("Component mounted")
    this.checkCoords();
    this.checkFoundTiles();
    this.checkCurrentTile();
},
destroyed() {
    console.log("Destroying component")
    window.removeEventListener('keyup', this.keyupHandler);
},
methods: {
    markMap: function(topCoord, leftCoord, para) {
        marker +=  1;
        var x = document.elementsFromPoint(leftCoord + 75, topCoord + 75)
        var y = x[2].id;

         if(y == "imageGrid" || x[2].className == "img-fluid"){
           
            console.log("Marking Map")
            console.log(topCoord + 75 +'px');
            console.log(leftCoord + 75 + 'px');
            var grid = document.getElementById("imageGrid");
            para = document.createElement("div");
            para.setAttribute("id", marker);
            para.style.height = "50px";
            para.style.width = "50px";
            para.style.background = 'blue';
            para.style.position = "absolute";
            para.style.top = topCoord + 75 +'px';
            para.style.left = leftCoord + 75 +'px';
            para.style.color 
            this.$store.commit('addCoordinates', {
                xcoord: topCoord + 75 +'px',
                ycoord: leftCoord+ 75 +'px'
        })
        grid.appendChild(para);
            
        }
        else{
            var checkTopCoord = x[2].style.top;
            var checkLeftCoord = x[2].style.left;
            console.log(checkTopCoord, checkLeftCoord);
            this.$store.commit('deleteCoord',{
                xcoord : checkTopCoord,
                ycoord: checkLeftCoord
            })
            x[2].remove();
        }
            
    },
    checkCoords: function(para) {
        // if there are existing coordinates in the store, mark them again
        if(!this.$store.getters.coordinates.length == 0) {
            this.$store.getters.coordinates.forEach(coords =>{
                var grid = document.getElementById("imageGrid");
                console.log("COORDS")
                console.log(coords)
                para = document.createElement("div");
                para.style.height = "50px";
                para.style.width = "50px";
                para.style.background = 'blue';
                para.style.position = "absolute";
                para.style.top = coords.xcoord
                para.style.left = coords.ycoord
                para.style.color 
                console.log(para.style.top, para.style.left)
                grid.appendChild(para);
            })
        
        }
    },

    checkFoundTiles(){
        if (this.$store.state.tiles[0]) {
            this.img1 = true;
        }
        if (this.$store.state.tiles[1]) {
            this.img2 = true;
        }
        if (this.$store.state.tiles[2]) {
            this.img3 = true;
        }
        if (this.$store.state.tiles[3]) {
            this.img4 = true;
        }
        if (this.$store.state.tiles[4]) {
            this.img5 = true;
        }
        if (this.$store.state.tiles[5]) {
            this.img6 = true;
        }
        if (this.$store.state.tiles[6]) {
            this.img7 = true;
        }
        if (this.$store.state.tiles[7]) {
            this.img8 = true;
        }
        if (this.$store.state.tiles[8]) {
            this.img9 = true;
        }
    },

    checkCurrentTile() {
        this.currentTile = this.$store.getters.currentTile
    },

    keyupHandler(e){
        let modifier = 20;
        var cross = document.getElementById('crosshair');
        console.log("Event listener fired")

        console.log(`Key Press: ${e.key}`)
        switch (e.key) {
            case 'm':
            case 'M':
                this.$router.replace({ path: '/' }).catch(()=>{})
                break;
            
            case 'ArrowUp':
                cross.style.top = `${parseInt(cross.style.top) - modifier}px`;
                this.topCoord =  parseInt(cross.style.top);
                console.log("topCoord " + this.topCoord);
                break;
            
            case 'ArrowDown': 
                cross.style.top = `${parseInt(cross.style.top) + modifier}px`;
                this.topCoord = parseInt(cross.style.top)
                console.log("topCoord " + this.topCoord);
                break;
            
            case 'ArrowLeft':
                cross.style.left =  `${parseInt(cross.style.left) - modifier}px`;
                this.leftCoord = parseInt(cross.style.left);
                console.log("leftCoord " + this.leftCoord);
                break;
            
            case 'ArrowRight': 
                cross.style.left =  `${parseInt(cross.style.left) + modifier}px`;
                this.leftCoord = parseInt(cross.style.left);
                console.log("leftCoord " + this.leftCoord);
                break;
            
            case 'Enter':
                this.markMap(this.topCoord, this.leftCoord, this.para) 
                break;
            
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
    }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-div{
        text-align: center;
        background-color: gainsboro;
        } 
    .imageGrid{
        background-color: gainsboro;
        border-style:ridge;
        border-color: grey;
        width: 100vw!important;
        height: 88vh;
    }
    .row.no-gutters {
        margin-right: 0;
        margin-left: 0;
        padding-right: 0;
        padding-left: 0;
    }
    .img {
        border: 1px solid black;
    }
    /*
    .fill {
        width: 100%;
    }
    .fill img {
        width: 100%;
    }
    */
    #crosshair{
        position: absolute;
        z-index: 100;
    }
</style>