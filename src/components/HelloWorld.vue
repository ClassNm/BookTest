<template>
  <div class="hello">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <myTab></myTab>
  </div>
</template>

<script>
import myTab from '@/components/common/tab.vue'
export default {
  name: 'HelloWorld',
  // 若本组件 用到本组件自己 则必须有这个name
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    myTab
    // 在这种 .vue 文件中 支持驼峰式命名
  },
  computed:{
    count2(){
      return this.$store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
