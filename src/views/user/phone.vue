<template>
  <!-- phone -->
  <div class="phone-contain">
      <h1>绑定手机号码</h1>
      <p>未绑定手机可能导致账号存在风险，请绑定手机</p>
      <form action="">
          <input type="text" name="" id="" placeholder="请输入你的手机号">
          <a href="">获取验证码</a>
          <input type="text" placeholder="请输入你的验证码"><br>
          <button type="submit">确认提交</button>
      </form>
  </div>
</template>
<script>

export default {
  name: 'phone',
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
.phone-contain form{
    height: 300px;
}
.phone-contain form input{
    position: relative;
    width: 100%;
    padding: 20px 10px;
    background:#fff;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
}
.phone-contain form a{
    position: absolute;
    top:10px;
    right:10px;
    background: #e6e6e6;
    padding: 8px 15px;
    border-radius: 5px;
}
.phone-contain form button{
    border: none;
    font-size: 18px;
    display: block;
    width: 100%;
    background: #141358;
    height: 50px;
    color:#fff;
    border-radius: 10px;
    line-height: 50px;
}
</style>
