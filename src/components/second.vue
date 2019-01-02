<template>
    <div>
        <div>{{count}}</div>
        <!-- 传参的不同方式 -->
        <button @click="add(1)" style="margin-top:50px;">同步加一</button>
        <button @click="addB">同步加二</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name:'second',
    components:{},
    data(){
        return {
            // count:this.$store.state.a
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        addB(){
            this.add(2);
        },
        ...mapMutations({
            add:'plus'
        })
    },
    computed:{
        ...mapState({
            count:'a'
        })
    },
    watch:{

    }
}
</script>

<style>

</style>

