let Vue;  
class Store{
    constructor(options){
        // 在vuex中状态变了，视图也是刷新  new Vue({data:{xxx}})
        // vuex中响应式原理就是靠 new Vue
        this._s = new Vue({  // app.state
            data:{
                // 只有data中的数据才是响应式
                state:options.state
            }
        })
        // this._s = options.state
        let getters = options.getters || {}  // 
        this.getters = {};
        Object.keys(getters).forEach((getterName)=>{
            Object.defineProperty(this.getters,getterName,{
                get:()=>{
                    return getters[getterName](this.state)
                }
            })
        })
    }
    get state(){
        return this._s.state
    }
}
const install = _Vue =>{
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {  
            if(this.$options && this.$options.store){
                this.$store = this.$options.store
            }else{
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}
export default {install,Store}