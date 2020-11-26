<template>
  <div class="main-div">
    <topBar/>
    
    
    
    <b-container class="imageGrid" id ="imageGrid">
        <div id="crosshair" style = 'left:0px ; top:0px'>
            <b-img id="imgCrosshair" src = "../assets/crosshair1.png" style = 'width: 200px; height: 200px'></b-img>
            </div>
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
    var para;
    var topCoord = 0;
    var leftCoord = 0;

    
    //event haddler for key input
    // window.addEventListener('load', () =>{
    //     cross.style.position = 'absolute';
    //     cross.style.top = 0;
    //     cross.style.left = 0;

    // })

    window.addEventListener('keyup', (e) => {
        let modifier = 20;
        var cross = document.getElementById('crosshair');
        var grid = document.getElementById("imageGrid");
        
        
        

        console.log(`Key Press: ${e.key}`)
        switch (e.key) {
            
            case 'ArrowUp':
                cross.style.top = `${parseInt(cross.style.top) - modifier}px`;
                topCoord =  parseInt(cross.style.top);
                console.log("topCoord " + topCoord);
                break;
            
            case 'ArrowDown': 
                cross.style.top = `${parseInt(cross.style.top) + modifier}px`;
                topCoord = parseInt(cross.style.top)
                console.log("topCoord " + topCoord);
                break;
            
            case 'ArrowLeft':
                cross.style.left =  `${parseInt(cross.style.left) - modifier}px`;
                leftCoord = parseInt(cross.style.left);
                console.log("leftCoord " + leftCoord);
                break;
            
            case 'ArrowRight': 
                cross.style.left =  `${parseInt(cross.style.left) + modifier}px`;
                leftCoord = parseInt(cross.style.left);
                console.log("leftCoord " + leftCoord);
                break;
            
            case 'Enter':
                para = document.createElement("div");
                para.style.height = "50px";
                para.style.width = "50px";
                para.style.background = 'blue';
                para.style.position = "absolute";
                para.style.top = topCoord+'px';
                console.log(topCoord, leftCoord);
                para.style.left = leftCoord+'px'
                para.style.color 
                grid.appendChild(para);
                document.body.appendChild(grid);
                
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
      
    });
},
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
    #crosshair{
        position: absolute;
        z-index: 100;
       
       
    }
</style>