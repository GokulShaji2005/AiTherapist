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
    // const userid = req.user.id;
    const userid = crypto.randomUUID();
    let { message, sessionid } = req.body;

    // 1️⃣ Create session if missing
    if (!sessionid) {
      sessionid = crypto.randomUUID();

      const { error } = await supabaseAdmin
        .from("chat_sessions")
        .insert({
          id: sessionid,
          user_id: userid,
          title: "New Chat"
        });

      if (error) {
        console.error("Session insert error:", error);
        return res.status(500).json({ error: "Failed to create session" });
      }
    }

    const redisKey = `chat:${userid}:${sessionid}`;

    // 2️⃣ Store user message in Redis
    await client.rPush(
      redisKey,
      JSON.stringify({
        role: "user",
        content: message,
        timestamp: Date.now(),
      })
    );

    // 3️⃣ Store user message in DB
    const { error: msgError } = await supabaseAdmin
      .from("chat_messages")
      .insert({
        session_id: sessionid,
        role: "user",
        content: message
      });

    if (msgError) {
      console.error("Message insert error:", msgError);
    }

    // 4️⃣ AI reply
    const reply = await chatCompletion(message);

    await client.rPush(
      redisKey,
      JSON.stringify({
        role: "system",
        content: reply,
        timestamp: Date.now(),
      })
    );

    await client.expire(redisKey, 60 * 60); // 1 hour

    await supabaseAdmin
      .from("chat_messages")
      .insert({
        session_id: sessionid,
        role: "system",
        content: reply
      });

    res.json({ reply, sessionid });

  } catch (err) {
    next(err);
  }
};
