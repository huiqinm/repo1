import axios from 'axios';

//  让请求在浏览器中允许跨域携带cookie
// axios.defaults.withCredentials = true;

// 使用自定义配置新建一个 axios 实例
const service = axios.create({
  // 基础的请求地址
  // baseURL: window.Baseweb_config.zhUrl,
  baseURL: '',  //中山
  // 设置超时时间 5s
  timeout: 30000,
  headers: {
    // 'X-HW-ID': '0cd6cb33-ed3b-4de6-9229-03a0817e3d42',
    // 'X-HW-APPKEY': '31ca93919ccd8f588e9a7e25f38695b3706b3835407994e583124110deb053e5'
  }
});

// 请求拦截器，例如请求的时候在头部加上请求的token
service.interceptors.request.use(config => {
  // if (localStorage.getItem('accessToken')) {
  //   config.headers.Authorization =
  //     localStorage.getItem('accessToken')
  // }
  return config;  //  有且必须有一个config对象被返回
}, error => {
  //   对请求错误做些什么
  console.warn(error);
  return Promise.reject();
});

// 响应拦截器,例如判断服务器返回的状态，400，500啥的，其实超时可以写到这里面来，我分开写了一个比较直观
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况,这些自定义（需要与后台商量返回）
  error => {
    // console.log('error======',error)
    if (
     error.response.status>= 400 && error.response.status  < 500
    ) {
      // 清除token
      // localStorage.removeItem("token");
      // 跳转登录
    } else {
      // if (error.response.status >= 500) {
      //   alert("服务器开小差了，请稍后再试！");
      // } else {
      //   alert("服务器开小差了，请稍后再试！");
      //   return Promise.reject(error)
      // }
    }
  }
);

export default service;