/**
 * @页面名称：创建状态管理模式
    @作者：豆亚东 (douyadong@lifang.com)
    @业务逻辑说明：
        1.模块化
        2.  
 */
import Vue from "vue";
import Vuex from "vuex";
import a from "./modules/moduleA";
import b from "./modules/moduleB";
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        total:12,
        key:'好好学习，天天向上'
    },
    mutations:{
        ride(state,val){
            state.total=state*2;
        }
    },
    actions:{
        
    },
    modules:{
        a,
        b
    }
})


