import Vue from "vue";
// 导入vuex  { install Store }
import Vuex from "./vuex";
// 使用vuex,use时，会自动调用这个对象中的install方法
Vue.use(Vuex);

// 需要创建一个仓库,store是一个类
export default new Vuex.Store({
  state: {
    age: 100
  },
  // getters中虽然是一个方法，但是用时，当作属性
  // getters: {
  //   // 说白了，就是vue中data中的computed
  //   myAge(state) {
  //     return state.age + 100;
  //   }
  // },
  // 改变状态：异步请求数据  事件
  // mutations: {
  //   add(state, payload) {
  //     state.age += payload;
  //   }
  // },
  // actions: {}
});
