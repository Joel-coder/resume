import axios from "axios";

//const ORRBIT_BASE_URL = 'https://orbbit-dev.cf:3000/api/';
const ORRBIT_BASE_URL = "https://api.linkedin.com/v2/";

export const BaseApiInstance = () => {
  axios.interceptors.request.use(
    (request) => {
      //  console.log("Axios Request : ", request);
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axios.create({
    baseURL: ORRBIT_BASE_URL,
    headers: {
      accept: "application/json",
    },
  });
};

export default BaseApiInstance;
