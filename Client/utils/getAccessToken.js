import { supabase } from "@/lib/supabase/client";

export const getAccesstoken=async()=>{
    const {data,error}=await supabase.auth.getSession();
    if(error || !data.session){
   throw new Error("New active session");
    }

    return data.session.access_token;
}