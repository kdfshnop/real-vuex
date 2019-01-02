export default {
    namespaced:true,//如果多人开发时，写入的getter,mutation,action重名时，会同时执行，因此要加上命名空间;
    state:{
        number:6,
    },
    mutations:{
        add(state,val){
            state.number+=val;
        }
    },
    actions:{
        plus(context,val){
            let b=function(val){
                alert(val);
            }
            // 第三个可以传参;
            setTimeout(b, 3000,val);
        }
    }
}