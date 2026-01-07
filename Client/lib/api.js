
import axios from "axios";
import { supabase } from "./supabase/client";

const backend=process.env.NEXT_PUBLIC_BACKEND;
export const api = axios.create({
  baseURL: `${backend}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token to every request
api.interceptors.request.use(
  async (config) => {
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error getting session:", error);
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors only
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only handle 401 specifically
    if (error.response?.status === 401) {
      console.error("Session expired, redirecting to login");
      supabase.auth.signOut();
      window.location.href = "/auth/login";
    }
    
    // Let the calling code handle other errors
    return Promise.reject(error);
  }
);

export default api;
