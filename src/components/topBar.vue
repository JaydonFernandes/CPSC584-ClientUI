<template>
    <div>
        <b-navbar  variant="info"  >
            <b-row cols=4 align-h="start">
                <b-col >
                    <b-icon icon="bar-chart-fill" font-scale="4" variant="success"></b-icon>
                    Ping 23ms
                </b-col>
                <b-col>
                    <b-icon icon="battery-half" font-scale="4" variant="success"></b-icon>
                    <h5>86%</h5>
                </b-col>
                
                <b-col>
                    <b-icon icon="thermometer-half" font-scale="4" variant="danger"></b-icon>
                    <h5>25%</h5>
                </b-col>
                
                <b-col>
                    <b-iconstack font-scale="5">
                        <b-icon stacked icon="brightness-high-fill" variant="warning" scale="0.75"></b-icon>
                        <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
                    </b-iconstack>
                </b-col>
                

            </b-row>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: "topBar",

}
</script>
<style scoped>
    .b-row{
        width: 100%
    }
    .b-col{
        width: 10%
    }
</style>