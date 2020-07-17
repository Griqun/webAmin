<template>
  <!-- ask -->
  <div class="daren-contain">
      <div class="daren-pic">
        <div class="pic-head">
          <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
          <div class="name">
            <span>昵称：水水</span>
            <span>排名：52</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  name: 'daren',
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
.daren-contain .daren-pic img{
  width: 80px;
  height: 80px;
  border-radius: 80px;
  object-fit: cover;

}
.daren-contain .daren-pic{
  width: 100%;
  height: 160px;
  background: url('https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621191132_49495.jpg') no-repeat;
  overflow: hidden;
}
.pic-head{
  width: 200px;
  margin: 14px auto;
  text-align: center;
  color: #fff;
  font-size: 18px;

}
.pic-head .name{
 line-height: 45px;
}
.pic-head .name span{
 padding: 0 8px;
}
</style>
