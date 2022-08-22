import * as axios from "axios";

const GetClient = () => {
  const config = {
    method: "GET",
    url: `/json/`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };
  return axios(config);
};

const Get = (data) => {
  const config = {
    method: "GET",
    url: `/${data}/json/`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-type": "application/json" },
  };
  return axios(config);
};

export { Get, GetClient };
