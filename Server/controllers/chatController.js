import { chatCompletion } from "../services/llmLogic.js";
import client from "../cache/redis.js";
export const sendMessage=async(req,res,next)=>{
try{
     const userid=req.user.id;
     const sessionid=121;
    const {message}=req.body;
    // const message="How are you";


     const redisKey = `chat:${userid}:${sessionid}`;
       await client.rPush(
      redisKey,
      JSON.stringify({
        role: "user",
        content: message,
        timestamp: Date.now(),
      })
    );
    const reply=await chatCompletion(message);
        await client.rPush(
      redisKey,
      JSON.stringify({
        role: "system",
        content: reply,
        timestamp: Date.now(),
      })
    );

    // 4️⃣ Set expiry (optional, recommended)
    await client.expire(redisKey, 60 * 60); // 1 hour

    res.json({
      reply: reply,
    });
        
    // res.json({reply});

    // console.log(  res.json({reply}))
}
catch(err)
{
    next(err);
}
}

