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

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT = process.env.PORT || 400;



await client.set("test:key", "hello", { EX: 60 });
const value = await client.get("test:key");
console.log(value);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
