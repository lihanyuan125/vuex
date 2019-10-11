let Vue;

class Store {
    constructor(options){
        console.log(options)
        this.state = options.state
    }
}

const install = _Vue => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // this.$store  保证每个组件都可以拿到store
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  });
};

export default {
  install,
  Store
};















// let Vue;
// const forEach = (obj, callback) => {
//     Object.keys(obj).forEach(key => {
//         callback(key, obj[key])
//     })
// }
// class Store {
//     constructor(options) {
//         this._s = new Vue({
//             data: {
//                 state: options.state
//             }
//         })
//         let getters = options.getters || {}
//         this.getters = {};
//         forEach(getters, (getterName, value) => {
//             Object.defineProperty(this.getters, getterName, {
//                 get: () => {
//                     return value(this.state)
//                 }
//             })
//         })
//         let mutations = options.mutations || {}
//         this.mutations = {};
//         forEach(mutations, (mutationName, value) => {
//             this.mutations[mutationName] = (payload) => {
//                 value(this.state, payload)
//             }
//         })
//     }
//     commit(type, payload) {
//         this.mutations[type](payload)
//     }
//     get state() {
//         return this._s.state
//     }
// }
// const install = _Vue => {
//     Vue = _Vue
//     Vue.mixin({
//         beforeCreate() {
//             if (this.$options && this.$options.store) {
//                 this.$store = this.$options.store
//             } else {
//                 this.$store = this.$parent && this.$parent.$store
//             }
//         }
//     })
// }
// export default { install, Store }
