<template>
    <div>
        <b-modal id="status" ref="mystatus" hide-footer title="Robot Information">
            <div class="h2 mb-2" >
                <b-row>
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
                </b-row>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'statusModal',
    data() {
    return {
      mapVisible: false,
      statusVisible: false,
    }
  },
}
</script>

<style scoped>
    .b-modal{
        text-align: left;
    }
    .b-progress{
        width: 100%
    }

</style>