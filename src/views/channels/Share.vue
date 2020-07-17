<template>
  <!-- ask -->
  <div class="qunazi-contain">
    <div class="user">
      <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
    </div>
    <div class="card">
      <div class="swiper-box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >
              <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621184018_42810.jpg" />
            </div>
            <div class="swiper-slide" >
              <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621184018_42810.jpg" />
            </div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="quanzi-list">
      <ul>
        <li @click="changeNav(1)" :style="{borderBottom:stateType==1?'2px solid red':'none'}">全部</li>
        <li @click="changeNav(2)" :style="{borderBottom:stateType==2?'2px solid red':'none'}">热门</li>
        <li @click="changeNav(3)" :style="{borderBottom:stateType==3?'2px solid red':'none'}">关注</li>
      </ul>
      <div class="list-content" :style="{display:stateType==1?'display':'none'}">
        <div class="content-head">
          <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621184018_42810.jpg" alt="">
          <div class="name">
            <p>小小命</p>
            <p>2020年06月28日  14:03:54</p>
          </div>
          <p class="guanzhu">关注</p>
        </div>
        <!-- 评论内容 -->
        <div class="content-comment">
          <p>123小小命小小命123小小命小小命123小小命小小命123小小命小小命123小小命小小命</p>
          <div class="comment-foot">
            <div class="comment-foot-left">
              <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621184018_42810.jpg" alt="">
              <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
            </div>
            <div class="comment-foot-right">
              <span>
                <i class="iconfont icon-shijian"></i>2
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>4
              </span>
              <span>
                <i class="iconfont icon-shijian"></i>
              </span>
            </div>
          </div>
        </div>
        <!-- 回复区 -->
        <div class="reply">
          <div class="reply-user">
            <p>
              <span>周周会 129732964326：</span>
              <span>我该说点什么好点，说说说说说说什么</span>
            </p>
          </div>
          <div class="reply-user">
            <p>
              <span>周周会 129732964326：</span>
              <span>我该说点什么好点，说说说说说说什么</span>
            </p>
          </div>
        </div>
      </div>

      <div class="hot-door" :style="{display:stateType==2?'display':'none'}">
        热门
      </div>

      <div class="guanzhu" :style="{display:stateType==3?'display':'none'}">
        关注
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
export default {
  name: 'share',
  data () {
    return {
      display: true,
      stateType:1,
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
    changeNav(index){
      if(index==1){
        this.stateType=1;
        
        
      }else if(index==2){
        this.stateType=2;
         
      }else if(index==3){
        this.stateType=3
         
      }
    }
    },
   
  
}
</script>
<style lang="scss" scoped>
.qunazi-contain{
  background: #fff;
}
.qunazi-contain .user{
  width: 100%;
  height: 100px;
}
.qunazi-contain .user img{
  width: 70px;
  height: 70px;
  border-radius: 70px;
  object-fit: cover;
  position: absolute;
  right: 0;
}
.qunazi-contain .card img{
  width: 100%;
}
// 列表
.quanzi-list ul{
  width: 200px;
  display: flex;
  justify-content: space-between;
  // background: pink;
  margin:0 auto;
  padding: 20px;
}
.quanzi-list ul li{
  font-size:18px;
  font-weight: bold;
  border-bottom: 2px solid red;
}

// 列表下的全部
.hot-door{
  display: none;
}
.guanzhu{
  display: none;
}
.list-content .content-head{
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  line-height: 25px;
  font-size: 16px;
}
.list-content .content-head img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
}
.list-content .content-head .name{
  padding: 0 12px 0 0;
}
.list-content .content-head p{
  padding: 0 12px;

}
.list-content .content-head .guanzhu{
  width: 50px;
  height: 30px;
  line-height:30px;
  text-align: center;;
  background: #f5cabd;;
  color: red;
  margin-left: 45px;
  margin-top: 10px;
}
// 评论区
.list-content .content-comment{
  padding: 10px;
  font-size: 16px;
  
}
.comment-foot-left img{
  width: 30px;
  height: 30px;
  border-radius: 30px;
  object-fit: cover;
  border: 1px solid #fff;
}
.comment-foot-left img:nth-child(n+2){
  margin-left: -10px;
}
.comment-foot{
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  // line-height: 15px;
}
.comment-foot-right span{
  padding-left: 20px;
}
// 回复区
.reply{
  padding:10px;
  font-size: 16px;
}
.reply .reply-user{
  margin-bottom: 10px;
}
.reply .reply-user p span:first-child{
  color: #1e9fff;
}
</style>
