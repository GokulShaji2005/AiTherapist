// import axios from "axios";
// import { supabase } from "./supabase/client";
// import { config } from "next/dist/build/templates/pages";
// export const api=axios.create({
//     baseURL:"http://localhost:4000/api",
//     headers:{
//         "Content-Type":"application/json",
//     }
// });

// // api.interceptors.request.use(
// //     async(config)=>{
// //         const {data}= await supabase.auth.getSession();
// //         const token=data.session?.access_token;
// //         if(token){
// //             config.headers.Authorization=`Bearer ${token}`
// //         }
// //           return config;
// //     },
    
// //   (error) => Promise.reject(error)
// // )

// // api.interceptors.response.use(
// //   (response) => response,

// //   (error) => {
// //     if (error.response?.status === 401) {
// //       supabase.auth.signOut();
// //       window.location.href = "auth/login";
// //     }

// //     return Promise.reject(error);
// //   }
// // );
// export const setAuthToken = (token) => {
//   if (token) {
//     api.defaults.headers.common.Authorization = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common.Authorization;
//   }
// };

import axios from "axios";
import { supabase } from "./supabase/client";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token to every request
api.interceptors.request.use(
  async (config) => {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      supabase.auth.signOut();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export default api;
