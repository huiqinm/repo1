import httpsApi from "../requests/https";

export function getUserInfo(value) {
    return request.get('/user/getUserInfo')
}

export function test1(query) {
  return httpsApi({
    url: "/test1/apigateway_token/kdyservice/landproject/getLandDetail?landid=302",
    method: "get",
    params: query
  });
};
export function test2(query) {
  return httpsApi({
    url: "test2/api/api1.json",
    method: "get",
    params: query
  });
};


/**
 * 企业画像的（ 企业画像-经营指标列表 ， 经营指标-时间线 ， 企业画像-经营效益-趋势  ， 企业基本信息 。。）
 * 根据参数的不同，获取不同的数据
 * @param {*} query1
 * @param {*} query2
 * @returns
 */
export function getEnterpriseImageData (data, params)  {
  return httpsApi({
    url: "/iocpublic/postbojson_fun",
    method: "post",
    data: data,
    params: params
  });
}

