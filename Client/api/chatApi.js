import { api } from "@/lib/api.js";

export const createNewSession= async()=>{
    return await api.post("/chat/session");
    
}

export const sendMessage= async(message,sessionid)=>{
    const res=await api.post("/chat/userMessage",
        {
            message,sessionid
        }
    );
     console.log('sendMessage response data:', res.data);
  return res.data;
}