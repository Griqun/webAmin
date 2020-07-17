<template>
  <!-- quanzi -->
  <div class="quanzi-contain">
    <ul>
      <li v-for="(quanziList,index) in quanziLists" :key="index">
        <img :src="quanziList.img" alt="">
        <div class="type-quan">
          <h3>{{quanziList.name}}</h3>
          <p>
            <span>{{quanziList.people}}&nbsp;&nbsp;成员</span>
            <span>{{quanziList.tiezi}}&nbsp;&nbsp;帖子</span>
          </p>
          <p class="jiajie">简介：{{quanziList.desc}}</p>
          <div class="goin">加入</div>
        </div>
      </li>
      
    </ul>
  </div>
</template>
<script>

export default {
  name: 'quanzi',
  data () {
    return {
      quanziLists:[
      {
        img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
        name:"电控圈",
        people:1,
        tiezi:0,
        desc:""
      },
       {
        img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
        name:"天然气圈",
        people:1,
        tiezi:0,
        desc:""
      },
      {
        img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
        name:"后处理圈",
        people:1,
        tiezi:0,
        desc:"欢迎大家进入这个圈子，欢迎大家进入"
      },
      {
        img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
        name:"电器圈",
        people:1,
        tiezi:0,
        desc:"欢迎大家进入这个圈子，欢迎大家进入"
      },
      {
        img:"https://xcwy-img.oss-accelerate.aliyuncs.com/Carousel/20200621/20200621185917_18097.jpg",
        name:"机修圈",
        people:1,
        tiezi:0,
        desc:""
      }

    ]
      
    }
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    
    },
   
  
}
</script>
<style lang="scss" scoped>
.quanzi-contain img{
  width: 75px;
  height: 75px;
  border-radius: 75px;
  object-fit: cover;
}
.quanzi-contain li{
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #ccc;
}
.quanzi-contain .type-quan{
  width: 100%;
  font-size: 16px;
  padding: 0 15px;
  line-height: 2em;
  position: relative;
}
.quanzi-contain .type-quan .jiajie{
  font-size: 16px;
  
}
.quanzi-contain .type-quan .goin{
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px 25px;
  text-align:center;
  background:#f9d2c6;
  color: red;
  border-radius: 8px;
}
.quanzi-contain .type-quan span{
  margin-right: 5px;
}
</style>
