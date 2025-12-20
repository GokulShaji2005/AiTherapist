import { chatCompletion } from "../services/llmLogic.js";

export const sendMessage=async(req,res,next)=>{
try{
    const {message}=req.body;

    const reply=await chatCompletion(message);
    res.json({reply});
    // console.log(  res.json({reply}))
}
catch(err)
{
    next(err);
}
}