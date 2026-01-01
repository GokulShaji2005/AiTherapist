import { Groq } from 'groq-sdk';
import { therapistSystemPrompt } from '../prompts/therapistSytsem.js';
import { endSession } from '../prompts/endSession.js';

if (!process.env.GROQ_API_KEY) {
  throw new Error("❌ GROQ_API_KEY is missing")
}
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})


export const chatCompletion =async(Usermessage)=>
   {
        try{
    const response=    await groq.chat.completions.create({
  "messages": [
    
      {  "role": "system",
      "content": therapistSystemPrompt},
     { "role": "user",
      "content":Usermessage }
    
  ],
  "model": "llama-3.3-70b-versatile",
  "temperature": 0.8,
  "max_completion_tokens": 800,
  "top_p": 1,
  "stream": true,
  "stop": null
});
let fullResponse="";
for await (const chunk of response) {
  const token=chunk.choices[0]?.delta?.content || '';
  if(token){
    fullResponse+=token
  }
}

return fullResponse
    }
    catch(err){
      console.log("connect err",err);
      throw err
    }
    }
  
export const generateSessionInsights= async (compressedTest) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.4, // lower = more stable JSON
      max_completion_tokens: 500,
      stream: false, // IMPORTANT
      messages: [
        {
          role: "system",
          content: endSession
        },
        {
          role: "user",
          content: JSON.stringify(compressedTest, null, 2)
        }
      ]
    });

    const raw = response.choices[0].message.content;

    // Always validate JSON
    return JSON.parse(raw);

  } catch (err) {
    console.error("End session LLM error:", err);
    throw err;
  }
};
