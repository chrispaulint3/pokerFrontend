import { createStore } from 'vuex'



// Create a new store instance.
const store = createStore({
  state() {
    return {
      loginState: {
        isLogin: false,
        hasReg: false,
        isReg: false,
      },
      AISystemDecision: 0,
      client: {},

      totalprice: 0,

      // 显示的初始坐标
      longitude: 116.404,
      latitude: 39.915,

      // 房源初始编号
      currentClient: -1,

      // 可解释性层级
      explainLevel: 1,

      // 用户反馈的房价估值
      userPredictPrice: 0,
      // 用户反馈的系统参考值
      refValue: 3,
      // 用户反馈的信任值
      trustValue: 3,
    }
  },
  mutations: {
    increment(state) {
      state.currentClient++
    }
  }
})


export default store