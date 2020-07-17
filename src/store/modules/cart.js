const state = {
  cartLists: [],//加入购物车的列表数据先赋值为空
};
//下面来actions请求
const actions = {
  addToCart: ({ state }, shopsDetail) => {
    const goods = {
      id: shopsDetail.id,//shopsDetail自定义的变量参，后面的那些id,name是和mock数据对象名称一样的
      name: shopsDetail.name,
      img: shopsDetail.img,
      money: shopsDetail.money,
      quantity: 1,//点击的加入购物车次数（加入商品多少个）
    };
    if (state.cartLists.length > 0) { //如果对象长度(就是判断第一个是第一组对象的，第二个是第二组对象的)大于0就是有商品
      let sum = state.cartLists.length; 
	  console.log(sum) //1开始，12345
      // console.log(state.cartLists.length)//循环的第几个
	  
	  state.cartLists.forEach((item) => { //对象开始循环
        if (item.id === shopsDetail.id) { //判断id是否等于对应mock数据的id
          
          item.quantity++; //1234567
		  // console.log(item.quantity);
          sum--; 
		  // console.log(sum);
        }
      });
      if (sum === state.cartLists.length) {
        state.cartLists.push(goods);
      }
    } else {
      state.cartLists.push(goods);
    }

    console.log(state.cartLists);
  },
};
const mutations = {};

export default {
  state,
  actions,
  mutations,
};
