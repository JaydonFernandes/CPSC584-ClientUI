<template>
    <div>
        <div v-if ="miniMapVisible" class="map">
                <b-img src="../assets/miniMap_placeholder.png" fluid alt="Responsive image"></b-img>
        </div>
        
    </div>

   
</template>
<script>
export default {
    name: "miniMap",
    props:{
        miniMapVisible: Boolean
    },

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