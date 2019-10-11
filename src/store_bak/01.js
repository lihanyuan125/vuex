let Vue; 

class Store{

}

const install = _Vue =>{
    // console.log(".....")
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {  // 在组件创建之前调用
            console.log(this.$options.name)
        }
    })
}

export default {
    install,
    Store
}