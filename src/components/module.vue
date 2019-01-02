<template>
    <div>
        <div>{{key}}</div>
        <div>{{number}}</div>
        <!-- 传参的不同方式 -->
        <!-- <button @click="add(1)" style="margin-top:50px;">同步加一</button> -->
        <button @click="addB">同步加二</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    name:'module',
    components:{},
    data(){
        return {
            count:this.$store.state.a.number//这种形势获取也行，包括moudule中的gettter,mutation等;
        }
    },
    created(){
        // 异步弹出;
        this.plus(3)
    },
    mounted(){

    },
    methods:{
        addB(){
            this.rise(2);
        },
        ...mapMutations({
            add:'plus'
        }),
        ...mapMutations('a',{
            rise:'add'
        }),
        ...mapActions('a',['plus'])
    },
    computed:{
        ...mapState({
            key:'key'
        }),
        ...mapState('a',['number'])
    },
    watch:{

    }
}
</script>

<style>

</style>

