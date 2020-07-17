import axios from '../utils/request'
import qs from 'qs'

/**
 * 读取文章列表
 * @param {Object} options 读取文章列表接口参数
 */
const getList = (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}

// 温馨提醒
const getTips = () => {
  return axios.get('/public/tips')
}

// 本周热议
const getTop = () => {
  return axios.get('/public/topWeek')
}

// 友情链接
const getLinks = () => {
  return axios.get('/public/links')
}
//首页轮播
const getBanner = () => {
  return axios.get('/app/carousel')
}
// 积分商城
const getShop = () => {
  return axios.get('/app/carousel')
}
export {
  getList,
  getTips,
  getLinks,
  getTop,
  getBanner,
  getShop
}
