/**
 * @页面名称：创建状态管理模式
    @作者：豆亚东 (douyadong@lifang.com)
    @业务逻辑说明：
        1.基础
        2.  
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let state={
    a:1,
    b:1234
};
let getters={
    // 可以接受第二个参数;
    c:(state,getters)=>getters.d+2,
    d:state=>state.a+3
};
let mutations={
    // 函数必须为同步函数；
    plus(state,params){
        state.a+=params;
    },
    subtract(state,params){
        state.a-=params;
    }
};
let actions={
    // 异步方法;提交的是mutations,而不是直接变更状态；
    reduce(context,params){
        setTimeout(()=>{
            context.commit('subtract',params);
        },3000)
    },
    alert(context){
        // dispatch返回promise对象;
        context.dispatch('reduce',params).then(()=>{
            context.commit('subtract',params)
        })
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});