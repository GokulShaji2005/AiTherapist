import './config/env.js' 
import express from 'express'

import router from './routes/chatRoutes.js';

const app = express()
const port = 3000

app.use(express.json());
app.use("/api/chat",router);

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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
