<template>
    <div class="tab_box">
        <router-link to='/home'>
             <div class="iconfont icon-home"></div>
             首页
        </router-link>
        <router-link to='/list'>
              <div class="iconfont icon-list"></div>
             列表页
        </router-link>
        <router-link to='/collect'>
             <div class="iconfont icon-xin"></div>
              收藏页
        </router-link>
        <router-link to='/add'>
              <div class="iconfont icon-tianjia"></div>
              添加页
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
/* scoped 只对本组键的html 起作用 */
      @r:75rem;//less中的变量声明方式
      // @r 的定义方式 ：按照设计稿的十分之一来定义
      // 若有一个盒子 在设计稿上的宽度是 400px 假设设计稿宽是750px； @r:75rem
      // 则我们设置css宽度时 写成 400/@r 即可   
      //  宽度75px 写成 75/@r == 1rem ；
      .tab_box{
          position: fixed;
          background: #fff;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          border-top: 1px solid #ccc;
          box-shadow: 1px 1px 2px 2px #ccc;
          a{
              flex: 1;
              color: yellowgreen;
              font-size: 40/@r;
              text-decoration: none;
              margin: 10/@r 0;
              div{
                  font-size: 45/@r;
              }
          }
          a.current{
              color:orange;
          }
      }
</style>