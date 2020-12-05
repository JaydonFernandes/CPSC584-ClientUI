<template>
    <div>
        <div v-if ="miniMapVisible" class="map">
                <b-img :src="mapSrc" fluid alt="Responsive image"></b-img>
        </div>
        
    </div>

   
</template>
<script>
export default {
    name: "miniMap",
    props:{
        miniMapVisible: Boolean
    },
    data(){
        return{
            tileNum: 0,
            mapSrc: require("../assets/fog.jpg"),
        }
    },
    methods: {
        setMapSource(tile){
            if (tile == 1){
                this.mapSrc = require("../assets/worldMap/image_part_001.jpg")
            }else if (tile == 2){
                this.mapSrc = require("../assets/worldMap/active_image_part_002.jpg")
            }else if (tile == 3){
                this.mapSrc = require("../assets/worldMap/image_part_003.jpg")
            }else if (tile == 4){
                this.mapSrc = require("../assets/worldMap/active_image_part_004.jpg");
            }else if (tile == 5){
                this.mapSrc = require("../assets/worldMap/active_image_part_005.jpg")
            }else if (tile == 6){
                this.mapSrc = require("../assets/worldMap/active_image_part_006.jpg")
            }else if (tile == 7){
                this.mapSrc = require("../assets/worldMap/image_part_007.jpg")
            }else if (tile == 8){
                this.mapSrc = require("../assets/worldMap/active_image_part_008.jpg")
            }else if (tile == 9){
                this.mapSrc = require("../assets/worldMap/image_part_009.jpg")
            }else{
                this.mapSrc = require("../assets/fog.jpg")
            }
        }
    }

}
</script>
<style scoped>
    .map{
        position: absolute;
        top:0;
        right:0;
        border: 2px solid gray;
    }
 
</style>