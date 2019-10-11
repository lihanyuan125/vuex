let Vue; 

class Store{

}

const install = _Vue =>{
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {   // this.$store
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