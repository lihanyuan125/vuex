let Vue;  
class Store{
    constructor(options){
        // 下面这几行是Vuex中状态响应式的原理
        //  在vuex中什么时候用到了new Vue   当状态改变，想更新视图时，需要new Vue(异步（请求数据）)
        this._s = new Vue({  
            data:{
                state:options.state
            }
        })
        // 下面这几行是getters的原理
        let getters = options.getters || {}  
        this.getters = {};
        Object.keys(getters).forEach((getterName)=>{
            Object.defineProperty(this.getters,getterName,{
                get:()=>{
                    return getters[getterName](this.state)
                }
            })
        })
        // 实现mutations
        let mutations = options.mutations || {} 
        // console.log(mutations) // {add: ƒ}
        this.mutations = {}; 
        // console.log(Object.keys(mutations)) // ["add"]
        Object.keys(mutations).forEach(mutationName=>{
            console.log(mutationName) // add sub
            // 
            this.mutations[mutationName] = (payload)=>{
                mutations[mutationName](this.state,payload)
            }
        })
        // console.log(this.mutations)  // {add: ƒ, sub: ƒ}

    }
    // type add  payload 10
    // this.$store.commit("add",10)
    commit(type,payload){
        // {add: ƒ, sub: ƒ}   
        this.mutations[type](payload)
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