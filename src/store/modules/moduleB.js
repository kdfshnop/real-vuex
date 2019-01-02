export default {
    namespaced:true,
    state:{
        number:10,
    },
    mutations:{
        reduce(state,val){
            state.number-=val;
        }
    }
}