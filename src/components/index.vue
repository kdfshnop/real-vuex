<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 可以直接拿过来用 -->
    <h1>stateA:{{$store.state.a}}</h1>
    <h1>gettersB:{{f}}</h1>
    <h1>gettersC:{{$store.getters.c}}</h1>
    <button @click="add">同步加一</button>
    <button @click="minus">异步减一</button>
    <button @click="link">跳转</button>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '欢迎大家指导',
      watch:1,
    }
  },
  beforeCreate(){
    console.log('beforecreate');
  },
  /**
   * dom模版中使用了基于HTML的模版语法，允许开发者声明式地将DOM绑定至底层vue实例的数据，为什么没有写入this依然可以渲染，发生了什么。
   *  */
  // beforeCreate>computed>created>mounted;computed可以归到数据中，所以computed>created;
  // 在这期间开始监听data对象数据变化(observe data)及内部事件初始化(init events);
  // computed>watch;watch是数据变化后才执行，而数据变化是在computed中执行;所以computed>watch;
  created(){
    console.log('created');
    this.minus();
  },
  mounted(){
    console.log('mounted');
    console.log(this.$store.getters.c,'c');
  },
  methods:{
    add(){
      // this.$store.state.a=this.$store.state.a+2;这种方法也行，但比较反锁，复用性差;
      // 更改vuex的store中的状态的唯一方式是提交mutation；也可以进行传参；传参形式有两种，另一种大家自己去看,不细说;
      this.$store.commit('plus',1);
    },
    minus(){
      // 使用actions的异步方法;action要通过store.dispatch方法进行触发;
      this.$store.dispatch('reduce',1)
    },
    link(){
      this.$router.push({name:'second'});
    }
  },
  computed:{
    f(){
      console.log('computed');
      return this.$store.state.a+1;
    }
  },
  watch:{
    f(val,oldVal){
      console.log('watch');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
