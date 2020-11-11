<template>
    
    <div class="map">

            <b-img src="../assets/miniMap_placeholder.png" fluid alt="Responsive image"></b-img>
    </div>
   
</template>
<script>
export default {
    name: "miniMap",

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