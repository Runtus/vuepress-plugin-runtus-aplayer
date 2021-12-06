import APlayer from './aplayer.vue'
import "./styles/index.styl"

export default ({ Vue, isServer }) => {
    // 由于ssr的原因，aplayer库只能通过动态引入
    if(window){
        const Aplayer = require('aplayer')
        Vue.prototype.APlayer = Aplayer
    }
    Vue.component(APlayer.name, APlayer)   
}