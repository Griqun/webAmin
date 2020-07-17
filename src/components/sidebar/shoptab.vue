<template>
  <div>
    <!-- 商品详情底部导航 -->
    <div class="panel">
      <ul>
        <li>
          <router-link to="" tab="a">
            <span class="iconfont icon-font-cheliang1"></span>
            积分兑换
          </router-link>

        <li>
          <router-link to="/shopcart" tab="a">
            <span class="iconfont icon-font-cheliang1"></span>
            购物车
          </router-link>
        </li>
        
        <li>
          <a @click="showModal=true">加入购物车</a>
        </li>

        <li>
          <router-link to="" tab="a">
            立即购买
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shoptab',
  data() {
    return{
      showModal: false
        
    }
  },
  methods:{
    addIn(){
      
    }
    }
  }
</script>
<style lang="scss" scoped>
@media (max-width: 768) {
  // 最大宽度 即 <768
  .panel {
    height: auto !important;
  }
  ul {
    width: 100%;
    
  }
}
.panel{
  position: fixed;
  // height: 80px;
  height: 55px;
  width: 100%;
  line-height: 80px;
  background-color: #fff;
  border-top: 1px solid #f8f8f8;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  bottom: 0;
  left: 0;
  z-index: 1;
}
.layui-this{
  a {
    color: #5fb878;
  }
}
ul {
  li {
    display: inline-block;
    padding: 0 23px;
 
    a {
      // padding: 0 20px;
      position: relative;
    }
    span{
      position: absolute;
      top: -50px;
      left: 30%;
    }
  }
 
}
.panel ul li:nth-child(3){
  background: pink;
  a{
    top: -10px;
  }
}

.panel ul li:nth-child(4){
  background: red;
  padding-right: 28px;
  a{
    top: -10px;
    left: 4px;
  }
}
</style>
