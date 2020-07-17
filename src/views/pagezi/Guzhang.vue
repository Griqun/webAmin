<template>
  <!-- guzhang -->
  <div class="guzhang-sevice">
      <img src="https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg" alt="">
      <div class="content-form">
        <form action="" class="form">
          <h2>查故障码</h2>
          <input type="text" name="slect" id="slect" placeholder="请输入故障码，如：1011">
          <div class="record">
            <label for="select">搜索记录</label>
            <p name="select">你还没有搜索记录</p>
          </div>
          <button type="submit">查询</button>
        </form>
        <!-- 查SPN_FMI码 -->
        <div class="containers">
          <form action="" class="form-one">
            <div class="form-title">
              <h2>查SPN_FMI码</h2>
              <h2 @click="isActive = !isActive"><i class="iconfont icon-zan1"></i></h2>
            </div>
            <collapse>
              <div class="content" v-show="isActive">
                <div class="content-input">
                  <input type="text" name="slect" id="slect" placeholder="请输入数字">
                  <span>-</span>
                  <input type="text" name="slect" id="slect" placeholder="请输入数字">
                </div>
                <div class="record">
                  <div class="record-left">
                    <label for="select">搜索记录</label>
                    <p name="select">你还没有搜索记录</p>
                  </div>
                  <div class="record-del">
                    <i class="iconfont icon-zan1"></i>
                  </div>
                </div>
                <button type="submit">查询</button>
              </div>
            </collapse>
          </form>
        </div>
        <!-- 查故障码描述 -->
        <div class="containers">
          <form action="" class="form-two">
            <div class="form-title">
              <h2>查故障码描述</h2>
              <h2 @click="isActive = !isActive"><i class="iconfont icon-zan1"></i></h2>
            </div>
            <collapse>
              <div class="content" v-show="isActive">
                <input type="text" name="slect" id="slect" placeholder="请输入文字，如：扭矩限制">
                <div class="record">
                  <div class="record-left">
                    <label for="select">搜索记录</label>
                    <p name="select">你还没有搜索记录</p>
                  </div>
                  <div class="record-del">
                    <i class="iconfont icon-zan1"></i>
                  </div>
                </div>
                <button type="submit">查询</button>
              </div>
            </collapse>
          </form>
        </div>
      </div>
  </div>
</template>
<script>
import collapse from "../../assets/js/collapse.js";
export default {
  
  name: 'guzhang',
  data () {
    return {
      isActive: false
      
    }
  },
  components: {
    collapse
  },
  mounted () {
    // this._getList()
  },
  methods: {
    
    },
   
  
}
</script>
<style lang="scss" scoped>
.guzhang-sevice img{
  width: 100%;
}
.guzhang-sevice form{
  padding: 22px;
  margin: 0 auto;
  color:#fff;
  background: #20b5aedb;
}
.guzhang-sevice .form{
  padding-bottom: 44px;
}
.guzhang-sevice form h2{
  margin-bottom: 20px;
 
}
.guzhang-sevice form input{
  padding: 15px 100px;
  border: none;
  background-color: #79CECA;
}
input::-webkit-input-placeholder{
  color:#fff;
  
}
.record{
  padding: 20px 0;
  font-size: 16px;
  color:#e2e2e2;
}
.record p{
  padding: 10px 0;
  
}
.guzhang-sevice form button{
  border: none;
  padding: 12px 86px;
  background: #ff4004;
  border-radius: 40px;
  color: #fff;
  font-size: 16px;
  margin: 0px 83px;
}

// 第二个表单
.guzhang-sevice .form-one{
  border-bottom: 10px;
  border-radius: 16px 16px 0 0;
  background:#2652a2;
  border-bottom: 10px;
  margin-top: -15px;
  padding-bottom: 44px;
}
.form-title{
  display: flex;
  justify-content: space-between;
}
.guzhang-sevice .form-one .record{
  display: flex;
  justify-content: space-between;
}
.guzhang-sevice .form-one .content-input{
  display: flex;
  width: 100%;
  justify-content: center;
}
.guzhang-sevice .form-one .content-input span{
  padding: 10px;
}
.guzhang-sevice .form-one input{
  padding: 13px 0px;
  text-align: center;
  width: 120px;
  background: #476CAF;
}
// 第三个表单
.guzhang-sevice .form-two{
  background: #2A229C;
  margin-top: -15px;
  border-radius: 16px 16px 0 0;
}
.guzhang-sevice .form-two input{
  background:#504AAD ;
}
.guzhang-sevice .form-two .record{
  display: flex;
  justify-content: space-between;
}
</style>
