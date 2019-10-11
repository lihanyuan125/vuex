let Vue; 

class Store{
    constructor(options){
        // console.log(options)
        // 给每一个组件上面的$store上面挂一个state
        // 这样，每一个组件都可以通过this.$store.state.xxx就可以得到状态
        this.state = options.state
        let getters = options.getters || {}
        // console.log(this.state)
        // console.log(getters)
        this.getters = getters;
    }
}

const install = _Vue =>{
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {   // this.$store
            // 保证每一个组件中都可以得到仓库
            if(this.$options && this.$options.store){
                this.$store = this.$options.store
            }else{
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    install,
    Store
}