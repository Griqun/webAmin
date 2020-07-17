<template>
  <!-- shopdetail -->
  <div class="shop-contain">
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="detail.img" />
          </div>
          
        </div>
       
       
      </div>
      
      <!-- 商品标题 -->
      <div class="shoplist-title">
        <h2>{{detail.name}}</h2>
        <h3>兑换积分：50</h3>
        <p>￥<span>{{detail.money}}</span></p>
      </div>  
    </div>
     <!-- 图文详情 -->
     <div class="content-box">
        <p>图文详情 </p>
        <div class="content">
           {{detail.content}}
        </div>
    </div>
   
    
    <!-- 商品 详情底部导航 -->
    <div class="panel">
      <ul>
        <li>
          <router-link to="" tab="a">
            <span class="iconfont icon-font-cheliang1"></span>
            积分兑换
          </router-link>

        <li>
          <a @click="toCart">
            <span class="iconfont icon-font-cheliang1"></span>
            购物车
          </a>
        </li>
        
        <li>
          <a  @click="addCart()">加入购物车</a>
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
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import mock from '../../mock/index.js';
import {mapActions} from 'vuex';
import { Toast } from 'mint-ui';
export default {
  name: 'shopdetail',
  data () {
    return {
     detail:{}
    }
  },
  components: {
    
  },
  created () {

    
  },

  mounted () {
	  // 1、先打印一下id传参过来的东西有没有存在
    console.log(this.$route.params)
	// 2、然后在这里写一个函数initShops，里面的参数就是详情页的路由id（就是详情页从列表接受过来的参id）
    this.initShops(this.$route.params.id)
  },

  methods: {
    // 3、接下来在这里写方法，直接拿mock数据的id就会把其他对应的数据都拿过来了，打印能不能成功先
    initShops(id){
      this.detail = mock.shopLists[id]
	  console.log(this.detail)
	  // 有数据东西打出来了就去渲染页面，{{detail.name}},name就是shopLists里面的对象名
    
    },
	// 接下来写加入购物车
	...mapActions(['addToCart']),//这里是vuex的方法
	addCart(){
		this.addToCart(this.detail);//this.detail数据作为参数带过去
		Toast({
		  message: '加入购物车成功',
		  className:'toast',
		  position: 'middle',
		  duration: 1000
		});
	},
	// 再接下来写个购物车的跳转
	toCart(){
		this.$router.push({path:'/shopcart'})
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
// .panel{
//   position: fixed; 
//   // height: 80px;
//   height: 55px;
//   width: 100%;
//   line-height: 80px;
//   background-color: #fff;
//   border-top: 1px solid #f8f8f8;
//   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//   bottom: 0;
//   left: 0;
//   z-index: 1;
//   display: flex;
//   flex-flow: nowrap;
// }
// .panel li span {
//   position: relative;
//   top: -35%;
//   left: 50%;
// }
// .panel li a{
//   text-align: center;
// }
// .panel li{
//   width:25%;
// }
.swiper-box{
//   height: 185px;
  background: #fff;
}
.swiper-box .shop-contain .swiper-slide{
  height: 100%;
  height: 100%;
  overflow: hidden;
}
.shop-contain .swiper-slide img{
  width: 100%;
  height: 100%;
}


.swiper-pagination{
  left: 45%;
}
// 商品标题
.shoplist-title{
    text-align: center;
    padding-top: 30px;
    line-height: 2em;
}
.shoplist-title h3{
    font-size: 18px;
    color: red;
}
.shoplist-title p{
     color: red;
  
}
.shoplist-title span{
    font-size: 18px;
}
.content{
  height:300px;
}
.contentcontent-box p{
    text-align: center;
}
.content-box{
    background: #fff;
    margin-top: 10px;
    justify-content: left;
}
// 提示框
.secbox{
  width: 120px;
  height:105px;
  background: #000;
  opacity: 0.8;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 1;
  p{
    color: #fff;
    line-height: 150px;
    text-align: center;
    position:relative;
  }
  p:before{
    content: "";
    position: absolute;
    left: 37px;
    top:10px;
    width: 40px;
    height: 20px;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-right-color: transparent; 
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);

  }
}
</style>
