import http from './axios'
export function getRegister(data) {
    return http.post('/api/register', data)
}

export function getBanner(){
    return http.get('/api/getbanner')
}
//封装获取商品信息
export function getIndexGoods(){
    return http.get('/api/getindexgoods')
}

//封装分类
export function getCateTree(){
    return http.get('/api/getcatetree')
}

// 列表页
export function getGoods(params){
    return http.get('/api/getgoods',{
        params
    })
}

// 单个商品
export function getGoodsInfo(params){
    return http.get('/api/getgoodsinfo',{
        params
    })
}


// 登录
export function getLogin(data){
    return http.post('/api/login',data)
}
//购物车列表
export function getCartList(params){
    return http.get('/api/cartlist',{
        params
    })
}
// 加入购物车
export function getCartAdd(data) {
    return http.post('/api/cartadd', data)
}
//购物车删除
export function getCartDelete(data){
    return http.post('/api/cartdelete',data)
}
