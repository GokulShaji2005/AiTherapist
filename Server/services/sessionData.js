import client from "../cache/redis.js";
import { supabaseAdmin } from "../supabase.js";
import { generateSessionInsights } from "./llmLogic.js";
function compressUserMessages(messages, maxChars = 1500) {
  let output = "";

  for (const msg of messages) {
    if (output.length + msg.length > maxChars) break;
    output += `- ${msg}\n`;
  }

  return output;
}


async function getUserMessages(client, userId, sessionId) {
const raw = await client.lRange(`chat:${userId}:${sessionId}`, 0, -1);

  return raw
    .map(m => JSON.parse(m))
    .filter(m => m.role === "user")
    .map(m => m.content);
}

export async function endSession(req, res) {
  try {

    const userId=req.user.id;
    const { sessionId } = req.body;

    // 1️⃣ Get user messages
    const userMessages = await getUserMessages(
      client,
      userId,
      sessionId
    );

    // if (userMessages.length === 0) {
    //   return res.status(400).json({ error: "No messages found" });
    // }

    if (!userMessages || userMessages.length === 0){
  console.warn("Ending session with no messages:", sessionId);
}

    // 2️⃣ Compress
    const compressedText = compressUserMessages(userMessages);

    // 3️⃣ LLM
    const insights = await generateSessionInsights(compressedText);

    // 4️⃣ Save to DB
  await supabaseAdmin
  .from("chat_sessions")
  .update({
    title: insights.title,
    summary: insights.summary,
    coping_steps: insights.copingSteps,

  })
  .eq("id", sessionId);

    // 5️⃣ Cleanup Redis
    await client.del(`chat:${userId}:${sessionId}`);

    res.json({
      success: true,
      insights
    });



  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "End session failed" });
  }
}
