let Vue;  
class Store{
    constructor(options){
        this._s = options.state
        // 得到仓库中的getters
        let getters = options.getters || {}  // 
        // console.log(getters) // {myAge: ƒ}
        // 给仓库上面挂载一个getters，只不过这个getters是{}
        this.getters = {};
        // console.log(getters)  // {myAge: ƒ}
        // console.log(Object.keys(getters))  // ["myAge","myName"]
        Object.keys(getters).forEach((getterName)=>{
            // console.log(getterName)  // myAge
            Object.defineProperty(this.getters,getterName,{
                // 当你要获取getterName（myAge）会自动调用get方法
                // 箭头函数中没有this
                get:()=>{
                    // console.log("....")
                    // console.log(this.state)
                    // console.log("....")
                    return getters[getterName](this.state)
                }
            })
        })
        // this.getters = getters;
    }
    get state(){
        return this._s;
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