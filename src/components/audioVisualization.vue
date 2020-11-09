<template>
    <div class="audiovis">
        <div class="fill">
            <img v-if="!audioDetected" src="../assets/noaudio.jpg">
            <img v-if="audioDetected" src="../assets/audiodetected.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: "audioVisualization",
    data() {
        return {
            audioDetected: false
        }
    }
}
</script>

<style scoped>
    .audiovis{
        width: 40%;
        margin: 0 auto;
        border: 2px solid gray;
    }

    .fill img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
    }
</style>