<template>
  <!-- ask -->
  <div class="xiuche-sevice">
      <div class="sevice-img">
        <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
        <div class="title">
          <p>卡车故障尚未解决？</p>
          <button>联系客服</button>
        </div>
      </div>
      <div class="service-list">
        <h2>常见故障</h2>
          <ul>
            <li>
              SVS故障灯一直亮着
              <span>></span>
            </li>
            <li>
              SVS故障灯一直亮着SVS故障灯一直亮着
              <span>></span>
            </li>
            <li>
              SVS故障灯一直亮着SVS故障灯一直亮着
              <span>></span>
            </li>
          </ul>
      </div>
     
  </div>
</template>
<script>

export default {
  name: 'ask',
  data () {
    return {
      
      
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
.xiuche-sevice{
  background: #fff;
}
.xiuche-sevice .sevice-img{
  width: 390px;
  padding: 10px;
  position: relative;
}
.xiuche-sevice .sevice-img img{
  width: 100%;
}
.xiuche-sevice .sevice-img .title{
  position: absolute;
  bottom: 0;
  line-height: 48px;
  text-align: center;
  color:#fff;
  margin: 30px 87px;
}
.xiuche-sevice .sevice-img .title p{
  font-size: 24px;
}
.xiuche-sevice .sevice-img .title button{
  border: none;
  background: #ff5722;
  line-height: 30px;
  padding: 3px 30px;
  border-radius: 30px;
  color:#fff;
}
// 常见故障
.service-list li{
  position: relative;
  padding: 20px 10px;
  font-size: 18px;
  color: #999;
  border-bottom: 1px solid #ccc;
}
.service-list h2{
  padding: 10px; 
}
.service-list li span{
  position: absolute;
  right: 10px;
 
 
}
</style>
