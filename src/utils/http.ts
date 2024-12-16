import axios from "axios";
axios.defaults.baseURL = "/api/amazon-manage/";
axios.defaults.timeout = 6000;
axios.interceptors.request.use((config) => {
  // config.headers["authori-zation"] = localStorage.getItem("token");
  return config;
});
axios.interceptors.response.use((res) => {
  // console.log(res);
//   if (res.data.code === 401) {
//     setTimeout(() => {
//       window.location.href = "#/login";
//     }, 500);
//     return res;
//   }
  return res.data;
});
function http(url: string, method = "get", data: any, headers = "application/json") {
  return axios({
    url,
    method,
    data: method !== "get" ? data : null,
    params: method === "get" ? data : null,
    headers: {
      "Content-Type": headers,
    },
  });
}
export default http;