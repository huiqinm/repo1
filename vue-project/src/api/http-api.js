import httpApi from "../requests/http";


// 登录
export function login(data){
  return httpApi({
    url: "/CityBrainProject/userinfo/GetUserByUserIdAndName",
    method: "post",
    credentials: 'include',
    data: data,
    params: null
  });
};


//企业变化情况（企业-总体概况-左）（type=0:年，type=1:季，type=0:月）
export function getEnterpriseChanges (query) {
  return httpApi({
    url: "/CityBrainProject/enterpriseGeneralSituation/findChanges",
    method: "get",
    params: query
  });
};

