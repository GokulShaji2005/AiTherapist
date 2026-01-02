import { Router } from "express";
import { sessionWiseMsg } from "../db/messageDb.js";
import { userWiseMsg } from "../db/messageDb.js";
import { endSession } from "../services/sessionData.js";
const dbRouter=Router();
dbRouter.post('/sessionWiseMsg',sessionWiseMsg);
dbRouter.post('/userWiseMsg',userWiseMsg);
dbRouter.post('/endSession',endSession);
export default dbRouter