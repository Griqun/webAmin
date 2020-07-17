<template>
  <div class="contain">
    <div class="contain-head">
      <div class="contain-swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperImg" :key="index" @click="gotoshop()">
              <img :src="item.banner" />
            </div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <!--  -->
     <div  class="ico-list-box">
        <div class="ico-list">
        <ul>
          <li v-for="(icoList,index) in icoLists" :key="index" @click="goMune(icoList.id)">
            <img :src="icoList.img" />
            <p>{{icoList.name}}</p>
          </li>
        </ul>
      </div>
     </div>
    <!-- 图标列表 -->
    <div class="contain-center">
      <div class="lists-box">
        <div class="lists">
          <ul>
            <li v-for="(list,index) in lists" :key="index">
              <img :src="list.img"/>
              <p>{{list.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="qiandao">
        <div class="left">
          <h1>每日签到</h1>
          <p>学习新技能  轻松赚积分</p>
        </div>
        <div class="right">
          <button>立即签到</button>
        </div>
      </div>
      <!-- 会员好礼 -->
      <div class="vipbox">
        <div class="vip-left">
          <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
        </div>
        <div class="vip-right">
           <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
           <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
        </div>
      </div>
      <!-- 积分商城 -->
      <div class="shop">
        <div class="title">
            <h2>积分商城</h2>
            <router-link to="/guzhang">故障码</router-link>
            <router-link to="/dainlutu">电路图</router-link>
            <router-link to="/houchuli">后处理</router-link>
            <router-link to="/chuanganqi">传感器与执行器</router-link>
            <span>更多 <span class="iconfont icon-font-jiantou"></span></span>
        </div>
        <div class="shop-swiper">
          <div class="swiper-container" id="swiper-container-book">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-book" v-for="(booksile,index) in bookslides" :key="index">
                <div class="red-flag">限时特惠</div>
                <img :src="booksile.banner" alt="">
                <p>{{booksile.bname}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 每日一课 -->
      <div class="class-day">
        <div class="title">
            <h2>每日一课</h2>
            <span>查看更多 <span class="iconfont icon-font-jiantou"></span></span>
        </div>
        <div class="class-card" v-for="(card,index) in cards" :key="index">
          <div class="class-left">
            <img :src="card.img" alt="">
          </div>
          <div class="class-right">
            <p>{{card.name}}</p>
            <p>
              <span>{{card.time}}</span>
              <span class="play">
                <i class="iconfont icon-font-bofang"></i>
                播放
               
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- 行业动态 -->
      <div class="profession-box">
        <div class="trades">
          <ul>
            <li :style="{borderBottom:stateType==1?'3px solid red':'none'}">
              <h2 @click="changeNav(1)">行业动态</h2>
            </li>
            <li :style="{borderBottom:stateType==2?'3px solid red':'none'}">
              <h2 @click="changeNav(2)">推荐资讯</h2>
            </li>
          </ul>
           <!--行业动态 -->
          <div class="trades-profess" :style="{display:stateType==1?'block':'none'}">
            <div class="pic-title">
              <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
              <div class="title">
                <p>06月19日</p>
                <p>欧航ME4六大优势引领中卡技术发展潮流</p>
              </div>
            </div>
            <!-- //展示列表 -->
            <div class="trades-lists" v-for="(tradesList,index) in tradesLists" :key="index">
              <div class="trade-time">{{tradesList.time}}</div>
                <div class="trade-right">
                  {{tradesList.name}}
                </div>
            </div>
            <!-- 展示列表// -->
          </div>
          <!--推荐资讯 -->
          <div class="trades-news" :style="{display:stateType==2?'block':'none'}">
            空空如也~
          </div>
        </div>
      </div>
      <!-- 推荐圈子 -->
      <div class="circle">
        <div class="circle-swiper">
          <div class="shop">
            <div class="title">
              <h2>推荐圈子</h2>
              <span>找圈子 <span class="iconfont icon-font-jiantou"></span></span>
            </div>
            <!-- //引用积分商城样式 -->
            <div class="shop-swiper">
              <div class="swiper-container" id="swiper-container-book">
                <div class="swiper-wrapper">
                  <div class="swiper-slide swiper-slide-book" v-for="(circlesile,index) in circlesiles" :key="index">
                    <div class="circle-pic">
                      <img :src="circlesile.pic" alt="">
                      <div class="circle-name">{{circlesile.name}}</div>
                      <div class="circle-parner">{{circlesile.parner}}</div>
                    </div>
                    <img :src="circlesile.img" alt="">
                  </div>
                </div>
              </div>
            </div>
            <!-- 引用积分商城样式// -->
            <!-- 圈子小标题 -->
            <div class="small-tips">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <p>#疑难求助老铁齐心#</p>
                  </div>
                  <div class="swiper-slide">
                    <p>#最美修车工#</p>
                  </div>
                  <div class="swiper-slide">
                    <p>#修车日常#</p>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 达人 -->
      <div class="daren">
        <div class="title">
          <h2>达人</h2>
        </div>
        <div class="daren-pic">
          <ul>
            <li v-for="(darenPic,index) in darenPics" :key="index">
              <img :src="darenPic.img" alt="">
              <p>{{darenPic.name}}</p>
            </li>
          </ul>
        </div>
        <div class="daren-num">
          <div class="nums">
            <ul>
              <li v-for="(darenPic,index) in darenPics" :key="index">
                <img :src="darenPic.img" alt="">
              </li>
            </ul>
          </div>
          <div>共39人</div>
          <div>查看更多 <span class="iconfont icon-font-jiantou"></span></div>
        </div>
      </div>
      <!--热门帖子  -->
      <div class="hottips">
        <div class="title hottips-title">
          <h2>热门帖子</h2>
          <span class="more">查看更多</span>
        </div>
        <div class="hot-contain">
          <div class="hot-box" v-for="(hotList,index) in hotLists" :key="index">
            <div class="hot-pic">
              <img :src="hotList.img" alt="">
            </div>
            <p>{{hotList.name}}</p>
            <p class="icos">
              <span class="comment">
                <i class="iconfont icon-font-pinglun"></i>
                {{hotList.comment}}
              </span>
              <span class="zan">
                <i class="iconfont icon-font-biaoqing"></i>
                {{hotList.zan}}
              </span>
            </p>
          </div>


          
          
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {getBanner} from '../../api/content'
import {getShop} from '../../api/content'
export default {
  name: "index",
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    })
    var swiper = new Swiper("#swiper-container-book", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
    this._getBanner()
    this._getShop()

  },
  methods:{
    _getBanner() {
      getBanner().then((res) => {
         this.svg = res.msg
        this.swiperImg=res.data
        console.log(res.data)
      }) 
    },
   _getShop() {
      getShop().then((res) => {
        this.svg = res.msg
        this.bookslides=res.data
        console.log(res.data)
      }) 
    },
    changeNav(index){
      if(index==1){
        console.log(123)
        this.stateType=1
      }else if(index==2){
        console.log(456)

        this.stateType=2
      }
    },
    gotoshop() {
        this.$router.push({path:'/shop'})
      },
    goMune(id){
       console.log(id)
      if(id==1){
        this.$router.push({
        path:'/guzhang',
     })
      }else if(id==2){
        this.$router.push({
          path:'/dianlutu',
        })
      }else if(id==3){
        this.$router.push({
          path:'/houchuli',
        })
      }else if(id==4){
        this.$router.push({
          path:'/chuanganqi',
        })
      }
   }
    
  },
  data(){
    return {
      display: true,
      stateType:1,
      swiperImg:[],
      icoLists:[
        {id:1,img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"查故障码"},
        {id:2,img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"电路图"},
        {id:3,img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"后处理"},
        {id:4,img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"传感器/执行器"}
      ],
      lists:[
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"气门正时"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"IQA计算"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"垫片调整"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"verv"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"123"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"fw"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"verer"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"verv"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"123"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"fw"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"123"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"fw"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"verer"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"verv"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"123"},
      
      ],
      bookslides:[
        // {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"正德友邦培训专用教材"},
        // {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621191132_49495.jpg",name:"正德友邦培训专用教材"},
        // {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"正德友邦培训专用教材"},
        // {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"正德友邦培训专用教材"},
        // {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"正德友邦培训专用教材"},
      ],
      cards:[
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"CAN接收帧AT101超时故障码排查案例",time:"2020年06月19日"},
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"CAN接收帧AT101超时故障码排查案例",time:"2020年06月19日"},
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"CAN接收帧AT101超时故障码排查案例",time:"2020年06月19日"}
      
      ],
      tradesLists:[
        {time:"06月19日",name:"比国六更牛逼！看欧曼GTL 2019款诠释北京渣土车标杆"},
        {time:"06月20日",name:"最新动态，恩曼中国转租售项目正式上线"}

      ],
      circlesiles:[
        {
          img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
          name:"机修圈",
          pic:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",
          parner:"共8位圈友"
        },
        {
          img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
          name:"电喷圈",
          pic:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",
          parner:"共8位圈友"
        },
        {
          img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
          name:"油泵圈",
          pic:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",
          parner:"共8位圈友"
        },
      ],
      darenPics:[
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"你"},
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"杨秋月"},
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"你"},
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"你"},
        {img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",name:"托斯吗旋转猫"}

      ],
      hotLists:[
        {
          img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
          name:"德龙车动力不足，无故障码，完美解决",
          comment:4,
          zan:6
        },
        {
          img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",
          name:"德龙车动力不足，无故障码，完美解决",
          comment:4,
          zan:6
        },
        {
          img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
          name:"德龙车动力不足，无故障码，完美解决",
          comment:4,
          zan:6
        },
      ]
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  height: 300px;
}
.contain-head{
  background: #fff;
}
.contain-swiper .swiper-slide img{
  width: 100%;
  height: 100%;
  border-radius:0 0 15px 15px;
}
.ico-list-box{
  position: relative;
  top: -45px;
  z-index: 1;
  
}

.ico-list ul{
  width:310px;
  height: 55px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-wrap: nowrap;
  // align-items: center;
  padding: 20px 30px;
  justify-content:space-between;
  border-radius: 10px;
  box-shadow: 0px 3px 9px 0px #ccc;
}
.ico-list li{
  width: 50px;
  height: 50px;
  line-height: 28px;
  border-radius: 25px;
  text-align: center;
}

.ico-list li img{
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
.ico-list li p{
  width: 100px;
  margin-left: -24px;
}
.contain-center{
  padding: 0 10px;
  background: #fff;
}
// 图标列表
.lists ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.lists li{
  width: 15%;
  height: 25%;
  border-radius: 20px;
  padding: 9px;
}
.lists p{
 text-align: center;
 padding-top: 5px ;
}
.lists li img{
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
// 立即签到
.qiandao{
  height: 93px;
  background: #34AFAC;
  border-radius: 5px;
  display: flex;
  justify-content:space-around;
  color:#fff;
}

.qiandao .left p{
 color:#fff;
 font-size: 16px;
 letter-spacing:1px;
 margin-top: 3px;
}
.left{
  padding: 15px 0px;
}
.right button{
  background: #fff;
  height: 40px;
  width: 118px;
  border-radius: 20px;
  border: none;
  color:#34AFAC;
  margin-top: 22px;
  letter-spacing:1px;
}
// 会员好礼
.vipbox{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.vipbox img{
  object-fit: cover;
}
.vipbox .vip-left{
  width: 180px;
}
.vipbox .vip-right{
  width: 200px;
}
.vipbox .vip-left img{
  width: 100%;
  height: 100%;
}
.vipbox .vip-right img{
  width: 100%;
  border-radius: 6px 6px 1px 1px;
}
.vipbox .vip-right img:first-child{
  margin-bottom: 12px;
}
// 积分商城
.title{
  line-height: 4em;
}
.title h2{
  float: left;
  font-weight: bold;
}
.title span{
  float: right;
  color: #999;
  font-size: 16px;
}
.shop #swiper-container-book{
  width: 100% !important;
}
.shop .swiper-slide{
  width: 180px !important;
  height: 280px;
  margin-right: 16px !important;
}
.shop .swiper-slide-book img{
  width: 100%;
  height: 100%;
}
.shop .swiper-slide-book{
  position: relative;
}
.shop .swiper-slide-book p{
  position: absolute;
  bottom: 35px;
  font-size: 18px;
  color: #999;
  width: 80%;
  text-align: center;
  margin: 0px 20px;
}
.shop .swiper-slide-book .red-flag{
  position: absolute;
  top: 0;
  background: red;
  padding: 10px 25px;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 0 0 30px 0;
}
// 每日一课
.class-day{
  width: 100%;
}
.class-day .class-card{
  clear: both;
  height: 142px;
}
.class-day .class-card .class-left{
  width: 180px; 
}
.class-day .class-left img{
  width: 100%;
  height: 130px;
  float: left;
  border-radius: 5px;
}
.class-day .class-right{
  float: right;
  width: 195px;
  height: 130px;
  position: relative;
}
.class-day .class-right p{
  font-size: 18px;
  justify-content: left;
}

.class-day .class-right p:nth-child(2){
  position: absolute;
  bottom: 0;
  font-size: 16px;
  color: #999;
}
.class-day .class-right .play{
    margin-left: 16px;
    color: #2B2D91;
}
// 行业动态
.trades li{
  float: left;
  margin-right: 22px;
  border-bottom: 3px solid red;
}
.trades .trades-profess .pic-title{
  width: 100%;
  position:relative;
}
.trades  .trades-profess .pic-title img{
  width: 100%;
  height: 160px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
}
.trades .trades-profess .pic-title .title{
  position:absolute;
  bottom: 15px;
  left: 20px;
  color: #fff;
  line-height: 2em;
}
.trades .trades-profess .pic-title .title p:first-child{
  width: 80px;
  line-height: 2em;
  text-align: center;
  background: red;
  border-radius: 2em;
}
.trades .trades-profess .pic-title .title p:nth-child(2){
  font-size: 18px;
}
.trades-profess .trades-lists{
  width: 100%;
  display: flex;
  font-size: 18px;
  margin-top: 15px;
}
.trades-profess .trades-lists .trade-time{
  width: 148px;
  height: 2em;
  background: #f7c0ae;
  line-height: 2em;
  color: red;
  text-align: center;
}
.trades-profess .trades-lists .trade-right{
  width: 492px;
  margin-left: 18px;
  line-height: 2em;
}
.trades ul{
  width: 100%;
  height: 30px;
  margin: 20px 0;
}
.trades .trades-profess{
  display: block;
}
.trades .trades-news{
  display: none;
}
// 推荐圈子
.circle .circle-pic{
  position: absolute;
  top: 44px;
  width: 100%;
  text-align:center;
  color: #fff;
}
.circle .swiper-slide-book  .circle-pic img{
  width: 55px !important;
}
.circle  .swiper-slide-book .circle-pic .circle-name{
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 22px;
}
.circle  .swiper-slide-book .circle-pic .circle-parner{
  font-size: 16px;
  margin-top: 88px;
}
// 圈子小标题
.small-tips{
  height: 65px;
  margin-top: 46px
}
.small-tips p{
  background: #e4dddd;
  font-size: 16px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  border-radius: 33px;
  padding: 0 15px;
}
.small-tips .swiper-slide:nth-child(1)>p{
  background: red;
  color: #fff;
}
.small-tips .swiper-slide{
  width: auto !important;
  height: auto !important;
}
// 达人
.daren .daren-pic{
  clear: both;
  width: 100%;
}
.daren .daren-pic ul{
  display: flex;
  padding: 0 10px;
  text-align: center;
  border-bottom: 1px solid #999;
}
.daren .daren-pic ul li{
  width: 20%;
}
.daren .daren-pic img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.daren .daren-pic ul li p{
  width: 95px;
  margin-left: -10px;
  line-height: 2.5em;
}
.daren .daren-num .nums img{
  width: 35px;
  height: 35px;
  border-radius: 35px;
  float: left;
  margin-left: -15px;
  border: 3px solid #fff;
}
.daren .daren-num .nums ul{
  width: 155px;
  height: 42px;
  line-height: 42px;
}
.daren .daren-num{
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  line-height: 42px;
  padding-left: 22px;
  letter-spacing: 1px;
  font-size: 16px;
  color:#999;
}
// 热门帖子
.hottips .hot-box{
  clear: both;
  width: 180px;
  margin-bottom: 38px;
  position: relative;
}
.hottips .hot-box .hot-pic{
  width: 100%;
}
.hottips .more{
  background: #ff5722;
  color: #fff;
  width: 100px;
  line-height: 33px;
  letter-spacing: 1px;
  font-size: 16px;
  border-radius: 33px;
  text-align: center;
}
.hottips .hottips-title{
  line-height: 33px;
}
.hottips .hot-box .hot-pic img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  
}
.hottips .hot-box p{
  margin-top: 12px;
  font-size: 16px;
}
.hottips .hot-box .icos{
  text-align: right;
}
.hot-contain{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  padding: 20px 0;
}
</style>
