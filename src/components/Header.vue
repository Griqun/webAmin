<template>
    <div class="fly-header">
    <div class="layui-container">
        <a class="fly-logo" href="/">
            <i class="iconfont icon-font-location"></i>
        </a>
        <div class="form layui-nav fly-nav-user">
            <form action="">
                <i class="iconfont icon-font-icon-test"></i>
                <input type="text" name="" id="" placeholder="卡修专家"> 
            </form>
        </div>
            

        
    </div>
    </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">
.fly-header{
    bottom: none;
    background: #fff;
}
.fly-logo i{
    font-size: 24px;
}
.fly-logo{
    top: 18px !important;
}
form{
    position: relative;
    padding: 10px;
    top:8px;
}
form input{
    padding: 15px 100px 15px 40px;
    background: #eee;
    border: none;
}
.fly-nav-user .iconfont{
    position: absolute;
    font-size: 18px;
    right:-30px;
    color: #ccc;
    top: 2px;
}

</style>
