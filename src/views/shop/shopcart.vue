<template>
  <!-- shopcart -->
  <div class="shopcart-contain">
	  
	  <div v-if="empty" class="emptys">
	    购物车是空的~
	  </div>
	  <mt-header fixed title="固定在顶部"></mt-header>
    <div class="list-items" v-for="(item,index) in lists" :key="index">
        <ul>
            <li>
                <div class="circle">
                   
                   <input type="checkbox" class="Checkbox" id="check1">
                    <label for="check1" class=""></label>
                  
                </div>
                <div class="center-box">
                    <div class="left">
                        <img :src="item.img" alt="">
                        <div class="title">
                            <p>{{item.name}}</p>
                            <p>
                                <span>￥</span>
                                <span>{{item.money}}</span>
                            </p>
                        </div>
                        
                    </div>
                   
                    <div class="right">
                        <div class="ico">
                            <span class="iconfont icon-font-cheliang1"></span>
                        </div>
                        <div class="num">
                            <input type="text" value="-" readonly @click="item.pro_num--">
                            <span><input v-model='item.quantity'></span>
                            <input type="text" value="+" readonly @click="item.pro_num++">
                        </div>
                        
                    </div>
                </div>
               
            </li>
        </ul>
        
    </div>
    
    
    <!-- 底部结算 -->
    <div class="footer">

        <div class="heji">
            <div class="circle">                 
                <input type="checkbox" class="Checkbox" id="check2">
                <label for="check2"></label>
            </div>
            <div class="chooes">
                <span>全选&nbsp;&nbsp;</span>
                <span>合计：</span>
                <span>￥</span>
                <span></span>
            </div>
            
        </div>
        <div class="jiesuan">
            <a href="">结算<span>0</span></a>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { Header } from 'mint-ui';

export default {
  name: 'shopcart',
  data(){
      return{
		  // 1、先赋空值
          lists:[],
		  empty: true,
      }
  },
  methods:{
    
  },
  computed:{
	  ...mapState({
		cartLists: state => state.cart.cartLists,
		// 2、这个是拿vuex的cartLists数据过来的
	  }),
  },
  mounted() {
	  // 3、在这里赋值，第3步就可以去渲染了，除了这个item.quantity的++是在cart.js有的，就是加入购物车的数量
	  this.lists = this.cartLists
  },
  watch: {
    lists(e) {
      this.empty = e.length <= 0;
    },
  },
}
</script>
<style lang="scss" scoped>
.emptys{
	text-align: center;
	padding: 20px 0;
}
.list-items{
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
}
.list-items ul li{
    width:100%;
    height: 100px;
    display: flex;
    font-size: 14px;
   
}
.list-items ul li img{
    width: 100px;
    float: left;
}
.list-items ul li .title{
    float: right;
    padding: 10px;
    
}
.list-items ul li .title p:nth-child(2){
    position: absolute;
    bottom: 0;
    color: red;
    span:nth-child(2){
        font-size: 18px;
    }
}
.circle{
    width: 21px;
    .Checkbox{
        visibility: hidden;
    }
    .Checkbox+label{
        // position:absolute;
        width: 18px;
        height: 18px;
        border:2px solid #A6A6A6;
        border-radius: 50%;
        background-color:transparent;
        position: absolute;
        left: 7px;
        margin:40px 0;
    }
    .Checkbox:checked+label{
        background: red;
        border-color: red;
    }
    .Checkbox:checked+label::after {
        content: "";
        position: absolute;
        left: 3px;
        top:3px;
        width: 9px;
        height: 4px;
        border: 2px solid #fff;
        border-top-color: transparent;
        border-right-color: transparent; 
        transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
}
.center-box{
    width: 100%;
    display: flex;
}
.left{
    position: relative;
}
.right{
    width: 89px;
    padding:10px;
    position: relative;
    .ico{
        position: absolute;
        right: 0px;
    }
}
.right input{
    width: 21px;
    height: 21px;
    text-align: center;
}



.right input:focus{
    outline: none;
    
}
.right .num{
    position: absolute;
    bottom: 0;
    right: 0;
}
.right .num span{
    width: 43px;
    display: inline-block;
    text-align: center;
    input{
        border:none;
        width: 100%;
    }
}
// 底部结算
.footer{
    width:100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    position: fixed;
    bottom:0;
    background: #fff;
    justify-content: space-between;
}
.heji{
   .chooes{
        width:200px;
        float: right;
        margin-left: 21px;
    }
    .circle .Checkbox + label{
        margin:14px 0;
    }
}
.circle{
    float: left;
}
.jiesuan {
    position: absolute;
    right:10px;
    a{
    color: #fff;
    padding: 5px 20px;
    box-shadow: none;
    background: #615454;
    border-radius: 20px;
    }
}
</style>
