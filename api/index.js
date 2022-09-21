import axios from "axios";

const BASE_URL = "xxx";

const ApiInstance = () => {
  axios.interceptors.request.use(
    (request) => {
      //   console.log("Axios Request: ", request);
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      accept: "application/json",
    },
  });
};

export default ApiInstance;
