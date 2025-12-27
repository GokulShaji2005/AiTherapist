import { AuthUnknownError } from "@supabase/supabase-js";
import { supabaseAdmin } from "../supabase.js";

export const authMiddleware=async(req,res,next)=>{

// try{
//     const authHeader=req.headers.authorization;
   
//     if(!authHeader){
//         return res.status(401).json({error:"Missing authorization Header"})
//     }
// //   const token=authHeader.replace("Bearer","");
//   const token = authHeader.split(" ")[1]; 

//   const {data,error}=await supabaseAdmin.auth.getUser(token);

//   if(error || !data.user){
//     return res.status(401).json({error:"Invalid or expired token"});

//   }
 
  
//     // ✅ Log user details

//   req.user={
//     id:data.user.id,
//     email:data.user.email
//   };
try{  
req.user = {
    id: "mock-user-123",
    email: "test@example.com",
  };
 

next();
}
  
catch(err){
    return res.status(500).json({error:"Authentication Failed"})
}
}