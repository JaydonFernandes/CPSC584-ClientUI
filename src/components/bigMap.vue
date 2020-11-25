<template>
  <div>
        <b-modal hide-backdrop content-class="shadow" ref="MaxMap" hide-footer title="Robot Information">
            <div class ="test">
            <div class="h2 mb-2" >
                <!-- <b-row>
                    <b-col>Camera:</b-col>
                    <b-col><b-icon icon="check-circle-fill" variant="success"></b-icon></b-col>
                </b-row>
                <b-row>
                    <b-col>Audio:</b-col>
                    <b-col><b-icon icon="check-circle-fill" variant="success"></b-icon></b-col>
                </b-row>
                <b-row>
                    <b-col>Motor:</b-col>
                    <b-col><b-icon icon="check-circle-fill" variant="success"></b-icon></b-col>
                </b-row>
                <b-row align-v="center">
                    <b-col>Damage:</b-col>
                    <b-col><b-progress value=10 variant="danger"></b-progress></b-col>
                </b-row> -->
             
                <b-container fluid class="bv-example-row">
                    <b-row class="mb-3">
                        <b-col>image1</b-col>
                        <b-col order="1">image2</b-col>
                        <b-col order="2">image3</b-col>
                    </b-row>
                         <b-row class="mb-3">
                        <b-col>image4</b-col>
                        <b-col order="1">image5</b-col>
                        <b-col order="2">image6</b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col>image7</b-col>
                        <b-col order="1">image8</b-col>
                        <b-col order="2">image9</b-col>
                    </b-row>
                </b-container>
    
            </div>
            </div>
        </b-modal>
    </div>

</template>

<script>
export default {
    name: 'bigMap',
    data() {
    return {
      mapVisible: false,
      
    }
  },
}
</script>

<style scoped>
    .b-modal{
       text-align: left;
       size: large
       
    }
    

</style>

