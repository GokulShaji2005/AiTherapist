import './config/env.js' 
import express from 'express'
import client from './cache/redis.js';
import router from './routes/chatRoutes.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import cors from "cors";
import dbRouter from './routes/dbRoutes.js';

const app = express()

app.use(cors());

app.use(express.json());
app.use("/api/chat",authMiddleware,router);
app.use("/api/db",authMiddleware,dbRouter);

// const res = await fetch('http://localhost:3000/api/chat/userMessage', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     message: 'I feel anxious today',
//     // sessionId: 'test-session-2'
//   })
// });

// const data = await res.json();
// console.log(data.reply);
// app.post("/chat",authMiddleware,async(req,res)=>{
  
// }
// app.post("/chat", authMiddleware, async (req, res) => {
//   const userId = req.user.id; // ✅ Supabase UID
//   const { message } = req.body;

//   // Example logic
//   res.json({
//     userId,
//     reply: `AI response to: ${message}`,
//   });
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT = process.env.PORT || 400;



await client.set("test:key", "hello", { EX: 60 });
const value = await client.get("test:key");
console.log(value);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
