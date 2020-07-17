<template>
  <!-- dianlutu -->
  <div class="dianlutu-sevice">
      <div class="form">
        <form action="">
          <input type="text" placeholder="请输入关键字，搜电路图">
          <button>查询</button>
        </form>
      </div>
      <div class="dianlu-list">
        <ul>
          <li v-for="(dianluList,index) in dianluLists" :key="index">
            <img :src="dianluList.img" alt="">
            <p>{{dianluList.name}}</p>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>

export default {
  name: 'dianlutu',
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
      ]
    }
  },
  components: {
   
  },
  mounted () {
    // this._getList()
  },
  methods: {
    
    },
   
  
}
</script>
<style lang="scss" scoped>
.dianlutu-sevice{
  background:#fff;
}
.dianlutu-sevice .form{ 
  padding-bottom: 30px ;
  border-bottom: 1px solid #ccc;
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
  background: #00E339;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  bottom: 26px;
}
.dianlu-list ul{
  width:390px;
  display: flex;
  // justify-content: space-between;
  flex-flow: wrap;
  padding: 27px 10px;
  text-align: center;
  margin: 0 auto;
}
.dianlu-list ul li{
  width: 130px;
  margin-bottom: 20px;
}
.dianlu-list ul li p{
  margin-top: 10px;
}
.dianlu-list ul li img{
  width: 80px;
  height: 80px;
  border-radius: 80px;
  overflow: hidden;
}
</style>
