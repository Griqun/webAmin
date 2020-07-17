<template>
  <!-- shop -->
  <div class="shop-contain">
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in images" :key="index">
            <img :src="item" />
          </div>
          
        </div>
        <!-- Add Arrows -->
        
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 出售列表 -->
    <div class="shop-list">
      <div class="lists">
        <ul class="clear">
          
          
          <li v-for="(item,index) in shopLists" :key="index" @click="jumpPage(index)">
            <!--  -->
            <img :src="item.img" alt="">
            <div class="desc">
              <p>{{item.name}}</p>
              <p>￥{{item.money}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shop-foot clear">
      <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
      <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621184018_42810.jpg" alt="">
    </div>
  </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import mock from '../../mock/index.js'
import {mapMutations} from 'vuex'
export default {
  name: 'shop',
  data () {
    return {
      shopLists:mock.shopLists,
      images:mock.imagesCarousel     
    }
  },
  components: {
    
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

   
  },
    methods: {
      jumpPage(id){
        this.$router.push(`/shopdetail/${id}`)
      }
    }
  }
  

</script>
<style lang="scss" scoped>
.swiper-box{
  height: 185px;
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
// 出售列表
.shop-list .lists ul{
  // display: flex;
  // justify-content: space-between;
  // flex-flow: wrap;
  padding: 20px 5px;
}

.shop-list .lists li{
  width: 190px;
  background: #fff;
  padding-top: 10px;
  margin-bottom: 5px;
  float: left;
  border-radius: 10px;
  margin: 6px;
}
.shop-list .lists img{
  width: 100%;
}
.shop-list .lists li .desc{
 
  padding: 20px 5px 10px 5px;
  font-size:16px;
}
.shop-list .lists li .desc p{
  padding: 5px;
}
.shop-list .lists li .desc p:nth-child(2){
  font-size:18px;
  color: red;
  padding-bottom: 0;;
}
// 底部
.shop-foot{
  clear: both;
  display: flex;
  justify-content: space-between;
  height: 100px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 60px;
}
.clear:after{
  clear: both;
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.shop-foot img{
  width: 200px;
  height: auto;
  border-radius: 10px;
}
</style>
