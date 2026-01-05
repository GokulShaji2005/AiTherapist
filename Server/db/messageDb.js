import { supabaseAdmin } from "../supabase.js";







export const sessionWiseMsg=async(req,res)=>{
    try{
     const  userid=req.id;
     const {sessionId}=req.body

     const {data,error} = await supabaseAdmin
     .from("chat_messages")
     .select("id,role,content,created_at")
     .eq("session_id",sessionId)
     .order("created_at",{ascending:true})
   

    if(error){
        console.log("Error in fecthing messages:",error);
    }
    res.json({
       messages:data
    })
 }
 catch(error){
    console.log("db is not connecting for messsages",err);
 }
}

export const userWiseMsg=async(req,res)=>{
    try{
     const  userid=req.user.id;
    //  const {sessionId}=req.body

     const {data,error} = await supabaseAdmin
     .from("chat_sessions")
     .select("id,title")
     .eq("user_id",userid)
     .order("created_at",{ascending:true})
   

    if(error){
        console.log("Error in fetching session:",error);
    }
    res.json({
       messages:data
    })
 }
 catch(error){
    console.log("db is not connecting for session",error);
 }
}

export const summary=async(req,res)=>{
    try{
   //   const  userid=req.user.id;
     const {sessionId}=req.body

     const {data,error} = await supabaseAdmin
     .from("chat_sessions")
     .select("title,summary,coping_steps")
     .eq("id",sessionId)
     .order("created_at",{ascending:true})
   

    if(error){
        console.log("Error in fetching session:",error);
    }
    res.json({
       messages:data
    })
 }
 catch(error){
    console.log("db is not connecting for session",error);
 }
}

