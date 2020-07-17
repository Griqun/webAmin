<template>
  <!-- user -->
  <div class="user-contain">
    <div class="user-head">
      <div class="user-bg">
        <div class="user-pic">
          <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
          <button>点击登录获取头像昵称</button>
        </div>
      </div>
      <div class="user-ico">
        <ul>
          <li v-for="(userIco,index) in userIcos" :key="index">
            <img :src="userIco.img" />
            <p>{{userIco.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 列表 -->
    <div class="user-list">
      <ul>
        <li>
          <i class="iconfont icon-font-shouji"></i>
          手机号码
          
            <a href="#" @click="yanzheng()">
            马上验证
            <i class="iconfont icon-font-jiantou"></i>
            </a>
          
        </li>
        <router-link tag="li" v-for="(userList,index) in userLists" :key="index">
          <i :class="'iconfont'+' '+userList.ico"></i>
          {{userList.name}}
          <i class="iconfont icon-font-jiantou"></i>
        </router-link>
        <!-- <li v-for="(userList,index) in userLists" :key="index">
          <i :class="'iconfont'+' '+userList.ico"></i>
          {{userList.name}}
          <i class="iconfont icon-font-jiantou"></i>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'user',
  data () {
    return {
      userIcos:[
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"积分"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"优惠券"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"积分"},
        {img:"https://xcwy-img.oss-cn-beijing.aliyuncs.com/zdyb_icon/newsnav1.png",name:"积分"}
      ],
      userLists:[
        {name:"我的资料",ico:'icon-font-mine'},
        {name:"我的圈子",ico:'icon-font-quanzifuben'},
        {name:"我的订单",ico:'icon-font-dingdan'},
        {name:"我的关注",ico:'icon-font-guanzhu'},
        {name:"我的粉丝",ico:'icon-font-fensi'},
        {name:"反馈",ico:'icon-font-fankui'}
      ]
      
    }
  },
  components: {
    
  },
  mounted () {
    // this._getList()
  },
  methods: {
    yanzheng(){
      this.$router.push({
        path:'/phone'
      })
    }
    },
   
  
}
</script>
<style lang="scss" scoped>
.user-contain .user-bg{
  height: 147px;
  background: url('https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg');
}
.user-contain .user-bg .user-pic img{
  width:70px;
  height: 70px;
  border-radius: 70px;
  
}
.user-head{
  height: 275px;
}
.user-contain .user-bg .user-pic{
  line-height: 30px;
  padding: 20px 10px;
  
}
.user-contain .user-bg .user-pic button{
  border: none;
  padding: 11px;
  background: #53d051;
  line-height: 10px;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
}
.user-ico{
  position: relative;
  top: -20px;
}
.user-ico ul{
  display: flex;
  justify-content: space-around;
  width: 337px;
  background: #fff;
  margin: 0 auto;
  padding: 15px;
}
.user-ico ul li{
  width: 20%;
  text-align: center;
}
.user-ico ul li img{
  width: 60px;
  width: 60px;
  border-radius: 60px;
}
.user-ico ul li p{
  padding-top: 5px;
  font-size: 18px;
}
// 列表
.user-list{
  font-size: 16px;
}
.user-list i{
  font-size: 18px;
}
.user-list li{
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.user-list li a{
  color: #807e7e;
  text-decoration: none;
  position: absolute;
  right: 20px;
}
.user-list li i:nth-child(2){
  position: absolute;
  right: 20px;
}
</style>
