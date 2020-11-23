//引入axios核心库
import axios from 'axios'

//重新创建一个实例
const http = axios.create({
    baseURL:'/api'
})
//请求拦截
http.interceptors.request.use(req => {
    let token = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo")).token
      : "";
    req.headers.authorization = token;
    return req;
  });
  
  //响应拦截
  http.interceptors.response.use(res => {
    if (res.code == 500) {
      Toast.fail(res.msg);
      router.push("/login");
      return res.data;
    } else if (res.code == 403) {
      Toast.fail(res.msg);
      router.push("/login");
      return res.data;
    } else {
      return res.data;
    }
  });

//导出http实例
export default http