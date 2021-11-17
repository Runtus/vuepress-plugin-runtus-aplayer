<template>
    <div class="aplayer-box">
        <div id="player" />
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted } from 'vue-demi'
import Aplayer from 'aplayer'
import 'APlayer/dist/APlayer.min.css';

export default defineComponent({
    name: 'Aplayer',
    setup() {
        const instance = getCurrentInstance().proxy;
        onMounted(() => {
            const audioSetting = instance.$page.audioSetting
            const ap = new Aplayer({
                container: document.getElementById('player'),
                ...audioSetting
            }) 
        })
    },
})
</script>


<style lang="stylus" scoped>
.aplayer-box {
    position: fixed;
    z-index: 100;
    left: 20px;
    top: 100px;

}
</style>