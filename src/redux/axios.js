import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

export const appUrl = process.env.REACT_APP_DOMAIN;

export const axiosPost = (url, payload, config) =>
  axios.post("/" + url, payload, config);
export const axiosGet = (url, payload, config) =>
  axios.get("/" + url, payload, config);
export const axiosPut = (url, payload, config) =>
  axios.put("/" + url, payload, config);
export const axiosPatch = (url, payload) => axios.put("/" + url, payload);
export const axiosDelete = (url, payload) => axios.delete("/" + url, payload);

// export const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// };
