<template>
  <!-- houchuli -->
  <div class="dianlutu-sevice">
      <div class="form">
        <form action="">
          <input type="text" placeholder="请输入关键字，搜后处理">
          <button><i class="iconfont icon-sousuo"></i></button>
        </form>
        <p>根据后处理类型，查后处理资料</p>
      </div>
      <!-- 轮播 -->
      <div class="small-tips">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in slidename" :key="index">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dianlu-list"  v-for="(item,index) in listboxes" :key="index">
        <h3>{{item.title}}</h3>
        <ul>
          <li  v-for="(list,index) in item.lists" :key="index">
            <div class="list-img">
              <img :src="list.img" alt="">
            </div>
            <p>{{list.name}}</p>
          </li> 
        </ul>
      </div>
      
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: 'houchuli',
  data () {
    return {
      isActive: false,
      dianluLists:[
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"ECU电路图"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"ECU电路图"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"传感器针脚定义"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"ECU电路图"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"ECU电路图"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"ECU电路图"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"ECU电路图"}
      ],
      slidename:[
        {name:"尿素泵"},
        {name:"DCU"},
        {name:"EGR系统"},
        {name:"DPF"},
        {name:"传感器"},

      ],
      listboxes:[
        {
          title:"依柯卡特",
          lists:[
            {
              img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
              name:"依柯卡特"
            },
            {
              img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
              name:"依柯卡特1"
            },
            {
              img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
              name:"依柯卡特2"
            },
            {
              img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
              name:"依柯卡特2"
            },
            
          ]
        },
        {
          title:"依柯卡特",
          lists:[
            {
              img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
              name:"依柯卡特"
            },
            {
              img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
              name:"依柯卡特1"
            },
            
          ]
        },
      ],
    
     
    }
  },
  components: {
   
  },
  mounted () {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
  },
  methods: {
    
    },
   
  
}
</script>
<style lang="scss" scoped>
.dianlutu-sevice{
  
}
.dianlutu-sevice .form{ 
  padding-bottom: 30px ;
  background:#fff;
}
.dianlutu-sevice .form p{ 
  padding-left: 16px;
}
.dianlutu-sevice form{
  position: relative;
  width: 365px;
  padding: 16px 16px 16px 0;
  margin: 0 auto;
  
}
.dianlutu-sevice form input{
  padding: 20px 10px 20px 6px;
  border: none;
  width: 100%;
  background: #eee;
}
.dianlutu-sevice form button{
  position: absolute;
  right: 12px;
  padding: 8px 15px;
  
  border: none;
  border-radius: 8px;
  
  font-size: 16px;
  bottom: 26px;
}
// 轮播
// 圈子小标题
.small-tips{
  height: 45px;
  padding-left: 16px;
  background:#fff;
}
.small-tips p{
  background: #f2f2f2;
  font-size: 16px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  border-radius: 4px;
  padding: 0px 28px;
}
.small-tips .swiper-slide:nth-child(1)>p{
  background: #0b00ff;
  color: #fff;
}
.small-tips .swiper-slide{
  width: auto !important;
  height: auto !important;
}
// 列表
.dianlu-list{
  border-radius: 5px;
  background: #fff;
  padding-bottom: 20px;
  margin-top: 20px;
}
.dianlu-list ul{
  display: flex;
  justify-content: space-around;
  padding: 18px 0;
}
.dianlu-list li{
  width: 70px;
  height: 80px;
}
.dianlu-list h3{
  padding: 16px;
  padding: 10px 16px 10px 16px;
  border-left: 4px solid #0b00ff;
}
.dianlu-list li p{
  background: #eee;
  text-align:center;
  // overflow:hidden;
  // white-space:nowrap;
  // text-overflow:clip;
}
.dianlu-list li img{
  width:100%;
  height:70px;
  object-fit: contain;
  
}
.list-img{
  border: 1px solid #ccc;
}
</style>
