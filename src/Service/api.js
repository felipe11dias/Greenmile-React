import axios from "axios";

const api = axios.create({
   baseURL: "https://api.github.com",
   headers: {
      'Accept': 'application/vnd.github.v3+json',
   }
});

// Intecepta a requisição.
api.interceptors.request.use( async req => {
   //await console.log(req);
   return req;
});

// Intecepta a resposta da requisição.
api.interceptors.response.use( async res => {
   //await console.log(res);
   return res;
}, error => {
   return Promise.reject(error);
});

export default api;