// import { chatCompletion } from "../services/llmLogic.js";
// import client from "../cache/redis.js";
// import crypto from "crypto";
// import { supabaseAdmin } from "../supabase.js";

// export const sendMessage=async(req,res,next)=>{
// try{
//      const userid=req.user.id;
//     //  const sessionid=121;
//     let {message,sessionid}=req.body;
//     if(!sessionid){
//            sessionid = crypto.randomUUID();
//     const { error} = await supabaseAdmin
//     .from("chat_sessions")
//     .insert({
//       id: sessionid,
//       user_id: userid,
//       title:"Hello"
//     });

//   if (error) {
//     console.log("Session insert error:", sessionError);
//     return res.status(500).json({ error: "Failed to create session" });
//   }
//     }
//     // const message="How are you";


//      const redisKey = `chat:${userid}:${sessionid}`;
//      try{
//            await client.rPush(
//       redisKey,
//       JSON.stringify({
//         role: "user",
//         content: message,
//         timestamp: Date.now(),
//       })
//     );
//      }
//      catch(err){
//         console.log("error in pushing user msg redis",err);
//       }
  
// //       const{error}=  await supabaseAdmin
// //         .from("chat_messages")
// //   .insert({
// //     session_id: sessionid,
// //     user_id: userid,
// //     role: "user",
// //     content: message
// //   });

// //   if(error){
// //     console.log("Error in push into db");
// //   }

// const { data, error } = await supabaseAdmin
//   .from("chat_messages")
//   .insert({
//     session_id: sessionid,
//     // user_id: userid,
//     role: "user",
//     content: message
//   })
//   .select();

// if (error) {
//   console.error("Supabase insert error:", error);
// } else {
//   console.log("Inserted row:", data);
// }

   
    
//     const reply=await chatCompletion(message);
//         await client.rPush(
//       redisKey,
//       JSON.stringify({
//         role: "system",
//         content: reply,
//         timestamp: Date.now(),
//       })
//     );

//     // 4️⃣ Set expiry (optional, recommended)
//     await client.expire(redisKey, 60 * 60); // 1 hour
//     await supabaseAdmin
//   .from("chat_messages")
//   .insert({
//     session_id: sessionid,
//     // user_id: userid,
//     role: "system",
//     content: reply
//   });


//     res.json({
//       reply: reply,
//       sessionid
//     });
        
//     // res.json({reply});

//     // console.log(  res.json({reply}))
// }
// catch(err)
// {
//     next(err);
// }
// }

import { chatCompletion } from "../services/llmLogic.js";
import client from "../cache/redis.js";
import crypto from "crypto";
import { supabaseAdmin } from "../supabase.js";

export const sendMessage = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { message, sessionid } = req.body;

    if (!sessionid) {
      return res.status(400).json({ error: "sessionId is required" });
    }

    const redisKey = `chat:${userId}:${sessionid}`;

    // 1️⃣ Redis cache
    await client.rPush(
      redisKey,
      JSON.stringify({
        role: "user",
        content: message,
        timestamp: Date.now()
      })
    );

    // 2️⃣ DB insert (source of truth)
    // await supabaseAdmin
    //   .from("chat_messages")
    //   .insert({
    //     session_id: sessionid,
    //     // user_id: userId,
    //     role: "user",
    //     content: message
    //   });
const { error } = await supabaseAdmin
  .from("chat_messages")
  .insert({
    session_id: sessionid,
    role: "user",
    content: message
  });

if (error) {
  console.error("DB insert error (user):", error);
}


    // 3️⃣ AI response
    const reply = await chatCompletion(message);

    await client.rPush(
      redisKey,
      JSON.stringify({
        role: "system",
        content: reply,
        timestamp: Date.now()
      })
    );

    // await supabaseAdmin
    //   .from("chat_messages")
    //   .insert({
    //     session_id: sessionid,
    //     // user_id: userId,
    //     role: "system",
    //     content: reply
    //   });


    const { error: sysError } = await supabaseAdmin
  .from("chat_messages")
  .insert({
    session_id: sessionid,
    role: "system",
    content: reply
  });

if (sysError) {
  console.error("DB insert error (system):", sysError);
}


    res.json({ reply });

  } catch (err) {
    next(err);
  }
};



