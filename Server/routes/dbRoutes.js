import { Router } from "express";
import { sessionWiseMsg } from "../db/messageDb.js";
import { userWiseMsg } from "../db/messageDb.js";
const dbRouter=Router();
dbRouter.post('/sessionWiseMsg',sessionWiseMsg);
dbRouter.post('/userWiseMsg',userWiseMsg);
export default dbRouter