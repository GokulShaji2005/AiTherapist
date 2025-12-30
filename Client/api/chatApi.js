import { api } from "@/lib/api.js";

export const createNewSession=()=>{
    return api.post("/chat/session");
}

export const sendMessage=()=>{
    return api.post("/chat/userMessage",
        {
            message,sessionId,
        }
    );
}