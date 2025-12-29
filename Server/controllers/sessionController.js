import crypto from "crypto";
import { supabaseAdmin } from "../supabase.js";
import client from "../cache/redis.js";

export const createNewSession = async (req, res) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = req.user.id;

    // 1️⃣ Get previous active session
    const previousSessionId = await client.get(
      `user:${userId}:active_session`
    );

    // 2️⃣ End previous session if exists
    if (previousSessionId) {
      await supabaseAdmin
        .from("chat_sessions")
        .update({ ended_at: new Date().toISOString() })
        .eq("id", previousSessionId)
        .eq("user_id", userId);

      // clear redis chat cache
      await client.del(`chat:${userId}:${previousSessionId}`);
    }

    // 3️⃣ Create new session
    const sessionId = crypto.randomUUID();

    const { data, error } = await supabaseAdmin
      .from("chat_sessions")
      .insert({
        id: sessionId,
        user_id: userId,
        title: "New Chat"
      })
      .select()
      .single();

    if (error) {
      console.error("Session create error:", error);
      return res.status(500).json({ error: "Failed to create session" });
    }

    // 4️⃣ Store active session in Redis
    await client.set(
      `user:${userId}:active_session`,
      data.id
    );

    res.json({ sessionId: data.id });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to connect" });
  }
};
