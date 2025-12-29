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
    id: 
    // "67682ec2-180e-4965-ab30-8818b695b7d8"
    "67682ec2-180e-4965-ab30-8818b695b7d8"
  };
 

next();
}
  
catch(err){
    return res.status(500).json({error:"Authentication Failed"})
}
}