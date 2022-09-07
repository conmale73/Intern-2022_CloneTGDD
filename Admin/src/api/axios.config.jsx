import axios from "axios";

const baseURL = {
	auth: 'https://jwtoken.glitch.me',
	data: 'https://jsonserv.glitch.me'
}

const axiosInstance = axios.create({
	headers: {
		'content-type': 'application/json'
	}
  //withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (req) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosInstance, baseURL }
