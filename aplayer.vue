<template>
    <div class="aplayer-box" :style="positionRef">
        <div id="player" />
    </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue-demi'
import 'APlayer/dist/APlayer.min.css';

// const AplayerFn = () => import('aplayer')




export default defineComponent({
    name: 'Aplayer',
    setup() {
        const instance = getCurrentInstance().proxy;
        const positionRef = ref({})
        onMounted(async () => {

            // const Aplayer = await AplayerFn()
            
           
            const audioSetting = instance.$page.audioSetting
            const {position, fixed = false} = audioSetting;
            // 原组件吸底配置优先级大于手动设置
            if(!fixed){
                positionRef.value = position
            }


            if(instance.APlayer){
                const ap = new instance.APlayer({
                    container: window ? document.getElementById('player') : '',
                    ...audioSetting
                }) 
            }
            
        })

        return {
            positionRef
        }
    },
})
</script>


<style lang="stylus" scoped>
.aplayer-box {
    position: fixed;
    z-index: 100;
}
</style>